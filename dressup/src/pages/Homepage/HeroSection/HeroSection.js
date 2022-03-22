import React from "react";
import "./HeroSection.css";

import HeroSectionbutton from "../../../components/Buttons/HeroSectionbutton";
import img2 from "../../../images/Red-kurta.webp";

function HeroSection() {
  return (
    <div className="main">
      <div className="main-text">
        <h1>
          <span class="highlight">Dress Up</span> for every{" "}
          <span class="highlight">Occasion</span>
        </h1>

        <HeroSectionbutton></HeroSectionbutton>
      </div>
      <div className="main-img">
        <img className="img2" src={img2} alt="red-kurta"></img>
      </div>
    </div>
  );
}

export default HeroSection;
