// import PrimaryNavbutton from "../Buttons/PrimaryNavbutton";
import "./ProdListingCard.css";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useWishCart } from "../../pages/CartPage/WishCart-context";
import axios from "axios";
import React from "react";
const message = (msg) => {
  console.log(msg);
};
function ProdListingCard(props) {
  const { stateOne, dispatchOne } = useWishCart();
  const addCart = async (cartData) => {
    console.log(cartData);
    const token = localStorage.getItem("token");
    const response = await axios({
      method: "post",
      url: "/api/user/cart",

      data: {
        product: cartData,
      },
      headers: { authorization: token },
    });
    console.log(response);
  };
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
            {props.prodData.price.discount} OFF)
          </p>
          <p className="rate">
            {props.prodData.rating} <FaStar className="star"></FaStar>| 5
          </p>
        </div>
        <div className="button-text-contain">
          <button
            className="btn btn-success btns btn-one"
            onClick={() => {
              stateOne.Cart.some((e) => e.id === props.prodData.id)
                ? message("already exists")
                : addCart(props.prodData);
            }}
          >
            <FaShoppingCart></FaShoppingCart> Add to Cart
          </button>

          <button
            className="btn btn-success btns btn-two"
            onClick={() => {
              stateOne.Wishlist.some((e) => e.id === props.prodData.id)
                ? message("exist")
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
