import { useWishCart } from "../../CartPage/WishCart-context";
import WishlistDetails from "../WishlistDetails/WishlistDetails";
import "./WishListingPage.css";

const WishListingPage = () => {
  const { stateOne } = useWishCart();

  return (
    <div className="wish-container">
      {stateOne.Wishlist.map((item) => {
        return <WishlistDetails WishData={item}></WishlistDetails>;
      })}
    </div>
  );
};

export default WishListingPage;
