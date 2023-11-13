import React, { useEffect, useRef, useState } from "react";
import "./home-lateral2.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

import Servicios from "./home-servicios";
import Division from "./home-division";
import Catering from "./home-catering";

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
        scrub: 4,
        pin: true,
      },
    });

    tl.to(sections.current, {
      x: () =>
        -(
          container.current.scrollWidth - document.documentElement.clientWidth
        ) + "px",
      duration: 2,
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
