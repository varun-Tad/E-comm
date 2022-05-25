import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cart.context";
import CartItemsDropdown from "../Cart-items-dropdown/CartItemsDropdown";
import "./cartDropdown.css";

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="Cart-dropdown-container">
      <div className="cart-items">
        <CartItemsDropdown />
      </div>
      <button onClick={toggleCart}>
        <Link to="/Cart"> Go to Checkout</Link>
      </button>
    </div>
  );
};

export default CartDropdown;
