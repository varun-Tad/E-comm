import React, { createContext, useContext, useEffect, useReducer } from "react";

import { ProductsPageData } from "../ProductsPage/ProductsPage.data";
import { reducerFnOne } from "./reducerFnOne";

const WishCartContext = createContext({
  Product: [...ProductsPageData],
  Cart: [],
  // Cart: localStorage.getItem("Cart")
  //   ? JSON.parse(localStorage.getItem("Cart"))
  //   : [],
  Wishlist: [],
  // Wishlist: localStorage.getItem("Wishlist")
  //   ? JSON.parse(localStorage.getItem("Wishlist"))
  //   : [],
  CartCount: 0,
  WishListItems: 0,
  CartTotal: 0,
});

const useWishCart = () => useContext(WishCartContext);

const WishCartProvier = ({ children }) => {
  const [stateOne, dispatchOne] = useReducer(reducerFnOne, {
    Product: [...ProductsPageData],
    Cart: [],
    // Cart: localStorage.getItem("Cart")
    //   ? JSON.parse(localStorage.getItem("Cart"))
    //   : [],
    Wishlist: [],
    // Wishlist: localStorage.getItem("Wishlist")
    //   ? JSON.parse(localStorage.getItem("Wishlist"))
    //   : [],
    CartCount: 0,
    WishListItems: 0,
    CartTotal: 0,
  });

  return (
    <WishCartContext.Provider value={{ stateOne, dispatchOne }}>
      {children}
    </WishCartContext.Provider>
  );
};

export { WishCartProvier, useWishCart };
