"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./home-catering.scss";
import img from "/public/images/catering.jpg";
import svg1 from "/public/images/svg/cebolla.svg";
import svg2 from "/public/images/svg/chaucha.svg";
import svg3 from "/public/images/svg/ensalada.svg";
import svg4 from "/public/images/svg/palcotita.svg";
import svg5 from "/public/images/svg/pimiento.svg";
import svg6 from "/public/images/svg/tomatiro.svg";

const HomeCatering = () => {
  return (
    <>
      <div className="home-contenedor-catering">
        <h2 className="h2-laterales">SERVICIO DE CATERING</h2>

        <div className="mitad-izq">
          <section className="div-izq">
            <section className="section-p-lateralesHome">
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
            </section>
          </section>
        </div>
        <div className="mitad-der-home">
          <Image
            src={img}
            alt="Imagen de catering"
            className="img-home-laterales"
          />
        </div>
      </div>
    </>
  );
};

export default HomeCatering;
