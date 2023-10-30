"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionTrailer() {
  const itemClasses = {
    base: "text-white",
    title: "font-normal text-medium text-white",
  };

  const personalizacion =
    "Puedes diseñar y personalizar tu espacio de manera única para satisfacer tus necesidades y gustos específicos.";
  const mantenimiento =
    "Requieren menos mantenimiento que una casa convencional debido a su tamaño más pequeño y diseño simplificado.";
  const minimalista =
    "Fomentan un estilo de vida más minimalista, lo que puede ayudar a reducir el estrés y el consumo excesivo.";
  const diseno =
    "Puedes adaptar y modificar fácilmente el diseño interior para cambiar tus necesidades a lo largo del tiempo";

  return (
    <Accordion itemClasses={itemClasses}>
      <AccordionItem
        style={{ borderTop: "1px solid" }}
        key="personal"
        aria-label="PERSONALIZACION"
        indicator="+"
        title="PERSONALIZACION"
      >
        {personalizacion}
      </AccordionItem>
      <AccordionItem
        style={{ borderTop: "1px solid" }}
        key="mantenimiento"
        aria-label="MANTENIMIENTO"
        indicator="+"
        title="MANTENIMIENTO"
      >
        {mantenimiento}
      </AccordionItem>
      <AccordionItem
        style={{ borderTop: "1px solid" }}
        key="minimalista"
        aria-label="MINIMALISTA"
        indicator="+"
        title="MINIMALISTA"
      >
        {minimalista}
      </AccordionItem>
      <AccordionItem
        style={{ borderBlock: "1px solid" }}
        key="diseno"
        aria-label="DISENO FLEXIBLE"
        indicator="+"
        title="DISENO FLEXIBLE"
      >
        {diseno}
      </AccordionItem>
    </Accordion>
  );
}
