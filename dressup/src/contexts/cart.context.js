import React, { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { useCart, CartContext, CartProvider };
