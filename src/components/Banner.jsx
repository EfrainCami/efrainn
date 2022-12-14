import React from "react";
import "./Banner.css";

import logo from "../img/mandala.png";

const Banner = () => {
  return (
    <section id="inicio">
      <div className="contenido">
        <div className="presentacion">
        <img className="logo" src={logo} alt="logo" />
          <p className="bienvenida">HOTEL</p>
          <h2>
            EFRA-INN
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
