import "./HeroSectionbutton.css";
import { Link } from "react-router-dom";

// import Productspage from "../../pages/ProductsPage/Productspage";

function HeroSectionbutton() {
  return (
    <div>
      <button type="button" class="btn btn-secondary btns main-btn">
        <Link className="btn-link" to="/Productspage">
          Shop Now <span>&rarr;</span>
        </Link>
      </button>
    </div>
  );
}

export default HeroSectionbutton;
