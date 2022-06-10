import { createContext, useReducer, useContext } from "react";
import React from "react";
import { reducerFn } from "./reducerFn";

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, {
    sortOrder: null,
    rating: null,
    theValue: 50000,
    categories: {
      Shirts: false,
      Pants: false,
      Watches: false,
    },
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
