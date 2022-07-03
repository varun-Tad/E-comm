import "./Cart.css";
import { Navbar, Footer, BillDetails } from "../CartPage/index";
import CartListingPage from "./CartListingPage/CartListingPage";
import { useWishCart } from "./WishCart-context";
import React from "react";

function Cart() {
  const { stateOne } = useWishCart();
  return (
    <div className="checkout-page">
      <Navbar />
      <h1 className="cart-heading">MY CART ({stateOne.CartCount})</h1>

      {stateOne.CartCount === 0 ? (
        <div className="noItemsInCart">No Items in Cart</div>
      ) : (
        <div className="purchased-card">
          <CartListingPage />
          <div className="proccedToBuySection">
            <h2>Total : ₹{stateOne.CartTotal}</h2>
            <div className="bill">
              {stateOne.Cart.map((ele) => (
                <div className="bill-items ">
                  <div>{ele.brand}</div>
                  <div>
                    {ele.quantity} X ₹{ele.discountPrice}
                  </div>
                </div>
              ))}
              <button className="proceedToBuyBtn">Proceed to Buy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
