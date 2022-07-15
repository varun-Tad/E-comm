import React, { createContext, useContext, useEffect, useReducer } from "react";

import { ProductsPageData } from "../ProductsPage/ProductsPage.data";
import { reducerFnOne } from "./reducerFnOne";

const WishCartContext = createContext({
  Product: [...ProductsPageData],
  Cart: [],
  Wishlist: [],
  CartCount: 0,
  WishListItems: 0,
  CartTotal: 0,
});

const useWishCart = () => useContext(WishCartContext);

const WishCartProvier = ({ children }) => {
  const [stateOne, dispatchOne] = useReducer(reducerFnOne, {
    Product: [...ProductsPageData],
    Cart: [],
    Wishlist: [],
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
