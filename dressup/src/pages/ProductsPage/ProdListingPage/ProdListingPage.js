import "./ProdListingPage.css";
import ProdListingCard from "../../../components/Cards/ProdListingCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  sortProductList,
  sortRatingList,
  sortingCatgeories,
  sortPriceRange,
} from "../FilterFunctions";

import { useProduct } from "./Product-context";

import ProductDataService from "../../../utils/firebaseServices/product.services";

const ProdListingPage = () => {
  const { state } = useProduct();
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        console.log("Products from mockbee api", response.data.products);
        setProducts(response.data.products);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  // const getProducts = async () => {
  //   try {
  //     setLoading(true);
  //     const data = await ProductDataService.getAllProduct();
  //     setProducts(data.docs.map((doc) => ({ ...doc.data(), theId: doc.id })));
  //     setLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
