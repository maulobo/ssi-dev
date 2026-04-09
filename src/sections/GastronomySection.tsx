import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cat1 from "../assets/cat/1.jpeg";
import cat2 from "../assets/cat/2.jpeg";
import cat3 from "../assets/cat/3.jpeg";
import cat4 from "../assets/cat/4.jpeg";
import cat5 from "../assets/cat/5.jpeg";
import cat6 from "../assets/cat/6.jpeg";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  { label: "Desayunos & Meriendas", img: cat3, num: "01", tag: "Servicio matutino" },
  { label: "Almuerzos & Cenas",      img: cat1, num: "02", tag: "Comidas principales" },
  { label: "Coffee Breaks",          img: cat2, num: "03", tag: "Pausas productivas" },
  { label: "Catering Corporativo",   img: cat4, num: "04", tag: "Alta gama" },
  { label: "Viandas Premium",        img: cat5, num: "05", tag: "Delivery diario" },
  { label: "Servicios Especiales",   img: cat6, num: "06", tag: "Eventos & ceremonias" },
];

// ─── Single menu row ──────────────────────────────────────────────────────────

interface ItemProps {
  label: string;
  img: string;
  num: string;
  tag: string;
}

const MenuItem: React.FC<ItemProps> = ({ label, img, num: _num, tag }) => {
  const staticRef  = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const innerRef   = useRef<HTMLDivElement>(null);
  const tweenRef   = useRef<gsap.core.Tween | null>(null);

  const startMarquee = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    gsap.to(el,               { backgroundColor: "#ffffff", duration: 0.2, ease: "power1.out" });
    gsap.to(staticRef.current,  { opacity: 0, duration: 0.18, ease: "power1.out" });
    gsap.to(marqueeRef.current, { opacity: 1, duration: 0.18, ease: "power1.out" });

    if (tweenRef.current) tweenRef.current.kill();
    gsap.set(innerRef.current, { xPercent: 0 });
    tweenRef.current = gsap.to(innerRef.current, {
      xPercent: -50,
      duration: 32,
      ease: "none",
      repeat: -1,
    });
  };

  const stopMarquee = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    gsap.to(el,               { backgroundColor: "transparent", duration: 0.25, ease: "power1.out" });
    gsap.to(staticRef.current,  { opacity: 1, duration: 0.25, ease: "power1.out" });
    gsap.to(marqueeRef.current, { opacity: 0, duration: 0.25, ease: "power1.out" });

    if (tweenRef.current) { tweenRef.current.kill(); tweenRef.current = null; }
    gsap.to(innerRef.current, { xPercent: 0, duration: 0.55, ease: "power3.out" });
  };

  // Build repeated marquee content (×6 per copy, ×2 copies = seamless loop)
  const repeats = Array.from({ length: 6 });
  const SingleCopy = () => (
    <span className="flex items-center shrink-0">
      {repeats.map((_, i) => (
        <React.Fragment key={i}>
          <span
            className="font-display font-bold whitespace-nowrap tracking-tight text-corporate-dark"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {label}
          </span>
          <span
            className="mx-6 md:mx-10 shrink-0 rounded-lg overflow-hidden inline-flex items-center"
            style={{ width: 80, height: 54 }}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </span>
        </React.Fragment>
      ))}
    </span>
  );

  return (
    <div
      className="flowing-item relative overflow-hidden border-b border-white/10 cursor-pointer"
      style={{ height: 108 }}
      onMouseEnter={(e) => startMarquee(e)}
      onMouseLeave={(e) => stopMarquee(e)}
    >
      {/* ── Static row ── */}
      <div
        ref={staticRef}
        className="absolute inset-0 flex items-center px-8 md:px-14 gap-6"
      >
        <span
          className="font-display font-bold text-white flex-1 truncate tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
        >
          {label}
        </span>
        <span className="text-white/30 text-[10px] tracking-[0.35em] uppercase hidden md:block shrink-0">
          {tag}
        </span>
      </div>

      {/* ── Marquee row ── */}
      <div
        ref={marqueeRef}
        className="absolute inset-0 flex items-center opacity-0 pointer-events-none"
      >
        <div ref={innerRef} className="flex items-center will-change-transform">
          <SingleCopy />
          {/* duplicate for seamless loop */}
          <SingleCopy />
        </div>
      </div>

    </div>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────

export const GastronomySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".gastro-header",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reset",
          },
        }
      );

      // Menu rows stagger in
      gsap.fromTo(
        ".flowing-item",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reset",
          },
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gastronomia"
      className="w-full bg-corporate-dark py-20 md:py-28 overflow-hidden"
    >
      {/* ── Header ── */}
      <div className="gastro-header px-8 md:px-14 mb-14">
        <span className="block text-corporate-red font-bold text-[10px] tracking-[0.55em] uppercase mb-5">
          Gastronomía · SSI
        </span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="font-display font-bold text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Catering de Alta
            <br />
            <span className="text-white/40">Calidad en Sitio</span>
          </h2>

          <p className="text-white/40 text-sm leading-relaxed max-w-xs md:text-right">
            Elaboración propia. Servicio integral de gastronomía
            para campamentos, eventos corporativos y operaciones
            en campo.
          </p>
        </div>

        {/* divider */}
        <div className="mt-12 h-px bg-white/10 w-full" />
      </div>

      {/* ── Flowing menu ── */}
      <div>
        {ITEMS.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
};
