"use client";
import "./footer.scss";
import React from "react";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { IconContext } from "react-icons";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-div">
        <div className="footer-div-box">
          <h2>Contacto</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            ut. Quasi, est. Laudantium provident inventore harum earum, quaerat
            a unde perferendis? Ab beatae necessitatibus rerum rem nisi? Quae,
            tempore expedita?
          </p>
        </div>
        <div className="footer-div-box">
          <h2>Redes</h2>
          <IconContext.Provider value={{ size: "6em" }}>
            <div className="footer-png">
              <AiOutlineInstagram />
              <AiFillFacebook />
              <RiTwitterXFill />
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="footer-div footer-div-der">
        <h2>SSI</h2>
      </div>
    </div>
  );
};

export default Footer;
