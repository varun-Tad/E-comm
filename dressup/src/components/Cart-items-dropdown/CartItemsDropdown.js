import React from "react";
import { useWishCart } from "../../pages/CartPage/WishCart-context";

import "./CartItemsDropdown.css";

const CartItemsDropdown = () => {
  const { stateOne } = useWishCart();

  return (
    <div>
      {stateOne.Cart.map((ele) => (
        <div className="cart-contents-container">
          <div className="cart-contents">
            <div>{ele.brand}</div>
            <div className="quantity-price">
              {ele.qty} X ${ele.discountPrice}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemsDropdown;
