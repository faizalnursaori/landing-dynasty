import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/Main/About";
import { VisionMission } from "@/components/Main/VisionMission";
import Information from "@/components/Main/Information";
import Coach from "@/components/Main/Coach";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <Information />
      <Coach />
    </>
  );
}
