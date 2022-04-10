import "./ProdListingPage.css";
import ProdListingCard from "../../../components/Cards/ProdListingCard";
import { ProductsPageData } from "../ProductsPage.data";

import {
  sortProductList,
  sortRatingList,
  sortingCatgeories,
  sortPriceRange,
} from "../FilterFunctions";

import { useProduct } from "./Product-context";

const ProdListingPage = () => {
  const { state } = useProduct();
  console.log("state", state);
  const sortedProducts = sortProductList(state.sortOrder, ProductsPageData);
  console.log("sortedProducts", sortedProducts);

  const ratedProducts = sortRatingList(state.rating, sortedProducts);

  const checkBoxProducts = sortingCatgeories(state.categories, ratedProducts);
  console.log("checkboxProducts", checkBoxProducts);

  const RangedProducts = sortPriceRange(state.theValue, checkBoxProducts);
  console.log("RangedProducts", RangedProducts);
  return (
    <div className="card-vessel">
      {RangedProducts.map((item) => {
        return <ProdListingCard prodData={item}></ProdListingCard>;
      })}
    </div>
  );
};

export default ProdListingPage;
