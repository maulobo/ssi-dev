import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

export const ProjectSummary = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const words = textRef.current?.querySelectorAll(".word");

    if (!el || !words) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            end: "bottom 55%",
            scrub: 1, // Vincula la animación al scroll (1s de suavizado)
            toggleActions: "play reverse play reverse", // Juega en ambas direcciones
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const content = [
    "Nos",
    "especializamos",
    "en",
    "la",
    "fabricación,",
    "alquiler",
    "y",
    "transporte",
    "de",
    "trailers",
    "personalizados,",
    "ofreciendo",
    "soluciones",
    "llave",
    "en",
    "mano",
    "y",
    "servicios",
    "de",
    "catering",
    "para",
    "empresas",
    "y",
    "particulares.",
  ];

  const highlightWords = ["llave", "mano."];

  return (
    <section
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center bg-surface overflow-hidden"
    >
      <Container>
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <p
            ref={textRef}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-center leading-[1.2] tracking-tight text-corporate-dark"
          >
            {content.map((word, i) => {
              const isHighlight = highlightWords.includes(word);
              return (
                <span
                  key={i}
                  className={`word inline-block mr-[0.25em] ${isHighlight ? "text-corporate-red font-bold" : ""}`}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>
      </Container>
    </section>
  );
};
