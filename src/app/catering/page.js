import React from "react";
import HeroCatering from "../components/catering-hero";
import CateringIntro from "../components/catering-intro";
import CateringCautiva from "../components/catering-cautiva";
import Imagenn from "../components/catering-image";
import CateringSvg from "../components/catering-svg";

const Page = () => {
  return (
    <div>
      <HeroCatering />
      <CateringIntro />
      <CateringCautiva />
      <CateringSvg />
      <Imagenn />
    </div>
  );
};

export default Page;
