import { v4 as uuid } from "uuid";

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
import img10 from "../../images/Lvshirt.webp";
import img11 from "../../images/burberry.webp";

export const products = [
  {
    _id: uuid(),
    id: 1,
    imgSrc: img1,
    brand: "U.S. Polo Assn",
    actualPrice: 3999,
    discountPrice: 2000,
    discount: 40,
    rating: 3,
    categoryName: "Pants",
  },
  {
    _id: uuid(),
    id: 2,
    imgSrc: img2,
    brand: "U.S. Polo Assn. Denim Co.",
    actualPrice: 3199,
    discountPrice: 1759,
    discount: 45,
    rating: 4,
    categoryName: "Pants",
  },
  {
    _id: uuid(),
    id: 3,
    imgSrc: img3,
    brand: "H&M Women Pink Collared Top",
    actualPrice: 1000,
    discountPrice: 800,
    discount: 10,
    rating: 4,
    categoryName: "Shirts",
  },
  {
    _id: uuid(),
    id: 4,
    imgSrc: img4,
    brand: "U.S. Polo Assn. Denims Co",
    actualPrice: 3599,
    discountPrice: 2699,
    discount: 25,
    rating: 2,
    categoryName: "Pants",
  },
  {
    _id: uuid(),
    id: 5,
    imgSrc: img5,
    brand: "DressBerry Women Mauve Analogue Watch",
    actualPrice: 3099,
    discountPrice: 1084,
    discount: 65,
    rating: 5,
    categoryName: "Watches",
  },
  {
    _id: uuid(),
    id: 6,
    imgSrc: img6,
    brand: "Men Brown Factory Serviced Analogue Watch",
    actualPrice: 10995,
    discountPrice: 6597,
    discount: 40,
    rating: 3,
    categoryName: "Watches",
  },
  {
    _id: uuid(),
    id: 7,
    imgSrc: img7,
    brand: "Men Red Rev T Analogue Watch",
    actualPrice: 3999,
    discountPrice: 2000,
    discount: 40,
    rating: 4,
    categoryName: "Watches",
  },
  {
    _id: uuid(),
    id: 8,
    imgSrc: img8,
    brand: "Men Teal Blue Polo Collar Cotton Pure Cotton",
    actualPrice: 1299,
    discountPrice: 714,
    discount: 45,
    rating: 3,
    categoryName: "Shirts",
  },
  {
    _id: uuid(),
    id: 9,
    imgSrc: img9,
    brand: "Brown Casual Shirt",
    actualPrice: 3999,
    discountPrice: 2000,
    discount: 40,
    rating: 2,
    categoryName: "Shirts",
  },
  {
    _id: uuid(),
    id: 10,
    imgSrc: img10,
    brand: "LV SPREAD EMBROIDERY T-SHIRT",
    actualPrice: 4000,
    discountPrice: 3500,
    discount: 20,
    rating: 4,
    categoryName: "Shirts",
  },
  {
    _id: uuid(),
    id: 11,
    imgSrc: img11,
    brand: "Check Cotton Poplin Shirt",
    actualPrice: 3000,
    discountPrice: 2800,
    discount: 10,
    rating: 5,
    categoryName: "Shirts",
  },
];
