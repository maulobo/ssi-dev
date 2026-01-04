"use client";
import React, { useEffect, useRef } from "react";
import styles from "./catering-modern.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroCatering = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

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
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroVideo}>
        <video autoPlay loop muted playsInline>
          <source src="/video/catering.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.heroLabel}>
            <span>SABORES INDUSTRIALES</span>
            <div className={styles.heroLine}></div>
          </div>

          <div ref={titleRef} className={styles.heroTitle}>
            <h1>
              <span className={styles.titleMain}>CATERING</span>
              <span className={styles.titleMain}>INDUSTRIAL</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Sabores que nutren experiencias industriales
            </p>
          </div>

          <div className={styles.heroDescription}>
            <p>
              Nuestro catering industrial ofrece soluciones completas con
              sabores únicos y servicios adaptados a tus necesidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCatering;
