import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "../assets/home.mp4";
import logo from "../assets/logo-ssi.png";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1.5,
        },
      });

      // Fase 1: SSI escala hacia afuera y desaparece
      tl.to(
        titleRef.current,
        { scale: 5, opacity: 0, duration: 1, ease: "power2.in" },
        0,
      );

      // Fase 2: máscara negra se disuelve, el video se revela
      tl.to(
        maskRef.current,
        { opacity: 0, duration: 0.6, ease: "power1.out" },
        0.6,
      );

      // Fase 3: subtítulo aparece sobre el video revelado
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        0.9,
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
      style={{ isolation: "isolate" }}
    >
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={heroVideo}
      />

      {/* Máscara negra: el video se ve SOLO a través de las letras blancas */}
      <div
        ref={maskRef}
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ mixBlendMode: "multiply", backgroundColor: "black" }}
      >
        <div
          ref={titleRef}
          className="select-none"
          style={{ width: "clamp(280px, 50vw, 800px)" }}
        >
          <img
            src={logo}
            alt="SSI"
            className="w-full h-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      </div>

      {/* Subtítulo — aparece cuando el video está completamente revelado */}
      <div
        ref={subtitleRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0 pointer-events-none"
      >
        <span className="block text-white/60 text-xs md:text-sm font-bold tracking-[0.6em] uppercase mb-4">
          Soto Servicios Industriales
        </span>
        <p className="text-white/40 text-sm font-light tracking-[0.2em] text-center">
          Campamentos y módulos habitacionales llave en mano
        </p>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-widest uppercase">scroll</span>
        <div className="w-px h-10 bg-white/20" />
      </div>
    </section>
  );
};
