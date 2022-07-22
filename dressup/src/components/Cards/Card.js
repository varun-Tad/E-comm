import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ img, title }) => {
  let navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/Productspage");
  };
  return (
    <div>
      <div className="card">
        <img className="image" src={img} alt="apparel"></img>
        <p>{title}</p>
        <div class="link-container">
          <button className="link-container-btn" onClick={buttonHandler}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
