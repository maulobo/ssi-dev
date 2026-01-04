import React, { useEffect, useRef } from "react";
import "./clients-section-new.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const ClientsSectionNew = () => {
  const containerRef = useRef(null);
  const logoGridRef = useRef(null);
  const titleRef = useRef(null);

  let { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  const clients = [
    { name: "YPF", logo: "/images/logos/ypf.png" },
    { name: "Tecpetrol", logo: "/images/logos/tecpetrol.png" },
    { name: "Schlumberger", logo: "/images/logos/schlumberger.png" },
    { name: "Weatherford", logo: "/images/logos/Weatherford.png" },
    { name: "Techint", logo: "/images/logos/techint.png" },
    { name: "Pan American Energy", logo: "/images/logos/pan.png" },
    { name: "Pecom", logo: "/images/logos/pecom.png" },
    { name: "Siderca", logo: "/images/logos/siderca.png" },
    { name: "GE", logo: "/images/logos/ge.png" },
    { name: "Cameron", logo: "/images/logos/cameron.png" },
    { name: "Superior Energy", logo: "/images/logos/superior.png" },
    { name: "Pampa Energía", logo: "/images/logos/pampa.png" },
    { name: "Transener", logo: "/images/logos/Transener.png" },
    { name: "Bolland", logo: "/images/logos/bolland.png" },
    { name: "Milicic", logo: "/images/logos/milicic.png" },
    { name: "AESA", logo: "/images/logos/aesa.png" },
    { name: "Contreras", logo: "/images/logos/contreras.png" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación del título
    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animación de los logos
    gsap.fromTo(
      logoGridRef.current.children,
      {
        y: 50,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: logoGridRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="clients-section-new">
      <div className="clients-container">
        <motion.div ref={titleRef} className="clients-header">
          <span className="clients-subtitle">NUESTROS CLIENTES</span>
          <h2>Confianza construida con</h2>
          <h2>líderes de la industria</h2>
          <p>
            Trabajamos con las principales empresas del sector energético,
            brindando servicios de calidad que respaldan sus operaciones
            críticas.
          </p>
        </motion.div>

        <motion.div ref={logoGridRef} className="clients-grid" style={{ y }}>
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </motion.div>

        <div className="clients-testimonial">
          <div className="testimonial-content">
            <blockquote>
              &quot;La confiabilidad y profesionalismo de Soto Servicios Industriales
              nos permite mantener nuestras operaciones sin interrupciones,
              cumpliendo siempre con los más altos estándares de calidad y
              seguridad.&quot;
            </blockquote>
            <div className="testimonial-author">
              <strong>Cliente del sector petrolero</strong>
              <span>Región Patagónica</span>
            </div>
          </div>
        </div>
      </div>

      <div className="clients-background">
        <div className="bg-pattern"></div>
      </div>
    </section>
  );
};

export default ClientsSectionNew;
