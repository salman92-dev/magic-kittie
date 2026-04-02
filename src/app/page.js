import Image from "next/image";
import HeroSection from "./components/Hero";
import CtaSection from "./components/CTA";
import Navbar from "./components/Navbar";
import ConceptMission from "./components/ConceptMission"; 
import CoreProduct from "./components/Core-product";
import Utility from "./components/Utility";
import Flywheel from "./components/Flywheel";
import RoadmapSection from "./components/Roadmap";
import CoreTeam from "./components/CoreTeam";
import FooterCTA from "./components/Footer-Cta";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CtaSection />
      <ConceptMission />
      <CoreProduct />
      <Utility />
      <Flywheel />
      <RoadmapSection />
      <CoreTeam />
      <FooterCTA />
    </div>
  );
}
