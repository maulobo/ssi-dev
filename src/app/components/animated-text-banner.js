import React, { useEffect, useRef } from "react";
import "./animated-text-banner.scss";
import { motion } from "framer-motion";
import gsap from "gsap";

const AnimatedTextBanner = () => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const keywords1 = [
    "DEDICACIÓN",
    "EXPERIENCIA",
    "INNOVACIÓN",
    "PROFESIONALISMO",
    "SERVICIO",
    "EMPRESA",
  ];

  const keywords2 = [
    "CATERING",
    "ALQUILER",
    "INSUMOS PETROLEROS",
    "VENTA",
    "TRAILER",
    "MÓDULOS HABITACIONALES",
  ];

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    // Animación continua del primer texto
    tl.to(
      text1Ref.current,
      {
        x: "-100%",
        duration: 20,
        ease: "none",
      },
      0
    );

    // Animación continua del segundo texto (dirección opuesta)
    tl.to(
      text2Ref.current,
      {
        x: "100%",
        duration: 20,
        ease: "none",
      },
      0
    );
  }, []);

  return (
    <section ref={containerRef} className="animated-text-banner">
      <div className="text-line text-line-1">
        <div ref={text1Ref} className="text-content">
          {keywords1.map((word, index) => (
            <span key={index} className="text-word">
              {word}
            </span>
          ))}
          {/* Duplicamos el contenido para efecto infinito */}
          {keywords1.map((word, index) => (
            <span key={`dup-${index}`} className="text-word">
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="text-line text-line-2">
        <div ref={text2Ref} className="text-content">
          {keywords2.map((word, index) => (
            <span key={index} className="text-word">
              {word}
            </span>
          ))}
          {/* Duplicamos el contenido para efecto infinito */}
          {keywords2.map((word, index) => (
            <span key={`dup-${index}`} className="text-word">
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="banner-overlay"></div>
    </section>
  );
};

export default AnimatedTextBanner;
