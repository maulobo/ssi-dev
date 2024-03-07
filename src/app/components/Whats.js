// WhatsAppIcon.js
import React from "react";
import "./whats.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/542994106234");
  };

  return (
    <div className="whatsapp-icon" onClick={openWhatsApp}>
      <div className="whatsapp-icon-container">
        <FaWhatsapp className="icon-wharap" />
      </div>
    </div>
  );
};

export default WhatsAppIcon;
