import "./ProdListingPage.css";
import ProdListingCard from "../../../components/Cards/ProdListingCard";
import React from "react";

import { ProductsPageData } from "../ProductsPage.data";

import {
  sortProductList,
  sortRatingList,
  sortingCatgeories,
  sortPriceRange,
} from "../FilterFunctions";

import { useProduct } from "./Product-context";
import { useWishCart } from "../../CartPage/WishCart-context";
// import { useState } from "react";

const ProdListingPage = () => {
  const { state } = useProduct();
  const { stateOne } = useWishCart();
  console.log("state", state);
  console.log("stateOne", stateOne);

  const sortedProducts = sortProductList(state.sortOrder, ProductsPageData);

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
