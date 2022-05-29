import "./ProdListingPage.css";
import ProdListingCard from "../../../components/Cards/ProdListingCard";
import React, { Fragment, useEffect, useState } from "react";

import { ProductsPageData } from "../ProductsPage.data";

import {
  sortProductList,
  sortRatingList,
  sortingCatgeories,
  sortPriceRange,
} from "../FilterFunctions";

import { useProduct } from "./Product-context";
import { useWishCart } from "../../CartPage/WishCart-context";

import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";

const ProdListingPage = () => {
  const { state } = useProduct();
  const { stateOne } = useWishCart();

  const [categoriesMap, setCategoriesMap] = useState({});

  let Products = [];

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  console.log(Object.keys(categoriesMap));
  const arr = Object.keys(categoriesMap);

  // arr.map((word) => {
  //   const arr1 = categoriesMap[word];
  //   arr1.map((item) => {
  //     console.log(item);
  //     setObj([...obj, item]);
  //   });
  // });
  // console.log(categoriesMap);
  // console.log(obj);
  // console.log(categoriesMap["pants"]);

  arr.map((word) => {
    const arr1 = categoriesMap[word];
    arr1.map((item) => {
      console.log("item", item);
      Products = [...Products, item];
    });
  });

  console.log("Products", Products);
  // const sortedProducts = sortProductList(state.sortOrder, ProductsPageData);

  const sortedProducts = sortProductList(state.sortOrder, Products);

  const ratedProducts = sortRatingList(state.rating, sortedProducts);

  const checkBoxProducts = sortingCatgeories(state.categories, ratedProducts);

  const RangedProducts = sortPriceRange(state.theValue, checkBoxProducts);

  return (
    <div className="card-vessel">
      {/* loading to be done */}

      {RangedProducts.map((item) => {
        return (
          <ProdListingCard key={item.id} prodData={item}></ProdListingCard>
        );
      })}
    </div>
  );
};

export default ProdListingPage;
