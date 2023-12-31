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
import { Button } from "@nextui-org/react";
import Link from "next/link";

const HomeCatering = () => {
  return (
    <>
      <div className="home-contenedor-catering">
        <h2 className="h2-laterales-cat">CATERING EXCLUSIVO</h2>
        <div className="mitad-izq-cat">
          <section className="div-izq-cat">
            <section className="section-p-lateralesHome-cat">
              <p>
                Nuestro servicio de catering abarca una amplia variedad de
                menús, adaptados a requerimientos nutricionales y tipos de
                actividades desarrolladas.
              </p>
            </section>
            <Link href={"/catering"} className="buton-lateral visualizacion">
              VER MAS
            </Link>
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
        <div className="mitad-der-home-cat">
          <Link className="buton-lateral" href={"/catering"}>
            VER MAS
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCatering;
