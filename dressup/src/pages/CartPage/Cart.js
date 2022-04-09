import "./Cart.css";
import { Navbar, Footer, CartDetails, BillDetails } from "../CartPage/index";

function Cart() {
  return (
    <div>
      <Navbar />
      <h1 className="cart-heading">MY CART (3)</h1>
      <div className="main-container">
        <div className="purchased-card">
          <CartDetails />
          <CartDetails />
          <CartDetails />
        </div>
        <BillDetails />
      </div>
      <div className="footer-sec">
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
