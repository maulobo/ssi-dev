"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./home-catering.scss";
import img from "/public/images/transporte.jpeg";

const HomeTransporte = () => {
  return (
    <>
      <div className="home-contenedor-catering">
        <div className="h2">
          <h2>CAMPAMENTO INTEGRAL</h2>
        </div>
        <div className="mitad-izq">
          <section className="div-izq">
            <section className="section-p">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac quam a urna tincidunt faucibus. Sed venenatis magna vel risus
                cursus tincidunt.
              </p>
            </section>
          </section>
        </div>
        <div className="mitad-der">
          <Image src={img} alt="Imagen de catering" className="img" />
        </div>
      </div>
    </>
  );
};

export default HomeTransporte;
