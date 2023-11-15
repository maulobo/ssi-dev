import Image from "next/image";
import React from "react";

const Transportables = () => {
  return (
    <>
      <video autoPlay loop muted className="video">
        <source src="/video/trailerLoop.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Transportables;
