"use client";
import Image from "next/image";
import "./catering-cautiva.scss";
import img from "/public/images/catering.jpg";

const CateringCautiva = () => {
  return (
    <>
      <div className="contenedor-catering">
        <h2>CAUTIVA TUS SENTIDOS CON NUESTRO SABORES</h2>
        <div className="mitad-izq-catering">
          <section className="section-p-cautiva">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              quam a urna tincidunt faucibus. Sed venenatis magna vel risus
              cursus tincidunt.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </section>
        </div>
        <div className="mitad-der-catering">
          <Image src={img} alt="Imagen de catering" className="img-catering" />
        </div>
      </div>
    </>
  );
};

export default CateringCautiva;
