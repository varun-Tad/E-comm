import { Navbar, Footer } from "./index";
import { FaHeart } from "react-icons/fa";
import { useWishCart } from "../CartPage/WishCart-context";
import WishListingPage from "./WishListingPage/WishListingPage";
import React from "react";
import "./Wishlist.css";
function Wishlist() {
  const { stateOne } = useWishCart();
  return (
    <div className="WishlistPageBody">
      <Navbar />
      <h1>
        Your WishList({stateOne.WishListItems}) <FaHeart />
      </h1>
      <div className="wishlist-container">
        <WishListingPage />
      </div>

      <Footer />
    </div>
  );
}

export default Wishlist;
