import React from "react";
import { FaShoppingCart, FaRegHeart } from "../../assets/icons";
import { Link } from "react-router-dom";
import "./Navicons.css";

function Navicons() {
  return (
    <div className="badges">
      <div class="badge-portion">
        <Link to="/Wishlist">
          <FaRegHeart className="navicon-color" size={28}></FaRegHeart>
        </Link>
      </div>
      <div class="badge-portion">
        <Link to="/Cart">
          <FaShoppingCart className="navicon-color" size={28}></FaShoppingCart>
        </Link>
      </div>
    </div>
  );
}

export default Navicons;
