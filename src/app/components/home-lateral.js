import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { use, useEffect, useRef } from "react";
import "./home-lateral.scss";
import Servicios from "./home-servicios";
import Division from "./home-division";
import Catering from "./home-catering";

const Lateral = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1.4,
          pin: true,
        },
      }
    );
    // return () => {
    //   pin.kil();
    // };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <section className="scroll-section justify-end">
            <Servicios />
            <Division />
          </section>
          <section className="scroll-section">
            <Catering />
            <Division />
          </section>
          <section className="scroll-section">
            <h3>section3</h3>
          </section>
          <section className="scroll-section">
            <h3>section4</h3>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Lateral;
