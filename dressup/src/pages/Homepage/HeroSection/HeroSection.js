import React from "react";
import HeroSectionbutton from "../../../components/Buttons/HeroSectionbutton";
import img2 from "../../../images/Red-kurta.webp";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="main">
      <div className="main-text">
        <h1 className="heroSection-title">
          <span className="highlight">Dress Up</span> for every{" "}
          <span className="highlight">Occasion</span>
        </h1>
        <HeroSectionbutton></HeroSectionbutton>
      </div>
      <div className="main-img">
        <img className="img2" src={img2} alt="red-kurta"></img>
      </div>
    </div>
  );
};

export default HeroSection;
