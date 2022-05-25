import React from "react";
import { useWishCart } from "../../pages/CartPage/WishCart-context";

import "./CartItemsDropdown.css";

const CartItemsDropdown = () => {
  const { stateOne } = useWishCart();
  //   const { cart } = stateOne.Cart;
  //   console.log("Cart", cart);
  return (
    // <div>
    //   {/* <h2>{stateOne.Cart[0].brand}</h2>
    //   <span>{stateOne.Cart[0].quantity}</span> */}
    // </div>

    <div>
      {stateOne.Cart.map((ele) => (
        <div>{ele.brand}</div>
      ))}
    </div>
  );
};

export default CartItemsDropdown;
