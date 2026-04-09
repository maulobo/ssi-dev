import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cat1 from "../assets/cat/1.jpg";
import cat2 from "../assets/cat/2.jpg";
import cat4 from "../assets/cat/3.jpeg";
import cat3 from "../assets/cat/4.jpg";

gsap.registerPlugin(ScrollTrigger);

export const BentoGridSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Card hero grande: entra desde abajo con escala
      gsap.fromTo(
        ".bento-hero",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        },
      );

      // Cards pequeñas: stagger desde abajo
      gsap.fromTo(
        ".bento-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reset",
          },
        },
      );

      // Texto del overlay de la hero card: aparece un poco después
      gsap.fromTo(
        ".bento-hero-text",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
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
      className="w-full bg-surface p-4 md:p-6 overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 md:h-screen">
        {/* Card grande izquierda: foto hero con overlay */}
        <div className="bento-hero md:col-span-2 md:row-span-2 relative rounded-4xl overflow-hidden group min-h-80">
          <img
            src={cat1}
            alt="Catering SSI"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="bento-hero-text absolute bottom-0 left-0 p-8 md:p-10">
            <span className="block text-corporate-red font-bold text-[10px] tracking-[0.5em] uppercase mb-3">
              Gastronomía · SSI
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-3">
              Elaboración Propia
              <br />
              de Excelencia
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Sabores excepcionales, atención con calidez.
            </p>
          </div>
        </div>

        {/* Card top-center: descripción 01 */}
        <div className="bento-card md:col-span-1 relative rounded-4xl overflow-hidden group min-h-45">
          <img
            src={cat3}
            alt="Catering para empresas"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/10" />
          <div className="relative h-full p-7 flex flex-col justify-between text-white">
            <span className="text-corporate-red font-bold text-[10px] tracking-[0.5em] uppercase">
              01
            </span>
            <div>
              <h4 className="font-display font-bold text-lg leading-snug mb-2">
                Catering integral para empresas y eventos
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Viandas diarias, coffee breaks, almuerzos ejecutivos y servicios
                in situ para todo tipo de ocasión.
              </p>
            </div>
          </div>
        </div>

        {/* Card top-right: foto */}
        <div className="bento-card md:col-span-1 relative rounded-4xl overflow-hidden group min-h-45">
          <img
            src={cat4}
            alt="Viandas SSI"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Card bottom-center: foto con texto */}
        <div className="bento-card md:col-span-1 relative rounded-4xl overflow-hidden group min-h-45">
          <img
            src={cat2}
            alt="Delivery SSI"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-white/70 text-xs leading-relaxed">
              Envíos a domicilio y a empresas
            </p>
          </div>
        </div>

        {/* Card bottom-right: descripción 02 */}
        <div className="bento-card md:col-span-1 bg-white rounded-4xl border border-gray-100 p-7 flex flex-col justify-between min-h-45">
          <span className="text-corporate-red font-bold text-[10px] tracking-[0.5em] uppercase">
            02
          </span>
          <div>
            <h4 className="font-display font-bold text-lg text-corporate-dark leading-snug mb-2">
              Soluciones logísticas y personalizadas
            </h4>
            <p className="text-corporate-grey text-sm leading-relaxed">
              Producción propia, entrega programada y atención a medida según
              cada necesidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
