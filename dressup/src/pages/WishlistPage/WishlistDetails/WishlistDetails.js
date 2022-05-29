import "./WishlistDetails.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useWishCart } from "../../CartPage/WishCart-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function WishlistDetails(props) {
  const { stateOne, dispatchOne } = useWishCart();
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
              ₹{props.WishData.price.discountPrice}{" "}
              <span>₹{props.WishData.price.actualPrice}</span> (
              {props.WishData.price.discount}% OFF)
            </p>
            <p className="rate">
              5 <FaStar className="star-color" />| 5
            </p>
          </div>
          <div className="button-text-contain">
            <button
              className="wish-btn btn btn-success btns btn-one"
              onClick={() => {
                stateOne.Cart.some((e) => e.id === props.WishData.id)
                  ? toast.info("Item already exists in Cart")
                  : dispatchOne({ type: "moveToCart", value: props.WishData });
              }}
            >
              <FaShoppingCart /> Move to Cart
            </button>

            <button
              className="btn btn-success btns btn-two"
              onClick={() =>
                dispatchOne({ type: "removeFromWish", value: props.WishData })
              }
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
