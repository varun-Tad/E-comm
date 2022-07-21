import React from "react";
import "./CartDetails.css";
import { FaShoppingCart } from "react-icons/fa";
import { useWishCart } from "../WishCart-context";
import { toast } from "react-toastify";
import axios from "axios";

function CartDetails(props) {
  const { dispatchOne } = useWishCart();

  const removeCart = async (_id) => {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/cart/${_id}`,
      headers: { authorization: localStorage.getItem("tokens") },
    });
    dispatchOne({ type: "removeFromCart", payload: response.data.cart });
  };

  const moveToWish = async (_id, productData) => {
    if (localStorage.getItem("tokens")) {
      const response = await axios({
        method: "POST",
        url: "/api/user/wishlist",
        headers: { authorization: localStorage.getItem("tokens") },
        data: { product: productData },
      });
      dispatchOne({ type: "addProToWish", payload: response.data.wishlist });
      removeCart(_id);
    }
  };

  const updateQuantity = async (actionType, ele) => {
    if (ele.qty === 1 && actionType === "decrement") {
      removeCart(ele._id);
    } else {
      const response = await axios({
        method: "POST",
        url: `/api/user/cart/${ele._id}`,
        headers: { authorization: localStorage.getItem("tokens") },
        data: {
          action: {
            type: actionType,
          },
        },
      });
      dispatchOne({ type: "addProToCart", payload: response.data.cart });
      console.log("Cart updated");
    }
  };

  return (
    <div>
      <div className="checkout-card">
        <div className="checkout-card-img">
          <img loading="lazy" src={props.CartData.imgSrc} alt="apparel"></img>
        </div>
        <div className="column-two">
          <div className="card-text">
            <h4>{props.CartData.brand}</h4>
            <p>
              ₹{props.CartData.discountPrice}{" "}
              <span>₹{props.CartData.actualPrice}</span> (
              {props.CartData.discount}%OFF)
            </p>
          </div>
          <div className="quantity-btns">
            <button onClick={() => updateQuantity("increment", props.CartData)}>
              +
            </button>
            <span>{props.CartData.qty}</span>
            <button onClick={() => updateQuantity("decrement", props.CartData)}>
              -
            </button>
          </div>
          <div className="foot-btns">
            <button
              className=" cart-btn btn btn-success btns buyNow-btn"
              onClick={() => {
                toast.success("Item removed from Cart", {
                  autoClose: 3000,
                });
                removeCart(props.CartData._id);
              }}
            >
              <FaShoppingCart></FaShoppingCart> Remove from Cart
            </button>

            <button
              className="cart-btn btn btn-success btns buyNow-btn"
              onClick={() => moveToWish(props.CartData._id, props.CartData)}
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
