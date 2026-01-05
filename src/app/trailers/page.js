import React from "react";
import TrailersModern from "../components/trailers-modern";
import Footer from "../components/footer";

export const metadata = {
  title:
    "Alquiler de Trailers y Módulos para Empresas | Soluciones Rápidas y Eficientes",
  description:
    "Ofrecemos trailers y módulos en alquiler para empresas. Soluciones rápidas y eficientes con comodidades modernas para tus necesidades temporales.",
  keywords:
    "alquiler de trailers, módulos para empresas, soluciones temporales, comodidades modernas, trailers en alquiler",
};

const Page = () => {
  return (
    <>
      <main>
        <TrailersModern />
        <Footer />
      </main>
    </>
  );
};

export default Page;
