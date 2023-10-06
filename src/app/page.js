"use client";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import Empresa from "./components/home-empresa";
import Lateral2 from "./components/home-Lateral2";
import Clientescontacto from "./components/home-clientesContacto-wrap";
import Letters from "./components/home-letters";
import Loader from "./components/Loader/Loader";
import gsap from "gsap";
import HomeHero from "./components/home-hero";

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
        <>
          <HomeHero />
          <Letters />
          <Empresa />
          <Lateral2 />
          <Clientescontacto />
        </>
      )}
    </main>
  );
}
