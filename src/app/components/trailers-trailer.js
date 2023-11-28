import React, { useState } from "react";
import Scene from "./scene";
import "./trailers-trailer.scss";
import Image from "next/image";
import interiorok from "public/images/interiorok.jpg";

const TrailersTrailer = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="trailer-h2h2">
        <h2>Modulo habitacional</h2>
      </div>
      {/* <Image src={interiorok} /> */}
      <div className="trailer-container">
        <div className="trailer-view">
          <div className={`block-covered ${active ? "active" : ""}`}>
            <button onClick={() => setActive(!active)}>Inspeccionar</button>
          </div>
          <Scene />
        </div>
      </div>
    </div>
  );
};

export default TrailersTrailer;
