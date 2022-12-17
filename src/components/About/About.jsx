import React from "react";
import Image from "../../img/hotelbonito.jpg";
import logo from "../../img/logo_oscuro.png";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about__info">
        <p className="about__title">Nosotros</p>
        <p className="about__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore
          officiis tempora, explicabo nobis consequatur dolorum iste expedita
          est molestias laudantium quos cupiditate consectetur dolorem? Itaque
          repudiandae ipsa facilis inventore.
        </p>
        <p className="about__brand">
        <img className="about__logo" src={logo} alt="" />
        <p className="about__name">EFRA-INN</p>
        </p>
        
      </div>

      <img className="about__image" src={Image} alt="" />
    </section>
  );
};

export default About;
