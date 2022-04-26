import "./Cart.css";
import { Navbar, Footer, BillDetails } from "../CartPage/index";
import CartListingPage from "./CartListingPage/CartListingPage";
import { useWishCart } from "./WishCart-context";
import React from "react";

function Cart() {
  const { stateOne } = useWishCart();
  return (
    <div>
      <Navbar />
      <h1 className="cart-heading">MY CART ({stateOne.CartItems})</h1>
      <div className="main-container">
        <div className="purchased-card">
          <CartListingPage />
        </div>
        <BillDetails />
      </div>
      <div className="footer-sec">
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
