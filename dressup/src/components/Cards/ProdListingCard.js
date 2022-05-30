import "./ProdListingCard.css";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWishCart } from "../../pages/CartPage/WishCart-context";
import React from "react";

function ProdListingCard(props) {
  const { stateOne, dispatchOne } = useWishCart();

  return (
    <div className="card-content">
      <div className="image-contain">
        <img src={props.prodData.imgSrc} alt="Jeans"></img>
      </div>
      <div className="card-wrap">
        <div className="card-text-contain">
          <h4>{props.prodData.brand}</h4>
          <p>
            ₹ {props.prodData.price.discountPrice}{" "}
            <span>₹{props.prodData.price.actualPrice}</span>(
            {props.prodData.price.discount}% OFF)
          </p>
          <p className="rate">
            {props.prodData.rating} <FaStar className="star"></FaStar>| 5
          </p>
        </div>
        <div className="button-text-contain">
          <button
            className="btn btn-success btns btn-one"
            onClick={() => {
              toast.success("Item added to Cart", {
                autoClose: 3000,
              });
              dispatchOne({ type: "addProToCart", value: props.prodData });
            }}
          >
            <FaShoppingCart></FaShoppingCart> Add to Cart
          </button>

          <button
            className="btn btn-success btns btn-two"
            onClick={() => {
              stateOne.Wishlist.some((e) => e.id === props.prodData.id)
                ? toast.info("Item already exists in wishlist", {
                    autoClose: 3000,
                  })
                : dispatchOne({ type: "addProToWish", value: props.prodData });
            }}
          >
            <FaHeart className="heart"></FaHeart> Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProdListingCard;
