"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionTrailer() {
  const itemClasses = {
    base: "text-white",
    title: "font-normal text-medium text-white",
  };
  const itemClasses2 = {
    base: "text-white",
    title: "font-normal text-medium text-white",
  };
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion itemClasses={itemClasses}>
      <AccordionItem
        style={{ borderTop: "1px solid" }}
        key="personal"
        aria-label="PERSONALIZACION"
        indicator="+"
        title="PERSONALIZACION"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        style={{ borderTop: "1px solid" }}
        key="mantenimiento"
        aria-label="MANTENIMIENTO"
        indicator="+"
        title="MANTENIMIENTO"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        style={{ borderTop: "1px solid" }}
        key="minimalista"
        aria-label="MINIMALISTA"
        indicator="+"
        title="MINIMALISTA"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        style={{ borderBlock: "1px solid" }}
        key="diseno"
        aria-label="DISENO FLEXIBLE"
        indicator="+"
        title="DISENO FLEXIBLE"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
