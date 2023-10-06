import React, { useEffect, useState } from "react";
import "./home-hero.scss";

const HomeHero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.querySelector(".video");

    if (videoElement) {
      setVideoLoaded(true);
      console.log("se cargo rey");
    }
  }, []);

  return (
    <>
      <div style={{ height: videoLoaded ? "" : "100vh" }}></div>
      <div className="video-hero-container">
        <video autoPlay muted className="video">
          <source src="/video/Home.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default HomeHero;
