// import PrimaryNavbutton from "../Buttons/PrimaryNavbutton";
import "./ProdListingCard.css";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useWishCart } from "../../pages/CartPage/WishCart-context";
const message = (msg) => {
  console.log(msg);
};
function ProdListingCard(props) {
  const { stateOne, dispatchOne } = useWishCart();
  return (
    <div className="card-content">
      <div className="image-contain">
        <img src={props.prodData.imgSrc} alt="Jeans"></img>
      </div>
      <div className="card-wrap">
        <div className="card-text-contain">
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
          <button
            class="btn btn-success btns btn-one"
            onClick={() => {
              stateOne.Cart.some((e) => e.id === props.prodData.id)
                ? message("already exists")
                : dispatchOne({ type: "addProToCart", value: props.prodData });
            }}
          >
            <FaShoppingCart></FaShoppingCart> Add to Cart
          </button>

          <button
            class="btn btn-success btns btn-two"
            onClick={() => {
              stateOne.Wishlist.some((e) => e.id === props.prodData.id)
                ? message("exist")
                : dispatchOne({ type: "addProToWish", value: props.prodData });
            }}
          >
            <FaHeart className="heart"></FaHeart> Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProdListingCard;
