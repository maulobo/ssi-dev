"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./home-catering.scss";
import img from "/public/images/bannerTrailerHome.jpg";

const HomeTrailers = () => {
  return (
    <>
      <div className="home-contenedor-catering">
        <h2 className="h2-laterales">MODULOS & TRAILERS</h2>

        <div className="mitad-izq">
          <section className="div-izq">
            <section className="section-p-lateralesHome">
              <p>
                Los módulos habitacionales están hechas con contenedores
                marítimos y son sustitutos ideales de las construcciones
                convencionales.
              </p>
            </section>
            <section className="section-svg"> aca va un svg</section>
          </section>
        </div>
        <div className="mitad-der-home">
          <Image src={img} alt="campamento" className="img-home-laterales" />
        </div>
      </div>
    </>
  );
};

export default HomeTrailers;
