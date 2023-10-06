"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./catering-cautiva.scss";
import img from "/public/images/catering.jpg";

const CateringCautiva = () => {
  return (
    <>
      <div className="contenedor-catering">
        <h2>CAUTIVA TUS SENTIDOS CON NUESTRO SABORES</h2>
        <div className="mitad-izq">
          <section className="section-p">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              quam a urna tincidunt faucibus. Sed venenatis magna vel risus
              cursus tincidunt.
            </p>
          </section>
        </div>
        <div className="mitad-der">
          <Image src={img} alt="Imagen de catering" className="img" />
        </div>
      </div>
    </>
  );
};

export default CateringCautiva;
