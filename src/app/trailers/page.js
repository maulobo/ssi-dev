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
  "Las casas móviles suelen construirse en un entorno controlado y se pueden fabricar más rápidamente que las casas tradicionales, lo que significa que puedes mudarte a tu nueva vivienda más rápido.";
const phrase2 =
  "A pesar de su tamaño compacto, muchas viviendas en remolques están equipadas con comodidades modernas como cocinas, baños y sistemas de entretenimiento.";

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
        <section className="contenedor-transportable">
          <Transportables />
        </section>
        <Appears phrase={phrase2} />
        <TrailerBlack />
        <TrailersTrailer />
        {/* <section className="cont-3d"></section> */}
        <Footer />
      </main>
    </>
  );
};

export default Page;
