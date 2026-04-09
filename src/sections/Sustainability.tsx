import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Viandas Empresariales",
    desc: "Menús semanales con amplia variedad para dietas y gustos. Ingredientes frescos, elaboración propia.",
  },
  {
    title: "Envíos y Delivery",
    desc: "A domicilio y a empresas. Calidad y comodidad garantizadas en cada entrega.",
  },
  {
    title: "Personalización",
    desc: "Servicios adaptados a los gustos y necesidades específicas de cada cliente.",
  },
  {
    title: "Servicios In Situ",
    desc: "Instalación completa de comedores y cocinas en locaciones según los requerimientos de cada operación.",
  },
];

export const Sustainability = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".svc-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
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
      id="catering"
      className="bg-white text-corporate-dark"
    >
      <div className="px-4 md:px-12 pt-16 pb-20">

        {/* Encabezado */}
        <div className="svc-item flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gray-100 mb-0">
          <div>
            <span className="block text-corporate-red font-bold text-[10px] tracking-[0.5em] uppercase mb-4">
              Gastronomía
            </span>
            <h2
              className="font-display font-bold text-corporate-dark leading-tight"
              style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
            >
              Catering de Alta<br />Calidad en Sitio
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Servicio integral de catering para empresas y particulares. Producción
            propia, entrega programada y atención personalizada.
          </p>
        </div>

        {/* Lista de servicios */}
        {services.map((s, i) => (
          <div
            key={i}
            className="svc-item group flex items-baseline gap-6 md:gap-10 py-6 border-b border-gray-100 hover:pl-1 transition-all duration-300 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-corporate-red/30 group-hover:bg-corporate-red transition-colors duration-300 shrink-0 mb-0.5" />

            <h3
              className="font-display font-bold text-corporate-dark group-hover:text-corporate-red transition-colors duration-300 flex-1 leading-none"
              style={{ fontSize: "clamp(18px, 2vw, 28px)" }}
            >
              {s.title}
            </h3>

            <p className="hidden md:block text-gray-400 text-sm leading-relaxed max-w-sm text-right shrink-0">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
