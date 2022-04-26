// import { v4 as uu_id } from "uu_id";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

import img1 from "../../images/jeans.jpeg";
import img2 from "../../images/denim-jeans.jpeg";
import img3 from "../../images/top.jpeg";
import img4 from "../../images/jeans-two.jpeg";
import img5 from "../../images/women-watch.jpeg";
import img6 from "../../images/mens-watchOne.jpeg";
import img7 from "../../images/MensWatch.webp";
import img8 from "../../images/MensShirtTwo.webp";
import img9 from "../../images/MensShirtThree.webp";

export const products = [
  // {
  //   __id: uu_id(),
  //   title: "You Can WIN",
  //   author: "Shiv Khera",
  //   price: "5000",
  //   categoryName: "non-fiction",
  // },
  // {
  //   __id: uu_id(),
  //   title: "You are Winner",
  //   author: "Juna_id Qureshi",
  //   price: "3000",
  //   categoryName: "horror",
  // },
  // {
  //   __id: uu_id(),
  //   title: "Think and Grow Rich",
  //   author: "Shiv Khera",
  //   price: "1000",
  //   categoryName: "fiction",
  // },
  {
    _id: 1,
    imgSrc: img1,
    brand: "U.S. Polo Assn",
    price: {
      actualPrice: 3999,
      discountPrice: 2000,
      discount: 40,
    },
    rating: 3,
    categoryName: "Pants",
    quantity: 1,
    TotalItemPrice: 2000,
  },
  {
    _id: 2,
    imgSrc: img2,
    brand: "U.S. Polo Assn. Denim Co.",
    price: {
      actualPrice: 3199,
      discountPrice: 1759,
      discount: 45,
    },
    rating: 4,
    quantity: 1,
    categoryName: "Pants",
    TotalItemPrice: 1759,
  },
  {
    _id: 3,
    imgSrc: img3,
    brand: "H&M Women Pink Collared Top",
    price: {
      actualPrice: 1000,
      discountPrice: 800,
      discount: 10,
    },
    rating: 4,
    quantity: 1,
    categoryName: "Shirts",
    TotalItemPrice: 800,
  },
  {
    _id: 4,
    imgSrc: img4,
    brand: "U.S. Polo Assn. Denims Co",
    price: {
      actualPrice: 3599,
      discountPrice: 2699,
      discount: 25,
    },
    rating: 2,
    quantity: 1,
    categoryName: "Pants",
    TotalItemPrice: 2699,
  },
  {
    _id: 5,
    imgSrc: img5,
    brand: "DressBerry Women Mauve Analogue Watch",
    price: {
      actualPrice: 3099,
      discountPrice: 1084,
      discount: 65,
    },
    rating: 5,
    quantity: 1,
    categoryName: "Watches",
    TotalItemPrice: 1084,
  },
  {
    _id: 6,
    imgSrc: img6,
    brand: "Men Brown Factory Serviced Analogue Watch",
    price: {
      actualPrice: 10995,
      discountPrice: 6597,
      discount: 40,
    },
    rating: 3,
    quantity: 1,
    categoryName: "Watches",
    TotalItemPrice: 6597,
  },
  {
    _id: 7,
    imgSrc: img7,
    brand: "Men Red Rev T Analogue Watch",
    price: {
      actualPrice: 3999,
      discountPrice: 2000,
      discount: 40,
    },
    rating: 4,
    quantity: 1,
    categoryName: "Watches",
    TotalItemPrice: 2000,
  },
  {
    _id: 8,
    imgSrc: img8,
    brand: "Men Teal Blue Polo Collar Cotton Pure Cotton",
    price: {
      actualPrice: 1299,
      discountPrice: 714,
      discount: 45,
    },
    rating: 3,
    quantity: 1,
    categoryName: "Shirts",
    TotalItemPrice: 714,
  },
  {
    _id: 9,
    imgSrc: img9,
    brand: "Brown Casual Shirt",
    price: {
      actualPrice: 3999,
      discountPrice: 2000,
      discount: 40,
    },
    rating: 2,
    quantity: 1,
    categoryName: "Shirts",
    TotalItemPrice: 2000,
  },
];
