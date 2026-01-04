"use client";
import { useLayoutEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import gsap from "gsap";
import HomeNewSimple from "./components/home-new-simple";
import WhatsAppIcon from "./components/Whats";

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
    <>
      {loading ? (
        <Loader timeline={timeline} />
      ) : (
        <div>
          {/* SEO Hidden Content */}
          <h1
            style={{
              visibility: "hidden",
              position: "absolute",
              left: "-9999px",
            }}
          >
            Soto Servicios Industriales - Servicios Petroleros Patagonia
          </h1>
          <p
            style={{
              visibility: "hidden",
              position: "absolute",
              left: "-9999px",
            }}
          >
            Somos una compañía de servicios dirigidos a satisfacer las
            necesidades de la actividad industrial y de empresas e instituciones
            de gran volumen en la región Patagónica. Servicios de catering,
            transporte, módulos habitacionales e insumos petroleros.
          </p>

          {/* New Modern Home */}
          <HomeNewSimple />
          <WhatsAppIcon />
        </div>
      )}
    </>
  );
}
