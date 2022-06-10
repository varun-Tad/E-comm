import img1 from "../../images/jeans.jpeg";
import img2 from "../../images/denim-jeans.jpeg";
import img3 from "../../images/top.jpeg";
import img4 from "../../images/jeans-two.jpeg";
import img5 from "../../images/women-watch.jpeg";
import img6 from "../../images/mens-watchOne.jpeg";
import img7 from "../../images/MensWatch.webp";
import img8 from "../../images/MensShirtTwo.webp";
import img9 from "../../images/MensShirtThree.webp";

const shopData = [
  {
    title: "Pants",
    items: [
      {
        id: 1,
        imgSrc: img1,
        brand: "U.S. Polo Assn",
        price: {
          actualPrice: 3999,
          discountPrice: 2000,
          discount: 40,
        },
        rating: 3,
        categoryName: "Pants",
      },
      {
        id: 2,
        imgSrc: img2,
        brand: "U.S. Polo Assn. Denim Co.",
        price: {
          actualPrice: 3199,
          discountPrice: 1759,
          discount: 45,
        },
        rating: 4,
        categoryName: "Pants",
      },
      {
        id: 3,
        imgSrc: img4,
        brand: "U.S. Polo Assn. Denims Co",
        price: {
          actualPrice: 3599,
          discountPrice: 2699,
          discount: 25,
        },
        rating: 2,
        categoryName: "Pants",
      },
    ],
  },
  {
    title: "Watches",
    items: [
      {
        id: 4,
        imgSrc: img5,
        brand: "DressBerry Women Mauve Analogue Watch",
        price: {
          actualPrice: 3099,
          discountPrice: 1084,
          discount: 65,
        },
        rating: 5,
        categoryName: "Watches",
      },
      {
        id: 5,
        imgSrc: img6,
        brand: "Men Brown Factory Serviced Analogue Watch",
        price: {
          actualPrice: 10995,
          discountPrice: 6597,
          discount: 40,
        },
        rating: 3,
        categoryName: "Watches",
      },
      {
        id: 6,
        imgSrc: img7,
        brand: "Men Red Rev T Analogue Watch",
        price: {
          actualPrice: 3999,
          discountPrice: 2000,
          discount: 40,
        },
        rating: 4,
        categoryName: "Watches",
      },
    ],
  },
  {
    title: "Shirts",
    items: [
      {
        id: 7,
        imgSrc: img3,
        brand: "H&M Women Pink Collared Top",
        price: {
          actualPrice: 1000,
          discountPrice: 800,
          discount: 10,
        },
        rating: 4,
        categoryName: "Shirts",
      },
      {
        id: 8,
        imgSrc: img8,
        brand: "Men Teal Blue Polo Collar Cotton Pure Cotton",
        price: {
          actualPrice: 1299,
          discountPrice: 714,
          discount: 45,
        },
        rating: 3,
        categoryName: "Shirts",
      },
      {
        id: 9,
        imgSrc: img9,
        brand: "Brown Casual Shirt",
        price: {
          actualPrice: 3999,
          discountPrice: 2000,
          discount: 40,
        },
        rating: 2,
        categoryName: "Shirts",
      },
    ],
  },
];

export default shopData;