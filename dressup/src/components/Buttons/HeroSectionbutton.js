import "./HeroSectionbutton.css";
import React from "react";
import { Link } from "react-router-dom";

function HeroSectionbutton() {
  return (
    <div>
      <button type="button" class="btn btn-secondary btns main-btn">
        <Link className="btn-link" to="/Productspage">
          Shop Now <span>&rarr;</span>
        </Link>
      </button>
    </div>
  );
}

export default HeroSectionbutton;
