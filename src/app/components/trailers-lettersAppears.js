"use client";
import React, { useEffect, useRef } from "react";
import "./trailers-lettersAppears.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Appears = ({ title = "", phrase }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "center center",
        end: `+=${window.innerHeight / 1.7}`,
        scrub: 1,
        markers: true,
      },
    });
    tl.to(refs.current, {
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  }, []);

  // Referencias
  const refs = useRef([]);
  const container = useRef(null);

  const splitWords = () => {
    let body = [];
    phrase.split(" ").forEach((word, index) => {
      const letters = splitLetters(word);
      body.push(<p key={`word_${index}`}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span
          ref={(el) => {
            refs.current.push(el);
          }}
          key={`letter+${index}`}
        >
          {letter}
        </span>
      );
    });

    return letters;
  };

  return (
    <div ref={container} className="main">
      <h2>{title}</h2>
      <div className="apperas">{splitWords()}</div>
    </div>
  );
};

export default Appears;
