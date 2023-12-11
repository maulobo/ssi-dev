"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./home-trailers.scss";

import trailer1 from "/public/images/trailer-uno.png";
import trailer2 from "/public/images/trailer-dos.png";

const HomeTrailers = () => {
  return (
    <>
      <div className="home-contenedor-modulo">
        <h2 className="h2-laterales-modulo">MODULOS & TRAILERS</h2>

        <div className="mitad-izq-modulo">
          <section className="div-izq-modulo">
            <section className="section-p-lateralesHome-modulo">
              <p>
                Los módulos habitacionales están hechas con contenedores
                marítimos y son sustitutos ideales de las construcciones
                convencionales.
              </p>
            </section>
            <button className="buton-modulo visualizacion">VER MAS</button>
            <section className="trailers-section-svg">
              <Image src={trailer1} alt="trailer1" />
              <Image src={trailer2} alt="trailer2" />
            </section>
          </section>
        </div>
        <div className="mitad-der-home-modulo">
          <button className="buton-modulo">VER MAS</button>
        </div>
      </div>
    </>
  );
};

export default HomeTrailers;
