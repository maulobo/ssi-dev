"use client";
import Image from "next/image";
import React from "react";
import "./home-catering.scss";
import img from "/public/images/trailerpic.jpg";

const HomeTrailers = () => {
  return (
    <>
      <div className="home-contenedor-catering">
        <div className="h2">
          <h2>MODULOS HABITACIONALES</h2>
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

export default HomeTrailers;
