// import PrimaryNavbutton from "../Buttons/PrimaryNavbutton";
import "./ProdListingCard.css";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function ProdListingCard(props) {
  return (
    <div class="card-content">
      <div class="image-contain">
        <img src={props.prodData.imgSrc} alt="Jeans"></img>
      </div>
      <div class="card-wrap">
        <div class="card-text-contain">
          <h4>
            U.S. Polo Assn.
            <FaHeart className=".heart"></FaHeart>
          </h4>
          <p>
            ₹ 2000 <span>₹3999</span>(40% OFF)
          </p>
          <p class="rate">
            3 <FaStar className="star"></FaStar>| 5
          </p>
        </div>
        <div class="button-text-contain">
          <button type="button" class="btn btn-success btns btn-one">
            Buy Now
          </button>
          <button type="button" class="btn btn-success btns btn-two">
            <FaShoppingCart></FaShoppingCart> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProdListingCard;
