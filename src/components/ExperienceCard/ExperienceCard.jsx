import React from "react";
import "./ExperienceCard.css";
import image from "../../img/massage.jpg"

const ExperienceCard = () => {
  return (
    <div className="container">
      <img className="image" src={image} alt="" />
      <div className="text-container">
        <p className="title">TITULO</p>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          recusandae perferendis nesciunt, beatae facere, aliquam animi sed sit
          sunt doloribus, quis natus explicabo! Nam ab et, officiis sequi
          aperiam rem?
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
