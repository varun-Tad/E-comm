import React from "react";
import { useWishCart } from "../../pages/CartPage/WishCart-context";
import "./CartItemsDropdown.css";

const CartItemsDropdown = () => {
  const { stateOne } = useWishCart();

  return (
    <div>
      {stateOne.Cart.map((ele) => (
        <div key={ele.id} className="cart-contents-container">
          <div key={ele.id} className="cart-contents">
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
