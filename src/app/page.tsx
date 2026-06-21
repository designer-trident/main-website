import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import Marquee from "@/components/Marquee";
import HighlightedWork from "@/components/HighlightedWork";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SubHero />
      <Marquee />
      <HighlightedWork />
    </div>
  );
}
