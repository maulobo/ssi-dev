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

        <Image src={svg3} alt="palta" />
      </section>
      <section className="intro-p">
        <div className="intro-box">
          <h2>Nutrición Industrial</h2>
          <div className="intro-highlight">
            <span className="highlight-number">24/7</span>
            <span className="highlight-text">Servicio continuo</span>
          </div>
          <p>
            Especializados en soluciones gastronómicas para la industria
            petrolera y grandes operaciones. Nuestro servicio de catering está
            diseñado para mantener a los equipos de trabajo bien alimentados con
            comidas nutritivas, frescas y adaptadas a los horarios exigentes del
            sector industrial.
          </p>
          <div className="intro-features">
            <div className="feature-item">
              <p>Menús balanceados</p>
            </div>
            <div className="feature-item">
              <p>Entrega in-situ</p>
            </div>
            <div className="feature-item">
              <p>Operaciones 24hs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CateringIntro;
