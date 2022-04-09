import "./CartDetails.css";
import { FaShoppingCart } from "react-icons/fa";

function CartDetails() {
  return (
    <div>
      <div className="checkout-card">
        <div className="checkout-card-img">
          <img
            src="https://etimg.etb2bimg.com/photo/71274460.cms"
            alt="Jeans"
          ></img>
        </div>
        <div className="column-two">
          <div className="card-text">
            <h4>U.S. Polo Assn. Denim Co.</h4>
            <p>
              ₹2699 <span>₹3599</span> (25% OFF)
            </p>
          </div>
          <div className="quantity-btns">
            <button>+</button>
            <span>1</span>
            <button>-</button>
          </div>
          <div className="foot-btns">
            <button type="button" className="btn btn-success btns">
              <FaShoppingCart></FaShoppingCart> Remove from cart
            </button>
            <button type="button" className="btn btn-success btns cart-btn">
              Add to WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
