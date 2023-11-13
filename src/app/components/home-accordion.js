import React from "react";
//import "./home-empresa.scss";

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionMio() {
  const misión =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const visión =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const itemClasses = {
    title: "font-xl text-white text-xl",
    content: "text-l",
  };

  return (
    <Accordion itemClasses={itemClasses}>
      <AccordionItem
        key="1"
        aria-label="Misión"
        title="Misión"
        className="text-left "
      >
        {misión}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Visión"
        title="Visión"
        className="text-left"
      >
        {visión}
      </AccordionItem>
    </Accordion>
  );
}
