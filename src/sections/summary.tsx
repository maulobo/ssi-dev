import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../components/ui/Container";
import iso9001Logo from "../assets/iso_9001.png";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: "100%", unit: "Operativo", label: "Campamentos llave en mano" },
  { value: "DTM", unit: "Integral", label: "Desmontaje, Transporte y Montaje" },
  { value: "Catering", unit: "In-Situ", label: "Alta calidad en campo" },
];

const titleWords = ["Experiencia", "y", "Compromiso", "en", "cada", "Proyecto"];

export const Summary = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          toggleActions: "play none none reset",
        },
      });

      // Label
      tl.fromTo(
        labelRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
        0,
      );

      // Palabras del título emergen desde abajo (clip)
      tl.fromTo(
        ".title-word",
        { y: "110%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.55, stagger: 0.06, ease: "power3.out" },
        0.15,
      );

      // Descripción
      tl.fromTo(
        descRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
        0.65,
      );

      // Métricas
      tl.fromTo(
        ".metric-card",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
        0.75,
      );

      // Valores: flash de escala
      tl.fromTo(
        ".metric-value",
        { scale: 0.75, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.4)" },
        0.85,
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certificaciones"
      className="h-screen w-full flex flex-col items-center justify-center bg-surface"
    >
      <Container>
        <div className="text-center mb-16">
          <span
            ref={labelRef}
            className="text-corporate-red font-bold text-sm tracking-widest uppercase mb-4 block"
          >
            Certificaciones &amp; Calidad
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-corporate-dark mb-6 flex flex-wrap justify-center gap-x-3">
            {titleWords.map((word, i) => (
              <span key={i} className="overflow-hidden inline-block">
                <span className="title-word inline-block">{word}</span>
              </span>
            ))}
          </h2>

          <p ref={descRef} className="text-corporate-grey text-lg max-w-2xl mx-auto">
            Garantizamos que nuestros campamentos estén 100% operativos en todos
            los aspectos: agua, luz y cloacas. Cumplimos con las normativas de
            seguridad exigidas por las operadoras petroleras.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="relative flex flex-col items-center gap-5 bg-white border border-corporate-red/20 rounded-2xl px-10 py-8 shadow-lg overflow-hidden">
              {/* decorative top stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-corporate-red rounded-t-2xl" />

              <img
                src={iso9001Logo}
                alt="ISO 9001 Certified"
                className="h-28 w-auto object-contain"
              />

              <div className="w-10 h-px bg-corporate-red/40" />

              <div className="text-center">
                <div className="text-corporate-dark font-bold text-lg tracking-wide leading-tight">
                  Certificados ISO 9001
                </div>
                <div className="text-corporate-grey text-sm mt-1.5 max-w-xs">
                  Sistema de Gestión de Calidad certificado internacionalmente
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {metrics.map((metric, i) => (
            <div key={i} className="metric-card text-center">
              <div className="metric-value text-4xl md:text-5xl font-display font-bold text-corporate-dark mb-1">
                {metric.value}
              </div>
              <div className="text-corporate-red font-bold text-sm uppercase tracking-wide mb-2">
                {metric.unit}
              </div>
              <div className="text-corporate-grey text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
