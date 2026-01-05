"use client";
import React, { useEffect, useRef } from "react";
import styles from "./trailers-modern.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FaHome, FaCheck, FaCog, FaTools, FaShieldAlt } from "react-icons/fa";

const TrailersModern = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const featuresRef = useRef(null);

  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const features = [
    {
      icon: <FaCheck />,
      title: "PERSONALIZACIÓN",
      description:
        "Puedes diseñar y personalizar tu espacio de manera única para satisfacer tus necesidades y gustos específicos.",
      color: "#e7324b",
    },
    {
      icon: <FaTools />,
      title: "MANTENIMIENTO",
      description:
        "Requieren menos mantenimiento que una casa convencional debido a su tamaño más pequeño y diseño simplificado.",
      color: "#ff6b7d",
    },
    {
      icon: <FaCog />,
      title: "MINIMALISTA",
      description:
        "Fomentan un estilo de vida más minimalista, lo que puede ayudar a reducir el estrés y el consumo excesivo.",
      color: "#e7324b",
    },
    {
      icon: <FaShieldAlt />,
      title: "DISEÑO FLEXIBLE",
      description:
        "Puedes adaptar y modificar fácilmente el diseño interior para cambiar tus necesidades a lo largo del tiempo.",
      color: "#ff6b7d",
    },
  ];

  const benefits = [
    "Rápida construcción y montaje",
    "Comodidades modernas incluidas",
    "Soluciones temporales eficientes",
    "Equipamiento completo",
    "Instalación profesional",
    "Soporte técnico especializado",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación del título principal
    gsap.fromTo(
      titleRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Animación de las cards de características
    gsap.fromTo(
      `.${styles.featureCard}`,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
      }
    );

    // Animación de los beneficios
    gsap.fromTo(
      `.${styles.benefitItem}`,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: `.${styles.benefitsGrid}`,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className={styles.trailersContainer}>
      {/* Hero Section */}
      <section ref={heroRef} className={styles.hero}>
        <motion.div className={styles.heroVideo} style={{ y }}>
          <video autoPlay loop muted playsInline>
            <source src="/video/trailerBanner.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay}></div>
        </motion.div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroLabel}>
              <span>SOLUCIONES MÓVILES</span>
              <div className={styles.heroLine}></div>
            </div>

            <div ref={titleRef} className={styles.heroTitle}>
              <h1>
                <span className={styles.titleMain}>TRAILERS</span>
                <span className={styles.titleMain}>&</span>
                <span className={styles.titleMain}>MÓDULOS</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Una nueva forma de construcción
              </p>
            </div>

            <div className={styles.heroDescription}>
              <p>
                Las casas móviles suelen construirse en un entorno controlado y
                se pueden fabricar más rápidamente que las casas tradicionales,
                lo que significa que puedes mudarte a tu nueva vivienda más
                rápido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.videoSection}>
        <div className={styles.videoContainer}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.sectionVideo}
          >
            <source src="/video/trailerLoop.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection} ref={featuresRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              CARACTERÍSTICAS DESTACADAS
            </span>
            <h2>Ventajas de nuestros trailers y módulos</h2>
            <p>
              A pesar de su tamaño compacto, muchas viviendas en remolques están
              equipadas con comodidades modernas como cocinas, baños y sistemas
              de entretenimiento.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${styles.featureCard} ${
                  styles[`card${index + 1}`]
                }`}
              >
                <div
                  className={styles.featureIcon}
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                  }}
                >
                  {feature.icon}
                </div>

                <div className={styles.featureContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>

                <div className={styles.featureNumber}>
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.benefitsContent}>
            <div className={styles.benefitsText}>
              <span className={styles.sectionLabel}>BENEFICIOS CLAVE</span>
              <h2>Todo lo que necesitas en un solo lugar</h2>
              <p>
                Nuestros trailers y módulos ofrecen soluciones completas con
                todas las comodidades necesarias para tu proyecto o estadía
                temporal.
              </p>

              <div className={styles.benefitsGrid}>
                {benefits.map((benefit, index) => (
                  <div key={index} className={styles.benefitItem}>
                    <FaCheck className={styles.benefitIcon} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.benefitsVisual}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.benefitsVideo}
              >
                <source src="/video/LOOP.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>¿Necesitas una solución personalizada?</h2>
            <p>
              Contactanos para diseñar el trailer o módulo perfecto para tu
              proyecto.
            </p>
            <Link href="/contacto" className={styles.ctaButton}>
              Solicitar Cotización
              <span className={styles.buttonArrow}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrailersModern;
