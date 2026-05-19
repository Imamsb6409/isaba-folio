import { useRef } from "react";
import HeroMain from "./components/HeroMain";
import MiniAbout from "./components/MiniAbout";
import ProjectPreview from "./components/ProjectPreview";
import LearningJourney from "./components/LearningJourney";
import Achievements from "./components/Achievements";
import SkillsGrid from "./components/SkillsGrid";
import FooterCTA from "./components/FooterCTA";

export default function Hero() {
  const container = useRef();

  return (
    <div ref={container} className="flex flex-col relative overflow-hidden bg-dark">
      <HeroMain />
      <MiniAbout />
      <ProjectPreview />
      <LearningJourney />
      <Achievements />
      <SkillsGrid />
      <FooterCTA />
    </div>
  );
}