import React from "react";
import CartDetails from "../CartDetails/CartDetails";
import { useWishCart } from "../WishCart-context";

const CartListingPage = () => {
  const { stateOne } = useWishCart();

  return (
    <div>
      {stateOne.Cart.map((item) => {
        return <CartDetails key={item.id} CartData={item}></CartDetails>;
      })}
    </div>
  );
};

export default CartListingPage;
