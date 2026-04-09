import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/proceso/1.jpg";
import img2 from "../assets/2.png";
import img3 from "../assets/proceso/2.png";
import img4 from "../assets/proceso/4.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Diseño y Fabricación",
    description:
      "Desarrollamos módulos habitacionales personalizados con fabricación propia, adaptados a las necesidades específicas de cada cliente y proyecto.",
    image: img1,
  },
  {
    id: "02",
    title: "Logística y Transporte",
    description:
      "Contamos con una flota avanzada equipada con hidrogrúas, malacates y monitoreo en tiempo real para garantizar entregas en condiciones óptimas.",
    image: img2,
  },
  {
    id: "03",
    title: "Montaje y DTM",
    description:
      "Ejecutamos el desmontaje, transporte y montaje (DTM) con personal técnico capacitado, asegurando la integridad de los equipos en el yacimiento.",
    image: img3,
  },
  {
    id: "04",
    title: "Entrega Llave en Mano",
    description:
      "Garantizamos campamentos 100% operativos con servicios de agua, luz, cloacas, catering y mantenimiento integral. ",
    image: img4,
  },
];
export const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de línea central que se dibuja al hacer scroll
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
      );

      // Animación de cada step
      steps.forEach((_, i) => {
        const row = document.querySelector(`.step-row-${i}`);

        gsap.fromTo(
          row,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Título de Sección */}
      <div className="text-center mb-32 relative z-10 px-4">
        <span className="text-corporate-red font-bold tracking-[0.2em] text-sm uppercase block mb-4">
          Nuestro Proceso
        </span>
        <h2 className="text-5xl md:text-6xl font-display font-bold text-corporate-dark">
          Cadena de Valor
        </h2>
      </div>

      {/* Línea Central */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2 hidden md:block">
        <div className="timeline-line w-full h-full bg-corporate-red origin-top"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-row-${i} flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-32 last:mb-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Texto */}
            <div
              className={`flex-1 text-center ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold text-corporate-dark mb-4 relative z-10">
                {step.title}
              </h3>
              <p className="text-corporate-grey text-lg leading-relaxed max-w-md mx-auto md:mx-0 inline-block">
                {step.description}
              </p>
            </div>

            {/* Punto Central (Solo Desktop) */}
            <div className="hidden md:flex relative w-4 justify-center">
              <div className="w-4 h-4 bg-white border-2 border-corporate-red rounded-full z-20"></div>
            </div>

            {/* Imagen */}
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                <div className="absolute inset-0 bg-corporate-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
