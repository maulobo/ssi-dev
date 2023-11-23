"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./home-catering.scss";
import img from "/public/images/campamentoInt.jpg";

const HomeTransporte = () => {
  return (
    <>
      <div className="home-contenedor-catering">
        <h2 className="h2-laterales">BASE INTEGRAL</h2>

        <div className="mitad-izq">
          <section className="div-izq">
            <section className="section-p-lateralesHome">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac quam a urna tincidunt faucibus. Sed venenatis magna vel risus
                cursus tincidunt.
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

export default HomeTransporte;
