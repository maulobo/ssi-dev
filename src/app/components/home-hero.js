import React from "react";
import "./home-hero.scss";
import { useScroll, useTransform } from "framer-motion";

const HomeHero = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0", "-4000px"]);
  return (
    <>
      <div className="video-hero-container">
        <div className="contenido">
          <video
            src="/video/Home.mp4"
            autoPlay
            muted
            className="background-video"
            poster="/public/images/catering.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default HomeHero;
