import React from "react";
import "./CartDetails.css";
import { FaShoppingCart } from "react-icons/fa";
import { useWishCart } from "../WishCart-context";

function CartDetails(props) {
  const { stateOne, dispatchOne } = useWishCart();
  return (
    <div>
      <div className="checkout-card">
        <div className="checkout-card-img">
          <img src={props.CartData.imgSrc} alt="apparel"></img>
        </div>
        <div className="column-two">
          <div className="card-text">
            <h4>{props.CartData.brand}</h4>
            <p>
              ₹{props.CartData.price.discountPrice}{" "}
              <span>₹{props.CartData.price.actualPrice}</span> (
              {props.CartData.price.discount}%OFF)
            </p>
          </div>
          <div className="quantity-btns">
            <button
              onClick={() =>
                dispatchOne({ type: "inc", value: props.CartData })
              }
            >
              +
            </button>
            <span>{props.CartData.quantity}</span>
            <button
              onClick={() =>
                dispatchOne({ type: "dec", value: props.CartData })
              }
            >
              -
            </button>
          </div>
          <div className="foot-btns">
            <button
              className=" cart-btn btn btn-success btns buyNow-btn"
              onClick={() =>
                dispatchOne({ type: "removeFromCart", value: props.CartData })
              }
            >
              <FaShoppingCart></FaShoppingCart> Remove from Cart
            </button>
            <button
              className="cart-btn btn btn-success btns buyNow-btn"
              onClick={() => {
                stateOne.Wishlist.some((e) => e.id === props.CartData.id)
                  ? console.log("exists")
                  : dispatchOne({ type: "moveToWish", value: props.CartData });
              }}
            >
              Move to wishlist{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
