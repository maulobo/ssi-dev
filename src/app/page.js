"use client";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import Empresa from "./components/home-empresa";

import Clientescontacto from "./components/home-clientesContacto-wrap";
import Letters from "./components/home-letters";
import Loader from "./components/Loader/Loader";
import gsap from "gsap";
import HomeHero from "./components/home-hero";
import Lateral from "./components/home-lateral";
import Division from "./components/home-division";

export default function Home() {
  const [loading, setLoading] = useState(false);
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
          <Clientescontacto />
        </div>
      )}
    </main>
  );
}
