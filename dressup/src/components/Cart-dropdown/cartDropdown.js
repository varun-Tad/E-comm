import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cart.context";
import CartItemsDropdown from "../Cart-items-dropdown/CartItemsDropdown";
import "./cartDropdown.css";

const CartDropdown = () => {
  let navigate = useNavigate();
  const { isCartOpen, setIsCartOpen } = useCart();

  const toggleCart = () => {
    if (localStorage.getItem("tokens")) {
      navigate("/Cart");
    } else {
      navigate("/Login");
    }
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="Cart-dropdown-container">
      <div className="cart-items">
        <CartItemsDropdown />
      </div>
      <button className="goToCheckoutBtn" onClick={toggleCart}>
        Go To Checkout ➜
      </button>
    </div>
  );
};

export default CartDropdown;
