"use client";
import React, { useEffect, useRef } from "react";
import "../trailers/page.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const HeroTrailers = () => {
  let miVideo = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: miVideo.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        markers: true,
        pin: true, // Esto es opcional para mantener el video visible
        pinSpacing: false, // Esto es opcional para evitar espacios en blanco al hacer pin
        anticipatePin: 1, // Esto es opcional para mejorar la sincronización
        onUpdate: (self) => {
          // Calcula la duración del video en función del desplazamiento
          const videoDuration = miVideo.current.duration;
          const scrollProgress = self.progress;
          const newDuration = videoDuration * scrollProgress;
          miVideo.current.currentTime = newDuration;
        },
      },
    });

    tl.to(miVideo.current, {
      ease: "none",
      duration: () => miVideo.current.duration, // Duración del video inicial
    });
  }, []);

  return (
    <div>
      <div className="trailer-hero-title">
        <h1>TRAILERS & MÓDULOS</h1>
        <h2>Una nueva forma</h2>
        <h2>de construcción</h2>
      </div>
      <video ref={miVideo} autoPlay loop muted className="video">
        <source src="/herotrailer.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroTrailers;
