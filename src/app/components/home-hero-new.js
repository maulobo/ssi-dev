import React, { useEffect, useRef } from "react";
import "./home-hero-new.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeHeroNew = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  let opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    // Animación de entrada del título
    tl.fromTo(
      titleRef.current.children,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Animación del subtítulo
    tl.fromTo(
      subtitleRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Animación del overlay
    tl.fromTo(
      overlayRef.current,
      {
        scaleX: 1,
      },
      {
        scaleX: 0,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "-=0.8"
    );
  }, []);

  return (
    <section ref={containerRef} className="hero-new">
      <motion.div className="hero-video-container" style={{ y }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/video/Home.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </motion.div>

      <motion.div className="hero-content" style={{ opacity }}>
        <div className="hero-title" ref={titleRef}>
          <h1>
            <span>SOTO</span>
            <span>SERVICIOS</span>
            <span>INDUSTRIALES</span>
          </h1>
        </div>

        <div className="hero-subtitle" ref={subtitleRef}>
          <p>
            Soluciones integrales para la industria petrolera
            <br />
            en la región Patagónica
          </p>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line"></div>
          <span>SCROLL</span>
        </div>
      </motion.div>

      <div ref={overlayRef} className="loading-overlay"></div>

      <div className="hero-details">
        <div className="hero-location">
          <span>NEUQUÉN, ARGENTINA</span>
        </div>
        <div className="hero-year">
          <span>EST. 2020</span>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroNew;
