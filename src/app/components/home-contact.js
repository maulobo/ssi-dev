import React, { forwardRef } from "react";
import "./home-contact.scss";

import insta from "/public/images/instagram.png";
import x from "/public/images/x.png";
import face from "/public/images/face.png";
import Form from "./home-form";
import Image from "next/image";

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="contact-container">
      <div className="contact-box">
        <div className="contact-box1">
          <section className="contact-form">
            <Form />
          </section>
        </div>

        <div className="contact-box2">
          <section className="contact-h2">
            <h2>CONT</h2>
            <h2>ACT</h2>
            <h2>US</h2>
          </section>
          <section className="contact-p"></section>
        </div>
      </div>
      <div className="contact-box">
        <div className="contact-box3">
          <Image src={insta} alt="instagram" />
          <Image src={face} alt="face" />
          <Image src={x} alt="x" />
        </div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
