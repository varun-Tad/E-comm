import React from "react";
import { Navbar } from "./index";
import { FaHeart } from "react-icons/fa";
import { useWishCart } from "../CartPage/WishCart-context";
import WishListingPage from "./WishListingPage/WishListingPage";

import "./Wishlist.css";
function Wishlist() {
  const { stateOne } = useWishCart();
  return (
    <div className="WishlistPageBody">
      <Navbar />
      <h1 className="wishlist-title">
        Your WishList({stateOne.WishListItems}) <FaHeart />
      </h1>
      {stateOne.WishListItems === 0 ? (
        <div className="noItemsInWish">No Items in Wishlist</div>
      ) : (
        <div className="wishlist-container">
          <WishListingPage />
        </div>
      )}
    </div>
  );
}

export default Wishlist;
