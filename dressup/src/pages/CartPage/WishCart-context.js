import React, { createContext, useContext, useReducer } from "react";

import { ProductsPageData } from "../ProductsPage/ProductsPage.data";
import { reducerFnOne } from "./reducerFnOne";

const WishCartContext = createContext(null);

const useWishCart = () => useContext(WishCartContext);

const WishCartProvier = ({ children }) => {
  const [stateOne, dispatchOne] = useReducer(reducerFnOne, {
    Product: [...ProductsPageData],
    Cart: [],
    Wishlist: [],
    CartItems: 0,
    WishListItems: 0,
    TotalPrice: 0,
  });

  return (
    <WishCartContext.Provider value={{ stateOne, dispatchOne }}>
      {children}
    </WishCartContext.Provider>
  );
};

export { WishCartProvier, useWishCart };
