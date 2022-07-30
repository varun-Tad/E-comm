import "./WishlistDetails.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useWishCart } from "../../CartPage/WishCart-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import React from "react";

function WishlistDetails(props) {
  const { dispatchOne } = useWishCart();
  let cartItemExists = false;

  const removeWish = async (_id) => {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/wishlist/${_id}`,
      headers: { authorization: localStorage.getItem("tokens") },
    });
    dispatchOne({ type: "removeFromWish", payload: response.data.wishlist });
  };

  const updateQuantity = async (actionType, productData) => {
    if (actionType === "increment") {
      const response = await axios({
        method: "POST",
        url: `/api/user/cart/${productData._id}`,
        headers: { authorization: localStorage.getItem("tokens") },
        data: {
          action: {
            type: actionType,
          },
        },
      });
      dispatchOne({ type: "addProToCart", payload: response.data.cart });
    }
  };

  const moveCart = async (_id, productData) => {
    cartItemExists = false;
    if (localStorage.getItem("tokens")) {
      const Cartresponse = await axios({
        method: "GET",
        url: "/api/user/cart",
        headers: { authorization: localStorage.getItem("tokens") },
      });

      if (Cartresponse.data.cart.some((ele) => ele.id === productData.id)) {
        cartItemExists = true;
      } else {
        const response = await axios({
          method: "POST",
          url: "/api/user/cart",
          headers: { authorization: localStorage.getItem("tokens") },
          data: { product: productData },
        });
        dispatchOne({ type: "addProToCart", payload: response.data.cart });
      }

      if (cartItemExists) {
        updateQuantity("increment", productData);
      }
    }
  };

  return (
    <div>
      <div className="card-content">
        <div className="image-contain">
          <img src={props.WishData.imgSrc} alt="apparel"></img>
        </div>
        <div className="card-wrap">
          <div className="card-text-contain">
            <h4>
              {props.WishData.brand}
              <FaHeart className="heart-color" />
            </h4>
            <p>
              ₹{props.WishData.discountPrice}{" "}
              <span>₹{props.WishData.actualPrice}</span> (
              {props.WishData.discount}% OFF)
            </p>
            <p className="rate">
              5 <FaStar className="star-color" />| 5
            </p>
          </div>
          <div className="button-text-contain">
            <button
              className="wish-btn btn btn-success btns btn-one"
              onClick={() => moveCart(props.WishData._id, props.WishData)}
            >
              <FaShoppingCart /> Move to Cart
            </button>
            <button
              className="btn btn-success btns btn-two"
              onClick={() => {
                toast.success("Item removed from Wishlist", {
                  autoClose: 3000,
                });

                removeWish(props.WishData._id);
              }}
            >
              Remove from Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistDetails;
