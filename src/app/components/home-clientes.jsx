"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./home-clientes.scss";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import flecha from "/public/images/flecha.png";
import repsol from "/public/images/repsol.png";

const Clientes = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (contador === 0) return;
      if (contador < 35) {
        setContador(contador + 1);
      }
    }, 50);

    return () => clearInterval(intervalo);
  }, [contador]);

  gsap.registerPlugin(ScrollTrigger);
  const clientesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: clientesRef.current,
        start: "top center",
        onEnter: () => setContador(1),
        onLeave: () => setContador(0),
      },
    });
    tl.fromTo(
      ".text-ape",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    )
      .fromTo(
        ".box-box2",
        {
          x: 300,
          opacity: 0,
        },
        {
          opacity: 1,
          x: 0,
        },
        ">0.5"
      )

      .fromTo(
        ".flecha",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        ">0.5"
      );
    gsap.utils.toArray(".section-img-logos > *").forEach((element, index) => {
      tl.fromTo(
        element,
        {
          scale: 0.2,
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
          scale: 1,
        },
        `${index}*0.1`
      );
    });
  }, []);

  return (
    <div ref={clientesRef} className="clientes-container">
      <div className="box box-1-container ">
        <section>
          <h2>{contador}</h2>
        </section>
        <section>
          <p className="text-ape">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            voluptas at dolorum tempore pariatur amet fugit! Magni quas cumque
            ducimus placeat tempore, doloremque repudiandae, quibusdam magnam
            autem enim sed commodi.
          </p>
        </section>
      </div>
      <div className="box box-title">
        <section className="box-box1"></section>
        <section className="box-box2">
          <h2>NUESTROS CLIENTES</h2>
        </section>
      </div>
      <div className="box">
        <section className="section-flecha ">
          <Image src={flecha} alt="flecha" className="flecha" />
        </section>
        <section className="section-img-logos">
          <Image src={repsol} alt="repsol" />
          <Image src={repsol} alt="repsol" />
          <Image src={repsol} alt="repsol" />
          <Image src={repsol} alt="repsol" />
        </section>
      </div>
    </div>
  );
};

export default Clientes;
