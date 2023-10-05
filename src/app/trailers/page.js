"use client";
import React, { useEffect, useState } from "react";
import Appears from "../components/lettersAppears";
import "./page.scss";
import HeroTrailers from "../components/hero-trailers";
import TrailerBlack from "../components/trailerBlack";
import { CircularProgress } from "@nextui-org/react";

const phrase1 =
  "Esta es la primera frase que pruebo para ver como se hace el efecto que quiero lograr, la idea es que aparezca la opacidad de a poco a medida que voy scrolleando hacia abajo y quede piolita";
const phrase2 =
  "lorem ipsum dolor sit amet, consectetlknasfklsnvklsnv;lkasnkasnclkmas cnsa cklj nkjnc lkjabnf lkjwn lkjqwnf lkjqanf lkajnf kl";

export function Loader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <CircularProgress
        size="lg"
        classNames={{
          svg: " h-44 ",
          svgWrapper: "h-44",
        }}
        color="default"
        aria-label="Loading..."
      />
    </div>
  );
}

const Page = () => {
  const [loading, setLoading] = useState(true);

  window.onload = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="trailers-container">
          <HeroTrailers />
          <Appears phrase={phrase1} title="Rapida construccion" />
          <Appears phrase={phrase2} />
          <TrailerBlack />
        </main>
      )}
    </>
  );
};

export default Page;
