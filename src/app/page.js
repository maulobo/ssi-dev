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
import Wraper from "./components/lenis";

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
    <Wraper>
      {loading ? (
        <Loader timeline={timeline} />
      ) : (
        <div style={{ overflow: "hidden" }}>
          <h1 style={{ visibility: " hidden" }}>Soto Servicios Industriales</h1>
          <p style={{ visibility: " hidden" }}>
            Somos una compañía de servicios dirigidos a satisfacer las
            necesidades de la actividad industrial y de empresas e instituciones
            de gran volumen en la región Patagónica.
          </p>
                    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Soto Servicios Industriales",
            "url": "https://sotosisrl.com",
            "logo": "https://www.tuempresa.com/logo.png",
            "description": "Especialistas en trailers armados, catering para empresas, equipamiento petrolero y módulos habitacionales.",
            "telephone": "2994870406",
            "email": "logistica@ssisrl.com.ar",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": ",
              "addressLocality": "Neuquen",
              "addressRegion": "Neuquen",
              "postalCode": "8300",
              "addressCountry": "Argentina"
            },
            "sameAs": [
              "https://www.facebook.com/tuempresa",
              "https://www.instagram.com/tuempresa",
              "https://www.linkedin.com/company/tuempresa"
            ],
            "offers": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Trailers Armados",
                  "description": "Trailers personalizados para diversos usos comerciales y residenciales.",
                  "image": "",
                  "url": "https://www.tuempresa.com/trailers"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Servicios de Catering",
                  "description": "Servicios de catering profesional para eventos corporativos y proyectos industriales.",
                  "image": "",
                  "url": "https://sotosisrl.com/catering"
                }
              },
         
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Trailers",
                  "name": "Módulos Habitacionales",
                  "description": "Módulos habitacionales para proyectos industriales y campamentos temporales.",
                  "image": "",
                  "url": "https://sotosisrl.com/trailers"
                }
              }
            ]
          })
        }}
      />
          <HomeHero />
          <Letters />
          <Empresa />
          <Lateral />
          <Clientes />
          <Contact />
          <WhatsAppIcon />
        </div>
      )}
    </Wraper>
  );
}
