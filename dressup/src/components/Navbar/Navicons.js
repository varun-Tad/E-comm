import React, { useContext } from "react";
import { FaShoppingCart, FaRegHeart } from "../../assets/icons";

import CartDropdown from "../Cart-dropdown/cartDropdown";
import "./Navicons.css";
import { useCart } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";

function Navicons() {
  const { isCartOpen, setIsCartOpen } = useCart();
  const { currentUser } = useContext(UserContext);
  let navigate = useNavigate();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const wishListClick = () => {
    if (currentUser) {
      navigate("/Wishlist");
    } else {
      navigate("/Login");
    }
  };

  return (
    <div className="badges">
      <div class="badge-portion">
        <FaRegHeart
          onClick={wishListClick}
          className="navicon-color"
          size={28}
        ></FaRegHeart>
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
