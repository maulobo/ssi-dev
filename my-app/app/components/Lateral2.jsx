'use client'
import React, { useEffect, useRef } from "react";
import "./lateral2.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Empresa from "./Empresa";

const Lateral2 = () => {
  const container = useRef(null);
  const sections = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        pin: true,
        markers: true,
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
        <Empresa />
      </section>
      <section
        ref={(el) => sections.current.push(el)}
        className="section section2"
      >
        <Empresa />
      </section>
      <section
        ref={(el) => sections.current.push(el)}
        className="section section3"
      >
        <Empresa />
      </section>
    </div>
  );
};

export default Lateral2;
