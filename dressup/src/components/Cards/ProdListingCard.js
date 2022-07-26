import React from "react";
import "./ProdListingCard.css";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWishCart } from "../../pages/CartPage/WishCart-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProdListingCard = (props) => {
  const { dispatchOne, stateOne } = useWishCart();
  let navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/Cart");
  };
  const navigateToWishList = () => {
    navigate("/Wishlist");
  };

  const navigateToLogin = () => {
    navigate("/Login");
  };

  const addProdToCart = async (productData) => {
    if (localStorage.getItem("tokens")) {
      const response = await axios({
        method: "POST",
        url: "/api/user/cart",
        headers: { authorization: localStorage.getItem("tokens") },
        data: { product: productData },
      });
      toast.success("Item Added to Cart", {
        autoClose: 3000,
      });
      dispatchOne({ type: "addProToCart", payload: response.data.cart });
    } else {
      navigateToLogin();
    }
  };

  const addProdToWishlist = async (productData) => {
    if (localStorage.getItem("tokens")) {
      const response = await axios({
        method: "POST",
        url: "/api/user/wishlist",
        headers: { authorization: localStorage.getItem("tokens") },
        data: { product: productData },
      });
      dispatchOne({ type: "addProToWish", payload: response.data.wishlist });
    }
  };

  return (
    <div className="card-content">
      <div className="image-contain">
        <img loading="lazy" src={props.prodData.imgSrc} alt="apparel"></img>
      </div>
      <div className="card-wrap">
        <div className="card-text-contain">
          <h4>{props.prodData.brand}</h4>
          <p>
            ₹ {props.prodData.discountPrice}{" "}
            <span>₹{props.prodData.actualPrice}</span>({props.prodData.discount}
            % OFF)
          </p>
          <p className="rate">
            {props.prodData.rating} <FaStar className="star"></FaStar>| 5
          </p>
        </div>
        <div className="button-text-contain">
          {stateOne.Cart.some((item) => item.id === props.prodData.id) ? (
            <button
              className="btn btn-success btns btn-one"
              onClick={navigateToCart}
            >
              <FaShoppingCart></FaShoppingCart>Go to Cart
            </button>
          ) : (
            <button
              className="btn btn-success btns btn-one"
              onClick={() => {
                addProdToCart(props.prodData);
              }}
            >
              <FaShoppingCart></FaShoppingCart> Add to Cart
            </button>
          )}

          {stateOne.Wishlist.some((item) => item.id === props.prodData.id) ? (
            <button
              className="btn btn-success btns btn-one"
              onClick={navigateToWishList}
            >
              <FaHeart className="heart"></FaHeart> Go to wishlist
            </button>
          ) : (
            <button
              className="btn btn-success btns btn-one"
              onClick={() => {
                toast.success("Item added to Wishlist", {
                  autoClose: 3000,
                });
                addProdToWishlist(props.prodData);
              }}
            >
              <FaHeart className="heart"></FaHeart> Add to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProdListingCard;
