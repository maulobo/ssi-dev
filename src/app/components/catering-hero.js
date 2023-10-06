"use client";
import React, { useEffect } from "react";
import "../catering/page.scss";
import gsap from "gsap";

const HeroCatering = () => {
  useEffect(() => {
    gsap.to(".catering-hero-title", {
      opacity: 1,
      duration: 2,
    });
  }, []);

  return (
    <div>
      <div className="catering-hero-title">
        <h1>SERVICIO</h1>
        <h2>DE CATERING</h2>
      </div>
      <video autoPlay loop muted className="video">
        <source src="/video/herotrailer.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroCatering;
