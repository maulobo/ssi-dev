import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout } from "./components/layout/Layout";
import { Hero } from "./sections/Hero";
import { ProjectSummary } from "./sections/ProjectSummary";
import { Summary } from "./sections/summary";
import { ModulesSection } from "./sections/ModulesSection";
import { ProcessTimeline } from "./sections/ProcessTimeline";
import { BentoGridSection } from "./sections/BentoGridSection";
// import { GastronomySection } from "./sections/GastronomySection";
import { ImageRevealSection } from "./sections/ImageRevealSection";
import { VacaMuerta } from "./sections/VacaMuerta";
import { Infrastructure } from "./sections/Infrastructure";
import { Sustainability } from "./sections/Sustainability";
import { FAQ } from "./sections/FAQ";
import { Contact } from "./sections/Contact";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Conectar Lenis con GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <ProjectSummary />
      <Summary />
      {/* <GastronomySection /> */}
      <BentoGridSection />
      <Sustainability />
      <ModulesSection />
      <ProcessTimeline />
      <ImageRevealSection />
      <Infrastructure />
      <VacaMuerta />
      <FAQ />
      <Contact />
    </Layout>
  );
}

export default App;
