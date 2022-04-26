import { useWishCart } from "../../CartPage/WishCart-context";
import WishlistDetails from "../WishlistDetails/WishlistDetails";
import React from "react";
import "./WishListingPage.css";

const WishListingPage = () => {
  const { stateOne } = useWishCart();

  return (
    <div className="wish-container">
      {stateOne.Wishlist.map((item) => {
        return (
          <WishlistDetails key={item.id} WishData={item}></WishlistDetails>
        );
      })}
    </div>
  );
};

export default WishListingPage;
