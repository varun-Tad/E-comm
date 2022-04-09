import { Navbar, Footer, WishlistDetails } from "./index";
import { FaHeart } from "react-icons/fa";
import "./Wishlist.css";
function Wishlist() {
  return (
    <div>
      <Navbar />
      <h1>
        Your WishList <FaHeart />
      </h1>
      <div className="wishlist-container">
        <WishlistDetails />
        <WishlistDetails />
        <WishlistDetails />
      </div>
      <div className="footer-sec">
        <Footer />
      </div>
    </div>
  );
}

export default Wishlist;
