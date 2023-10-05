"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import Empresa from "./components/Empresa";
import Lateral2 from "./components/Lateral2";
import Clientescontacto from "./components/clientescontacto";
import Letters from "./components/letters";
import Loader from "./components/Loader/Loader";
import gsap from "gsap";

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
          <Letters />
          <Empresa />
          <Lateral2 />
          <Clientescontacto />
        </>
      )}
    </main>
  );
}
