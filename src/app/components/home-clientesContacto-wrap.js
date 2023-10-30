"use client";
import React, { useEffect, useRef } from "react";
import Clientes from "./home-clientes";
import Contact from "./home-contact";
import "./home-clientes.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Clientescontacto = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mainRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const contactHeight = mainRef.current.clientHeight;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        scrub: 1,
        pin: true,
      },
    });
    tl.to(
      contactRef.current,
      {
        y: -contactHeight,
      },
      "<"
    );
  }, []);

  return (
    <div ref={mainRef} className="wrapper-content-cc">
      <Clientes />
      <Contact ref={contactRef} />
    </div>
  );
};

export default Clientescontacto;
