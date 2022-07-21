import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignUpPage/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
const LazyProduct = React.lazy(() =>
  import("./pages/ProductsPage/ProductsPage")
);
const LazyCart = React.lazy(() => import("./pages/CartPage/Cart"));

const LazyWishlist = React.lazy(() => import("./pages/WishlistPage/Wishlist"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/Productspage"
          element={
            <React.Suspense fallback="Loading...">
              <LazyProduct />
            </React.Suspense>
          }
        />
        <Route
          path="/Cart"
          element={
            <React.Suspense fallback="Loading...">
              <LazyCart />
            </React.Suspense>
          }
        />
        <Route
          path="/Wishlist"
          element={
            <React.Suspense fallback="Loading...">
              <LazyWishlist />
            </React.Suspense>
          }
        />

        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
