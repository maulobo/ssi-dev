import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/reveal/1.jpg";
import img2 from "../assets/reveal/2.png";
import img3 from "../assets/reveal/3.jpg";
import img4 from "../assets/reveal/4.png";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    img: img1,
    title: "Dormitorios Habitacionales",
    subtitle: "Confort en campo",
    description: "Módulos diseñados para el descanso y bienestar del personal",
  },
  {
    img: img2,
    title: "Oficinas y Salas de Reunión",
    subtitle: "Espacios de trabajo",
    description: "Ambientes profesionales equipados para la gestión operativa",
  },
  {
    img: img3,
    title: "Gimnasios y Espacios Recreativos",
    subtitle: "Bienestar del personal",
    description: "Instalaciones para actividad física y recreación",
  },
  {
    img: img4,
    title: "Diseño Modular Adaptable",
    subtitle: "Fabricación propia",
    description: "Soluciones personalizadas con transporte y montaje incluido",
  },
];

// ─── Desktop orbital ──────────────────────────────────────────────────────────

const DesktopSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const orbit = orbitRef.current;
    if (!section || !orbit) return;

    const ctx = gsap.context(() => {
      slides.forEach((_, i) => {
        const textEl = section.querySelector(`.text-${i}`);
        const imageEl = section.querySelector(`.bg-image-${i}`);
        if (!textEl || !imageEl) return;

        gsap.set(textEl, {
          opacity: i === 0 ? 1 : 0,
          x: i === 0 ? 0 : i % 2 === 0 ? 40 : -40,
        });
        gsap.set(imageEl, { opacity: i === 0 ? 1 : 0 });
      });

      gsap.set(orbit, { scale: 1, opacity: 1, rotation: 0 });

      const slideDuration = 2.1;
      const transitionDuration = 0.45;
      const rotationStep = 360 / slides.length;
      const cycleTl = gsap.timeline({
        paused: true,
        repeat: -1,
      });

      slides.forEach((_, i) => {
        const currentTextEl = section.querySelector(`.text-${i}`);
        const currentImageEl = section.querySelector(`.bg-image-${i}`);
        const nextIndex = (i + 1) % slides.length;
        const nextTextEl = section.querySelector(`.text-${nextIndex}`);
        const nextImageEl = section.querySelector(`.bg-image-${nextIndex}`);
        if (
          !currentTextEl ||
          !currentImageEl ||
          !nextTextEl ||
          !nextImageEl
        ) {
          return;
        }

        const currentX = i % 2 === 0 ? 40 : -40;
        const nextX = nextIndex % 2 === 0 ? 40 : -40;

        cycleTl.to({}, { duration: slideDuration });
        cycleTl.to(
          currentTextEl,
          {
            opacity: 0,
            x: -currentX,
            duration: transitionDuration,
            ease: "power2.inOut",
          },
        );
        cycleTl.to(
          currentImageEl,
          {
            opacity: 0,
            duration: transitionDuration,
            ease: "power2.inOut",
          },
          "<",
        );
        cycleTl.to(
          orbit,
          {
            rotation: `+=${rotationStep}`,
            duration: slideDuration,
            ease: "sine.inOut",
          },
          "<",
        );
        cycleTl.fromTo(
          nextTextEl,
          { opacity: 0, x: nextX },
          {
            opacity: 1,
            x: 0,
            duration: transitionDuration,
            ease: "power2.out",
            immediateRender: false,
          },
          "<",
        );
        cycleTl.fromTo(
          nextImageEl,
          { opacity: 0 },
          {
            opacity: 1,
            duration: transitionDuration,
            ease: "power2.out",
            immediateRender: false,
          },
          "<",
        );
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        end: "bottom 25%",
        onEnter: () => cycleTl.play(),
        onEnterBack: () => cycleTl.play(),
        onLeave: () => cycleTl.pause(),
        onLeaveBack: () => cycleTl.pause(),
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="fabricacion"
      className="min-h-screen w-full bg-white overflow-hidden relative px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="absolute left-6 top-12 z-20 md:left-10 md:top-14 lg:left-16 lg:top-16">
        <div>
          <h2 className="text-4xl font-display font-bold text-corporate-dark">
            Fabricación y Alquiler
            <br />
            <span className="text-corporate-red">de Módulos a Medida</span>
          </h2>
        </div>
      </div>

      <div className="relative flex min-h-[calc(100vh-12rem)] items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[520px] w-[520px]">
            {slides.map((slide, i) => (
              <div
                key={`bg-${i}`}
                className={`bg-image-${i} absolute inset-0 rounded-full overflow-hidden opacity-0`}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.85)" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          ref={orbitRef}
          className="relative h-[520px] w-[520px]"
          style={{ transformOrigin: "center center" }}
        >
          {slides.map((_, i) => {
            const angle = (i * 360) / slides.length;
            const radian = (angle * Math.PI) / 180;
            const radius = 250;
            const x = 250 + radius * Math.cos(radian - Math.PI / 2);
            const y = 250 + radius * Math.sin(radian - Math.PI / 2);
            return (
              <div
                key={`dot-${i}`}
                className="absolute w-4 h-4"
                style={{
                  left: `${(x / 500) * 100}%`,
                  top: `${(y / 500) * 100}%`,
                  transform: `translate(-50%, -50%) rotate(-${(360 / slides.length) * i}deg)`,
                }}
              >
                <div className="w-full h-full rounded-full bg-corporate-red shadow-lg shadow-corporate-red/50" />
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          {slides.map((slide, i) => {
            const isRight = i % 2 === 0;
            return (
              <div
                key={`text-${i}`}
                className={`text-${i} absolute top-1/2 w-72 -translate-y-1/2 opacity-0 ${
                  isRight
                    ? "left-[calc(50%+17rem)] text-left"
                    : "right-[calc(50%+17rem)] text-right"
                }`}
              >
                <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-corporate-red">
                  {slide.subtitle}
                </span>
                <h3 className="mb-3 text-3xl font-display font-bold leading-tight text-corporate-dark">
                  {slide.title}
                </h3>
                <p className="text-sm leading-relaxed text-corporate-grey">
                  {slide.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Mobile cards ─────────────────────────────────────────────────────────────

const MobileSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mobile-slide-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="fabricacion"
      className="w-full bg-white pt-14 pb-10 px-4"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-display font-bold text-corporate-dark leading-tight">
          Fabricación y Alquiler
          <br />
          <span className="text-corporate-red">de Módulos a Medida</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-5">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="mobile-slide-card rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
          >
            <div className="relative w-full aspect-[4/3]">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-white font-bold bg-corporate-red/80 px-2 py-1 rounded-full">
                {slide.subtitle}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-xl text-corporate-dark mb-2 leading-tight">
                {slide.title}
              </h3>
              <p className="text-sm text-corporate-grey leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── Export: elige layout según breakpoint ────────────────────────────────────

export const ImageRevealSection = () => {
  const [isMobile] = React.useState(() => window.innerWidth < 768);
  return isMobile ? <MobileSection /> : <DesktopSection />;
};
