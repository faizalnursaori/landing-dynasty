"use client";

import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  height: "400px",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const lat = -6.326184728361334;
const lng = 107.29081108020202;

const center = {
  lat,
  lng,
};

const GoogleMapsComponent = () => {
  const [mapError, setMapError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, "_blank");
  };

  const handleLoadError = (error: Error) => {
    console.error("Error loading Google Maps:", error);
    setMapError("Failed to load Google Maps. Please try again later.");
  };

  const handleMapLoad = () => {
    setIsLoading(false);
  };

  if (mapError) {
    return (
      <div className="flex flex-col items-center bg-gradient-to-b from-blue-50 to-white p-6 md:p-10">
        <div className="text-red-500 text-center p-4">{mapError}</div>
      </div>
    );
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex flex-col items-center bg-gradient-to-b from-blue-50 to-white p-6 md:p-10">
        <div className="text-red-500 text-center p-4">Google Maps API key is not configured.</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-blue-50 to-white p-6 md:p-10">
      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Lokasi Kami
      </h2>
      <div className="w-full max-w-4xl overflow-hidden rounded-lg relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
          </div>
        )}
        <LoadScript googleMapsApiKey={apiKey} onError={handleLoadError}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={handleMapLoad}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <button
        onClick={openGoogleMaps}
        className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded transition duration-300"
      >
        Arahkan ke Lokasi
      </button>
    </div>
  );
};

export default GoogleMapsComponent;
