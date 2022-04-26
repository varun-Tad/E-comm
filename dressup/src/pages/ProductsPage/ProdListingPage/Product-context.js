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

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkZTNhNDI2MC1mNzUxLTQyMTUtYjg3Yi0yN2JlYWEwNmQ4NzYifQ.GYv_FtF9AV-AyMjoZza_d3dANrHfAi5Jppzrb6TWiT4"
  );
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
