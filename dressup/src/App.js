import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Cart from "./pages/CartPage/Cart";
import Wishlist from "./pages/WishlistPage/Wishlist";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignUpPage/Signup";
// import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Productspage" element={<ProductsPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
