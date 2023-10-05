'use client'
import React, { useEffect } from 'react'
import "./lateral.scss";
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';






const Lateral = () => {
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    console.log
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    },
  });
}, []);

  return (
    <div className='body'>
      <div className="container">
        <div className="description panel blue">
          <div>
            <h1>Horizontal snapping sections (simple)</h1>
            <p>
              Scroll vertically to scrub the horizontal animation. It also
              dynamically snaps to the sections in an organic way based on the
              velocity. The snapping occurs based on the natural ending position
              after momentum is applied, not a simplistic "wherever it is when
              the user stops".
            </p>
            <div className="scroll-down">
              Scroll down<div className="arrow"></div>
            </div>
          </div>
        </div>

        <section className="panel red">ONE</section>
        <section className="panel orange">TWO</section>
        <section className="panel purple">THREE</section>
        <section className="panel green">FOUR</section>
        <section className="panel gray">FIVE</section>
      </div>
    </div>
  );
}

export default Lateral