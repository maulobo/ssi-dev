"use client";
import React from "react";
import { Input } from "@nextui-org/react";

const Form = () => {
  return (
    <form>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          type="text"
          label="Nombre y Apellido"
          placeholder="Ingrese su nombre y apellido"
        />
        <Input type="number" label="Telefono" startContent="+549" />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          datatype="2"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          isClearables
        />
        <Input type="email" label="Email" />
        <Input type="submit" radius="md" variant="bordered" />
      </div>
    </form>
  );
};

export default Form;
