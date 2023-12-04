import React, { useEffect, useRef } from "react";
import "./home-empresa.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
import AccordionMio from "./home-accordion";
import SvgMap from "./home-svgMap";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Empresa = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["200px", "-800px"]);

  const contenedorRef = useRef(null);
  const titleRef = useRef(null);
  const pRef = useRef(null);
  const mapRef = useRef(null);
  const accRef = useRef(null);

  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: contenedorRef.current,
  //       start: "center bottom",
  //     },
  //   });
  //   tl.from(titleRef.current, {
  //     opacity: 0,
  //     x: 300,
  //   })
  //     .from(pRef.current, {
  //       opacity: 0,
  //       x: 300,
  //     })
  //     .from(mapRef.current, {
  //       opacity: 0,
  //     })
  //     .from(accRef.current, {
  //       opacity: 0,
  //     });

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  return (
    <div ref={contenedorRef} className="empresa-contenedor">
      <div className="empresa-first">
        <div className="" ref={titleRef}>
          <h2>NUESTRA</h2>
          <h2>EMPRESA</h2>
        </div>
        <p ref={pRef} className="">
          Somos una compañía de servicios generales con personal capacitado
          siempre a la altura de las circunstancias que se presentan. Nuestra
          visión es ampliar la capacidad y experiencia para garantizar la
          satisfacción del cliente y de nuestras tareas en los servicios
          actuales y los que se avecinen a futuro. Nos basamos en tres pilares
          fundamentales: respuesta inmediata, profesionalismo y flexibilidad
          para ofrecer un servicio confiable, seguro y de calidad acorde a los
          estándares y legislaciones vigentes.
        </p>
      </div>
      <div className="empresa-second">
        <section ref={accRef} className="empresa-second-section">
          <NextUIProvider>
            <AccordionMio />
          </NextUIProvider>
        </section>
        <section className="empresa-second-svg">
          <SvgMap />
        </section>
      </div>
    </div>
  );
};

export default Empresa;
