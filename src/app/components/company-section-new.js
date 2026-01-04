import React, { useEffect, useRef } from "react";
import "./company-section-new.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import neuquenMapa from "/public/images/pngNeuquen.png";

const CompanySectionNew = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const mapRef = useRef(null);
  const statsRef = useRef(null);

  let { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  let yContent = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  let yMap = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);

  const stats = [
    { number: "5+", label: "Años de experiencia" },
    { number: "100+", label: "Proyectos completados" },
    { number: "50+", label: "Clientes satisfechos" },
    { number: "24/7", label: "Disponibilidad" },
  ];

  const values = [
    {
      title: "RESPUESTA INMEDIATA",
      description:
        "Atención y solución rápida ante cualquier requerimiento operativo",
    },
    {
      title: "PROFESIONALISMO",
      description:
        "Personal altamente capacitado y comprometido con la excelencia",
    },
    {
      title: "FLEXIBILIDAD",
      description:
        "Adaptamos nuestros servicios a las necesidades específicas de cada cliente",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación del contenido
    gsap.fromTo(
      contentRef.current.children,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animación de las estadísticas
    gsap.fromTo(
      statsRef.current.children,
      {
        y: 50,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          end: "bottom 65%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="company-section-new">
      <div className="company-container">
        <div className="company-grid">
          <motion.div
            ref={contentRef}
            className="company-content"
            style={{ y: yContent }}
          >
            <div className="company-header">
              <span className="company-subtitle">NUESTRA EMPRESA</span>
              <h2>Líderes en servicios industriales para la Patagonia</h2>
            </div>

            <div className="company-description">
              <p>
                Somos una compañía de servicios generales con personal
                capacitado siempre a la altura de las circunstancias que se
                presentan. Nuestra visión es ampliar la capacidad y experiencia
                para garantizar la satisfacción del cliente y de nuestras tareas
                en los servicios actuales y los que se avecinen a futuro.
              </p>
            </div>

            <div className="company-values">
              <h3>Nuestros pilares fundamentales</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-item">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={mapRef}
            className="company-visual"
            style={{ y: yMap }}
          >
            <div className="map-container">
              <Image
                src={neuquenMapa}
                alt="Mapa de Neuquén"
                className="map-image"
                fill
                style={{ objectFit: "contain" }}
              />
              <div className="map-overlay">
                <div className="location-pin">
                  <div className="pin-dot"></div>
                  <span>NEUQUÉN</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div ref={statsRef} className="company-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="company-background">
        <div className="bg-geometric"></div>
      </div>
    </section>
  );
};

export default CompanySectionNew;
