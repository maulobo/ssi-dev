"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import "./home-contact.scss";
const Form = () => {
  return (
    <form>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          type="text"
          label="Nombre y Apellido"
          placeholder="Ingrese su Nombre y Apellido"
        />
        <Input type="number" label="Telefono" startContent="+549" />

        <Input
          type="email"
          label="Email"
          placeholder="Ingrese su email"
          isClearables
        />
        <Input type="text" label="consulta" placeholder="Ingrese su consulta" />
        <button type="submit" className="buttonEnv">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
