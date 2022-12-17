import React from "react";
import "./ExperienceCard.css";


const ExperienceCard = ({imageSrc}) => {
  return (
    <div className="experience">
      <img className="experience__image" src={imageSrc} alt="" />
      <div className="experience__text-container">
        <p className="experience__title">TITULO</p>
        <p className="experience__description">
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
