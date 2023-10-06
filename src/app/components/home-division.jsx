import React from "react";
import "./home-division.scss";

const Division = ({ number = "01", servicio = "servicio 01" }) => {
  return (
    <div className="division-container">
      <section>
        <p>{number}</p>
      </section>
      <section>
        <p className="division-p">{servicio}</p>
      </section>
    </div>
  );
};

export default Division;
