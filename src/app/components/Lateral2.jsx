import React, { useEffect, useRef, useState } from "react";
import "./lateral2.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Empresa from "./Empresa";

import Servicios from "./servicios";
import Division from "./division";
import Catering from "./catering";

const Lateral2 = () => {
  // eefecto para recarga de componentes
  // const handleChange = () => {
  //   location.reload();
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleChange);
  //   return () => {
  //     window.removeEventListener("resize", handleChange);
  //   };
  // }, []);

  const container = useRef(null);
  const sections = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        pin: true,
      },
    });

    tl.to(sections.current, {
      x: () =>
        -(
          container.current.scrollWidth - document.documentElement.clientWidth
        ) + "px",
      duration: 1,
    });
  }, []);

  return (
    <div ref={container} className="main-wrapper">
      <section
        ref={(el) => sections.current.push(el)}
        className="section section1"
      >
        <Servicios />
      </section>
      <div ref={(el) => sections.current.push(el)} className="section3">
        <Division number="01" servicio="CATERING" />
      </div>
      <section
        ref={(el) => sections.current.push(el)}
        className="section section1"
      >
        <Catering />
      </section>
      <div ref={(el) => sections.current.push(el)} className="section3">
        <Division />
      </div>
      <section
        ref={(el) => sections.current.push(el)}
        className="section section1"
      >
        <Catering />
      </section>
      <div ref={(el) => sections.current.push(el)} className="section3">
        <Division />
      </div>
      <section
        ref={(el) => sections.current.push(el)}
        className="section section1"
      >
        <Catering />
      </section>
    </div>
  );
};

export default Lateral2;
