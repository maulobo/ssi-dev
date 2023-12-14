"use client";
import { useLayoutEffect, useState } from "react";
import Empresa from "./components/home-empresa";

import Letters from "./components/home-letters";
import Loader from "./components/Loader/Loader";
import gsap from "gsap";
import HomeHero from "./components/home-hero";
import Lateral from "./components/home-lateral";

import Clientes from "./components/home-clientes";
import Contact from "./components/home-contact";
import WhatsAppIcon from "./components/Whats";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoading(false),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <main>
      {loading ? (
        <Loader timeline={timeline} />
      ) : (
        <div style={{ overflow: "hidden" }}>
          <HomeHero />
          <Letters />
          <Empresa />
          <Lateral />
          <Clientes />
          <Contact />
          <WhatsAppIcon />
        </div>
      )}
    </main>
  );
}
