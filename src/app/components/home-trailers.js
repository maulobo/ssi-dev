"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./home-trailers.scss";
import img from "/public/images/bannerTrailerHome.jpg";
import trailer1 from "/public/images/trailer-uno.png";
import trailer2 from "/public/images/trailer-dos.png";

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
            <section className="section-svg">
              <Image src={trailer1} alt="trailer1" className="" />
              <Image src={trailer2} alt="trailer2" className="" />
            </section>
          </section>
        </div>
        <div className="mitad-der-home">
          <Image src={img} alt="campamento" className="img-home-laterales" />
        </div>
        <button className="buton-buton">VER MAS</button>
      </div>
    </>
  );
};

export default HomeTrailers;
