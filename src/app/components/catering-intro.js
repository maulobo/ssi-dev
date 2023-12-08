import React from "react";
import "./catering-intro.scss";
import Image from "next/image";
//----svg----//
import svg1 from "/public/images/svg/fruta1.svg";
import svg2 from "/public/images/svg/fruta2.svg";
import svg3 from "/public/images/svg/fruta3.svg";
import svg6 from "/public/images/svg/fruta4.svg";

const CateringIntro = () => {
  return (
    <div className="intro-container">
      <section className="intro-frutas">
        <Image src={svg1} alt="unafrutita" />
        <Image src={svg6} alt="laranja" />
        <Image src={svg2} alt="picante" />
        <Image src={svg3} alt="palta" />
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
