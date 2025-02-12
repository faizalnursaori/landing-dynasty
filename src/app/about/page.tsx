import { AboutSection } from "@/components/Main/AboutSection";
import { Benefit } from "@/components/Main/Benefit";
import GoogleMapsComponent from "@/components/Main/Map";

export default function page() {
  return (
    <>
      <AboutSection />
      <GoogleMapsComponent />
      <Benefit />
    </>
  );
}
