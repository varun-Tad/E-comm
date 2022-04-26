import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { ProductsPageData } from "../ProductsPage/ProductsPage.data";
import { reducerFnOne } from "./reducerFnOne";

const WishCartContext = createContext(null);

const useWishCart = () => useContext(WishCartContext);

const WishCartProvier = ({ children }) => {
  // const [theData, setTheData] = useState();
  // useEffect(() => {
  //   fetch("/api/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.products);
  //       setTheData(data.products);
  //       console.log("theData", theData);
  //     });
  // }, []);

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
