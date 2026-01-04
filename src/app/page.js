"use client";
import { useState, useEffect } from "react";
import CustomLoader from "./components/CustomLoader";
import gsap from "gsap";
import HomeNewSimple from "./components/home-new-simple";
import WhatsAppIcon from "./components/Whats";

// Variable global que se resetea con cada carga de página
let hasShownLoader = false;

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Si no se ha mostrado el loader en esta carga de página, mostrarlo
    if (!hasShownLoader) {
      setLoading(true);
      hasShownLoader = true;
    }
  }, []);

  return (
    <>
      {loading ? (
        <CustomLoader onComplete={() => setLoading(false)} />
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
