import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const equipmentData = [
  {
    category: "Energía",
    specs: ["110KVA", "165KVA", "Tableros"],
    color: "from-red-900/20 to-red-600/5",
  },
  {
    category: "Iluminación",
    specs: ["Torres", "LED", "Alta potencia"],
    color: "from-orange-900/20 to-orange-600/5",
  },
  {
    category: "Almacenamiento",
    specs: ["Agua", "Combustible", "Variable"],
    color: "from-amber-900/20 to-amber-600/5",
  },
  {
    category: "Tratamiento",
    specs: ["Efluentes", "Purificación", "Residuos"],
    color: "from-red-900/20 to-red-600/5",
  },
];

export const Infrastructure = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section,
        { scale: 0.7, borderRadius: "10rem" },
        {
          scale: 1,
          borderRadius: "1rem",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        },
      );

      // Animar las cards de equipamiento
      const cards = section.querySelectorAll(".equipment-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              end: "top 30%",
              scrub: 1,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full flex items-center justify-center bg-surface px-3 md:px-12 py-3 md:py-6 md:h-screen">
      <div
        ref={sectionRef}
        className="relative w-full bg-corporate-dark text-white overflow-hidden flex items-center justify-center rounded-2xl border border-white/10 md:h-full"
      >
      {/* Grid de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(227, 6, 19, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(227, 6, 19, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full flex flex-col justify-center px-6 py-10 md:px-20 md:py-0 md:h-full">
        {/* Header */}
        <div className="mb-8 md:mb-16">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="w-10 md:w-16 h-1 bg-corporate-red"></div>
            <span className="text-corporate-red font-bold text-xs tracking-[0.3em] uppercase">
              Infraestructura
            </span>
          </div>
          <h2 className="text-4xl md:text-8xl font-display font-bold leading-[0.9] mb-4 md:mb-8">
            Equipamiento
            <br />
            <span className="text-corporate-red">Periférico</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Inventario completo para garantizar la funcionalidad total de
            campamentos en zonas remotas
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {equipmentData.map((item, i) => (
            <div
              key={i}
              className={`equipment-card relative overflow-hidden border border-white/10 bg-gradient-to-br ${item.color} backdrop-blur-xl p-5 md:p-8 group hover:border-corporate-red/50 transition-all duration-500`}
            >
              <div className="relative">
                <h4 className="text-lg md:text-2xl font-display font-bold mb-3 md:mb-6 text-white">
                  {item.category}
                </h4>
                <div className="space-y-2 md:space-y-3">
                  {item.specs.map((spec, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 md:gap-3 text-gray-300 text-xs md:text-sm"
                    >
                      <div className="w-1 h-1 bg-corporate-red rounded-full shrink-0"></div>
                      <span className="font-mono">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect línea roja */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-corporate-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Stats en la parte inferior */}
        <div className="grid grid-cols-3 gap-4 mt-8 md:flex md:gap-12 md:mt-16">
          <div>
            <div className="text-3xl md:text-5xl font-display font-bold text-white">
              165<span className="text-corporate-red text-xl md:text-3xl">KVA</span>
            </div>
            <div className="text-gray-500 text-xs md:text-sm uppercase tracking-wide mt-1 md:mt-2">
              Generadores
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-display font-bold text-white">
              100<span className="text-corporate-red text-xl md:text-3xl">%</span>
            </div>
            <div className="text-gray-500 text-xs md:text-sm uppercase tracking-wide mt-1 md:mt-2">
              Funcionalidad
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-display font-bold text-white">
              24<span className="text-corporate-red text-xl md:text-3xl">/7</span>
            </div>
            <div className="text-gray-500 text-xs md:text-sm uppercase tracking-wide mt-1 md:mt-2">
              Operativo
            </div>
          </div>
        </div>
      </div>

      {/* Elemento decorativo */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-corporate-red/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>
    </section>
  );
};
