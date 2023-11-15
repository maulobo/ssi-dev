"use client";
import React from "react";
import Appears from "../components/trailers-lettersAppears";
import "./page.scss";
import HeroTrailers from "../components/trailers-hero";
import TrailerBlack from "../components/trailers-black";
import { CircularProgress } from "@nextui-org/react";
import Transportables from "../components/trailers-transportables";
import TrailersTrailer from "../components/trailers-trailer";
import Footer from "../components/footer";

const phrase1 =
  "lorem ipsum dolor sit amet, consectetlknasfklsnvklsnv;lkasnkasnclkmas cnsa cklj nkjnc lkjabnf lkjwn lkjqwnf lkjqanf lkajnf kl";
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
  return (
    <>
      <main className="trailers-container">
        <HeroTrailers />
        <Appears phrase={phrase1} title="Rápida construcción" />
        <Transportables />
        <Appears phrase={phrase2} title="Titulo dos" />
        <TrailerBlack />
        <section className="cont-3d">
          <TrailersTrailer />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Page;
