import React from "react";
import "./home-empresa.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
import AccordionMio from "./home-accordion";
import SvgMap from "./home-svgMap";

const Empresa = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div className="contenedor">
      <SvgMap />
      <div>
        <div className="first">
          <motion.h2 style={{ y }}>NUESTRA</motion.h2>
          <motion.h2 style={{ y }}>EMPRESA</motion.h2>
          <p>
            Somos una compañía de servicios generales con perso- nal capacitado
            siempre a la altura de las circunstan- cias que se presentan.
            Nuestra visión es ampliar la capacidad y experiencia para garantizar
            la satisfacción del cliente y de nues- tras tareas en los servicios
            actuales y los que se aveci- nen a futuro. Nos basamos en tres
            pilares fundamentales: respues- ta inmediata, profesionalismo y
            flexibilidad para ofre- cer un servicio confiable, seguro y de
            calidad acorde a los estándares y legislaciones vigentes.
          </p>
        </div>
      </div>
      <div>
        <div className="second">
          <section className="second-section1">
            <NextUIProvider>
              <AccordionMio />
            </NextUIProvider>
          </section>
          <section className="second-section2"></section>
        </div>
      </div>
    </div>
  );
};

export default Empresa;
