import "./ProdListingPage.css";
import ProdListingCard from "../../../components/Cards/ProdListingCard";
import React from "react";
import axios from "axios";
// import { ProductsPageData } from "../ProductsPage.data";

import {
  sortProductList,
  sortRatingList,
  sortingCatgeories,
  sortPriceRange,
} from "../FilterFunctions";

import { useProduct } from "./Product-context";
import { useWishCart } from "../../CartPage/WishCart-context";
import { useEffect, useState } from "react";

const ProdListingPage = () => {
  const { state } = useProduct();
  const { stateOne } = useWishCart();
  console.log("state", state);
  console.log("stateOne", stateOne);
  const [theData, setTheData] = useState([]);
  useEffect(() => {
    const response = axios({
      method: "get",
      url: "/api/products",
    }).then((response) => setTheData(response.data.products));

    // console.log("response", response);
  }, []);
  console.log("theData", theData);
  const sortedProducts = sortProductList(state.sortOrder, theData);

  const ratedProducts = sortRatingList(state.rating, sortedProducts);

  const checkBoxProducts = sortingCatgeories(state.categories, ratedProducts);

  const RangedProducts = sortPriceRange(state.theValue, checkBoxProducts);

  return (
    <div className="card-vessel">
      {RangedProducts.map((item) => {
        return <ProdListingCard prodData={item}></ProdListingCard>;
      })}
    </div>
  );
};

export default ProdListingPage;
