import React from "react";
import { FaShoppingCart, FaRegHeart } from "../../assets/icons";
import { Link } from "react-router-dom";
import CartDropdown from "../Cart-dropdown/cartDropdown";
import "./Navicons.css";
import { useCart } from "../../contexts/cart.context";

function Navicons() {
  const { isCartOpen, setIsCartOpen } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="badges">
      <div class="badge-portion">
        <Link to="/Wishlist">
          <FaRegHeart className="navicon-color" size={28}></FaRegHeart>
        </Link>
      </div>
      <div class="badge-portion">
        <FaShoppingCart
          onClick={toggleCart}
          className="navicon-color"
          size={28}
        ></FaShoppingCart>
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
}

export default Navicons;
