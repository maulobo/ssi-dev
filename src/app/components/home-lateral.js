import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { use, useEffect, useRef } from "react";
import "./home-lateral.scss";
import Division from "./home-division";
import HomeCatering from "./home-catering";
import HomeTransporte from "./home-transporte";
import HomeServicios from "./home-servicios";

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
          <section className="scroll-section">
            <Division />
            <HomeServicios />
          </section>
          <section className="scroll-section">
            <Division />
            <HomeCatering />
          </section>
          <section className="scroll-section">
            <Division />
            <HomeTransporte />
          </section>
          <section className="scroll-section">
            <Division />
            <HomeTransporte />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Lateral;
