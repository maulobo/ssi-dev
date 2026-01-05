"use client";
import Image from "next/image";
import "../catering/page.scss";
import cate1 from "/public/images/cate1.png";
import cate2 from "/public/images/cate2.png";
import cate3 from "/public/images/cate3.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

const galleryItems = [
  {
    id: 1,
    src: cate1,
    alt: "Servicio de catering industrial",
    title: "Comedores Industriales",
    description: "Espacios equipados para alimentar grandes equipos de trabajo",
  },
  {
    id: 2,
    src: cate2,
    alt: "Viandas y catering móvil",
    title: "Catering Móvil",
    description: "Soluciones gastronómicas que llegan hasta tu locación",
  },
  {
    id: 3,
    src: cate3,
    alt: "Eventos corporativos catering",
    title: "Eventos Corporativos",
    description: "Servicios especializados para reuniones y celebraciones",
  },
];

const CateringSvg = () => {
  const galleryContainerRef = useRef(null);
  const galleryRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: galleryContainerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    galleryRef.current.forEach((el, index) => {
      if (el) {
        tl.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.8,
            y: 50,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          index * 0.2
        );
      }
    });
  }, []);

  return (
    <div ref={galleryContainerRef} className="catering-gallery-container">
      <div className="gallery-header">
        <p>Conocé nuestros servicios en acción</p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div
            ref={(el) => (galleryRef.current[i] = el)}
            key={item.id}
            className="gallery-item"
          >
            <div className="gallery-image">
              <Image src={item.src} alt={item.alt} fill />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CateringSvg;
