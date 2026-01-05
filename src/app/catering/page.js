"use client";
import React from "react";
import HeroCatering from "../components/catering-hero";
import CateringIntro from "../components/catering-intro";
import CateringServices from "../components/catering-services";
import CateringCautiva from "../components/catering-cautiva";
import CateringSvg from "../components/catering-svg";
import Footer from "../components/footer";

const Page = () => {
  return (
    <div>
      <HeroCatering />
      <CateringIntro />
      <CateringServices />
      <CateringCautiva />
      <CateringSvg />
      <Footer />
    </div>
  );
};

export default Page;
