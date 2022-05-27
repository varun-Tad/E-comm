import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./pages/ProductsPage/ProdListingPage/Product-context";
import { WishCartProvier } from "./pages/CartPage/WishCart-context";
import { CartProvider } from "./contexts/cart.context";

// Call make Server
// makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishCartProvier>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </WishCartProvier>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
