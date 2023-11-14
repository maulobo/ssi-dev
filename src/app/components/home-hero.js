import React from "react";
import "./home-hero.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import mygif from "public/images/gif/mygif.gif";
import Image from "next/image";

const HomeHero = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0px", "-4000px"]);
  return (
    <>
      <div className="video-hero-container">
        <div className="contenido">
          <motion.div style={{ y }}>
            <Image src={mygif} className="gif" />
          </motion.div>
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
