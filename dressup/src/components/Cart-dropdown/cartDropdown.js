import React from "react";
import { Link } from "react-router-dom";
import CartItemsDropdown from "../Cart-items-dropdown/CartItemsDropdown";
import "./cartDropdown.css";

const CartDropdown = () => {
  return (
    <div className="Cart-dropdown-container">
      <div className="cart-items">
        <CartItemsDropdown />
      </div>
      <button>
        <Link to="/Cart"> Go to Checkout</Link>
      </button>
    </div>
  );
};

export default CartDropdown;
