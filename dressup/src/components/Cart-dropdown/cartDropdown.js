import React from "react";
import { Link } from "react-router-dom";
import "./cartDropdown.css";

const CartDropdown = () => {
  return (
    <div className="Cart-dropdown-container">
      <div className="cart-items">
        <button>
          <Link to="/Cart"> Go to Checkout</Link>
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;
