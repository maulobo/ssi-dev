import React, { useEffect, useState } from "react";

const HomeHero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.querySelector(".video");

    if (videoElement) {
      setVideoLoaded(true);
    }
  }, []);

  return (
    <div style={{ height: videoLoaded ? "" : "100vh" }}>
      <video autoPlay muted className="video">
        <source src="/video/Home.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeHero;
