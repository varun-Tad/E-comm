import React from "react";
import { FaShoppingCart, FaRegHeart } from "../../assets/icons";
import "./Navicons.css";

function Navicons() {
  return (
    <div className="badges">
      <div class="badge-portion">
        <FaRegHeart className="navicon-color" size={28}></FaRegHeart>
      </div>
      <div class="badge-portion">
        <FaShoppingCart className="navicon-color" size={28}></FaShoppingCart>
      </div>
    </div>
  );
}

export default Navicons;
