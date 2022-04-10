// import PrimaryNavbutton from "../Buttons/PrimaryNavbutton";
import "./ProdListingCard.css";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function ProdListingCard(props) {
  return (
    <div className="card-content">
      <div className="image-contain">
        <img src={props.prodData.imgSrc} alt="Jeans"></img>
      </div>
      <div className="card-wrap">
        <div className="card-text-contain">
          <h4>
            {props.prodData.brand}
            <FaHeart className="heart"></FaHeart>
          </h4>
          <p>
            ₹ {props.prodData.price.discountPrice}{" "}
            <span>₹{props.prodData.price.actualPrice}</span>(
            {props.prodData.price.discount} OFF)
          </p>
          <p className="rate">
            {props.prodData.rating} <FaStar className="star"></FaStar>| 5
          </p>
        </div>
        <div className="button-text-contain">
          <button type="button" class="btn btn-success btns btn-one">
            Buy Now
          </button>
          <button type="button" className="btn btn-success btns btn-two">
            <FaShoppingCart></FaShoppingCart> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProdListingCard;
