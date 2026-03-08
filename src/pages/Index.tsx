import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIDo from "@/components/WhatIDo";
import Perspective from "@/components/Perspective";
import WorkingOn from "@/components/WorkingOn";
import CareerHighlights from "@/components/CareerHighlights";
import WhatDidntWork from "@/components/WhatDidntWork";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <WhatIDo />
        <Perspective />
        <WorkingOn />
        <CareerHighlights />
        <WhatDidntWork />
        <Portfolio />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Beth Rochefort. All rights reserved.
      </footer>
    </>
  );
};

export default Index;
