"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./catering.scss";
import img from "/public/images/catering.jpg";
import svg1 from "/public/images/svg/1.svg";
import svg2 from "/public/images/svg/2.svg";
import svg3 from "/public/images/svg/3.svg";
import svg4 from "/public/images/svg/4.svg";
import svg5 from "/public/images/svg/5.svg";
import svg6 from "/public/images/svg/6.svg";
import svg7 from "/public/images/svg/7.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Catering = () => {
  return (
    <>
      <div className="contenedor-catering">
        <h2>SERVICIO DE CATERING</h2>
        <div className="mitad-izq">
          <section className="div-izq">
            <section className="section-p">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac quam a urna tincidunt faucibus. Sed venenatis magna vel risus
                cursus tincidunt.
              </p>
            </section>
            <section className="section-svg">
              <Image src={svg1} alt="unafrutita" className="uno" />
              <Image src={svg2} alt="picante" className="dos" />
              <Image src={svg3} alt="palta" className="tres" />
              <Image src={svg4} alt="nose" className="cuatro" />
              <Image src={svg5} alt="futi" className="cinco" />
              <Image src={svg6} alt="laranja" className="seis" />
              <Image src={svg7} alt="pizza" className="siete" />
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

export default Catering;
