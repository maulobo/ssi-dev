"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./home-transporte.scss";
import img from "/public/images/campamentoInt.jpg";
import base from "/public/images/base-integral.png";

const HomeTransporte = () => {
  return (
    <>
      <div className="home-contenedor-catering">
        <h2 className="h2-laterales">BASE INTEGRAL</h2>
        <div className="mitad-izq">
          <section className="div-izq">
            <section className="section-p-lateralesHome">
              <p>
                Nuestra experiencia en Campamentos Integrales llave en mano es
                muy extensa. Ofrecemos transporte, montaje de obras Civiles,
                muebles y útiles de oficinas, mantenimiento general,
                administración, provisión de energía, agua, combustible,
                vigilancia, alimentación del personal y limpieza, lavandería,
                hotelería.
              </p>
            </section>
            <section className="transporte-section-svg">
              <Image src={base} alt="base" className="" />
            </section>
          </section>
        </div>
        <div className="mitad-der-home">
          <Image src={img} alt="campamento" className="img-home-laterales" />
        </div>
      </div>
    </>
  );
};

export default HomeTransporte;
