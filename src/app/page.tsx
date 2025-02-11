import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/Main/About";
import { VisionMission } from "@/components/Main/VisionMission";
import Information from "@/components/Main/Information";
import Coach from "@/components/Main/Coach";
import { GalleryDynasty } from "@/components/Main/GalleryDynasty";
import ObserverProvider from "@/Provider/OberserverProvider";

export default function Home() {
  return (
    <>
      <ObserverProvider>
        <Hero />
        <About />
        <VisionMission />
        <Information />
        <GalleryDynasty />
        <Coach />
      </ObserverProvider>
    </>
  );
}
