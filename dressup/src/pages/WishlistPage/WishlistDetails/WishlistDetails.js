import "./WishlistDetails.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function WishlistDetails() {
  return (
    <div>
      <div className="card-content">
        <div className="image-contain">
          <img
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16373110/2021/12/4/f27a5989-4b15-491f-98a1-90b7347f4e5d1638621085660maxBoysBlueSlimFitLowDistressHeavyFadeJeans1.jpg"
            alt="Jeans"
          ></img>
        </div>
        <div className="card-wrap">
          <div className="card-text-contain">
            <h4>
              U.S. Polo Assn. Denim Co.
              <FaHeart className="heart-color" />
            </h4>
            <p>
              ₹2699 <span>₹3599</span> (25% OFF)
            </p>
            <p className="rate">
              5 <FaStar className="star-color" />| 5
            </p>
          </div>
          <div className="button-text-contain">
            <button type="button" className="btn btn-success btns btn-one">
              Remove
            </button>
            <button type="button" className="btn btn-success btns btn-two">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistDetails;
