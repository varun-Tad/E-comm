import ProdListingCard from "../../../components/Cards/ProdListingCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProdListingPage.css";

import {
  sortProductList,
  sortRatingList,
  sortingCatgeories,
  sortPriceRange,
} from "../FilterFunctions";

import { useProduct } from "./Product-context";

const ProdListingPage = () => {
  const { state } = useProduct();
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/products");
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const sortedProducts = sortProductList(state.sortOrder, Products);
  const ratedProducts = sortRatingList(state.rating, sortedProducts);
  const checkBoxProducts = sortingCatgeories(state.categories, ratedProducts);
  const RangedProducts = sortPriceRange(state.theValue, checkBoxProducts);

  return (
    <div className="card-vessel">
      {loading && <div className="loader"></div>}
      {RangedProducts.map((item) => {
        return (
          <ProdListingCard key={item.id} prodData={item}></ProdListingCard>
        );
      })}
    </div>
  );
};

export default ProdListingPage;
