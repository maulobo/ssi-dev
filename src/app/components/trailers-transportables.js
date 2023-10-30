import Image from "next/image";
import React from "react";
import trailerPic from "public/images/trailerpic.jpg";

const Transportables = () => {
  return (
    <>
      <Image src={trailerPic} alt="trailerPic" />
    </>
  );
};

export default Transportables;
