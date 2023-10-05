import React, { useEffect, useRef } from "react";
import Clientes from "./clientes";
import Contact from "./contact";
import "./clientes.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Clientescontacto = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mainRef = useRef(null);
  const clientesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const contactHeight = clientesRef.current.getBoundingClientRect().height;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        scrub: 1.5,
        pin: true,
        markers: true,
      },
    });

    tl.to(
      contactRef.current,
      {
        y: -contactHeight,
      },
      "<1"
    );
  }, []);

  useEffect(() => {
    // Función para obtener la altura del elemento hijo
  }, []);

  return (
    <div ref={mainRef} className="wrapper_content">
      <div ref={clientesRef}>
        <Clientes />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Clientescontacto;
