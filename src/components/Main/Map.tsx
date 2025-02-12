"use client";

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

const openGoogleMaps = () => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  window.open(url, "_blank");
};

const GoogleMapsComponent = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-blue-50 to-white p-6 md:p-10">
      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Lokasi Kami
      </h2>
      <div className="w-full max-w-4xl overflow-hidden rounded-lg">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <button
        onClick={openGoogleMaps}
        className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded"
      >
        Arahkan ke Lokasi
      </button>
    </div>
  );
};

export default GoogleMapsComponent;
