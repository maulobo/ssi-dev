import React from "react";
import trailerpic from "public/images/trailerpic.jpg";
import Image from "next/image";
import AccordionTrailer from "./accordion-trailers";
import "./trailerBlack.scss";

const TrailerBlack = () => {
  return (
    <div className="imageClass">
      <Image src={trailerpic} alt="trailer" />
      <div className="acordion">
        <AccordionTrailer />
      </div>
    </div>
  );
};

export default TrailerBlack;
