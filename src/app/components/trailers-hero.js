"use client";
import React, { useEffect, useRef } from "react";
import "../trailers/page.scss";
import gsap from "gsap";

const HeroTrailers = () => {
  useEffect(() => {
    gsap.to(".trailer-hero-title", {
      opacity: 1,
      duration: 2,
    });
  }, []);

  return (
    <div>
      <div className="trailer-hero-title">
        <h1>TRAILERS & MÓDULOS</h1>
        <h2>Una nueva forma</h2>
        <h2>de construcción</h2>
      </div>
      <video autoPlay loop muted className="video">
        <source src="/video/herotrailer.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroTrailers;
