"use client";
import Image from "next/image";
import "./catering-cautiva.scss";
import img from "/public/images/catering.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CateringCautiva = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    gsap.fromTo(
      image,
      {
        scale: 1.2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      text.children,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="contenedor-catering" ref={containerRef}>
        <h2>ALIMENTAMOS EL MOTOR DE LA INDUSTRIA</h2>
        <div className="catering-content">
          <div className="mitad-izq-catering">
            <section className="section-p-cautiva" ref={textRef}>
              <p>
                Entendemos las demandas únicas del sector industrial. Nuestro
                equipo trabaja en sincronía con los horarios de planta, turnos
                rotativos y operaciones remotas, garantizando que cada
                trabajador reciba alimentación de calidad cuando la necesita.
              </p>
              <p>
                Desde comedores industriales hasta viandas para equipos en
                campo, manejamos volúmenes importantes con la calidad y
                consistencia que caracteriza a nuestra empresa.
              </p>
              <div className="quality-badges">
                <span className="badge">HACCP Certificado</span>
                <span className="badge">Calidad Industrial</span>
                <span className="badge">Logística Especializada</span>
              </div>
            </section>
          </div>
          <div className="mitad-der-catering">
            <div className="image-container" ref={imageRef}>
              <Image
                src={img}
                alt="Catering industrial SSI"
                className="img-catering"
              />
              <div className="image-overlay">
                <span className="overlay-text">
                  Excelencia en cada servicio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CateringCautiva;
