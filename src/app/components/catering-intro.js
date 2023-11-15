import React from "react";
import "./catering-intro.scss";
import Image from "next/image";
//----svg----//
import svg1 from "/public/images/svg/1.svg";
import svg2 from "/public/images/svg/2.svg";
import svg3 from "/public/images/svg/3.svg";
import svg4 from "/public/images/svg/4.svg";
import svg5 from "/public/images/svg/5.svg";
import svg6 from "/public/images/svg/6.svg";
import svg7 from "/public/images/svg/7.svg";

const CateringIntro = () => {
  return (
    <div className="intro-container">
      <section className="intro-frutas">
        <Image src={svg1} alt="unafrutita" className="Uuno" />
        <Image src={svg2} alt="picante" className="2dos" />
        <Image src={svg3} alt="palta" className="3tres" />
        <Image src={svg4} alt="nose" className="4cuatro" />
        <Image src={svg5} alt="futi" className="5cinco" />
        <Image src={svg6} alt="laranja" className="6seis" />
        <Image src={svg7} alt="pizza" className="7siete" />
      </section>
      <section className="intro-p">
        <div className="intro-box">
          <h2>Titulo</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            tempora distinctio ad voluptatem assumenda vero. Assumenda,
            sapiente. Impedit, quibusdam. Nostrum, beatae et voluptatum
            quibusdam ullam dolorum ratione in maxime unde!
          </p>
        </div>
      </section>
    </div>
  );
};

export default CateringIntro;
