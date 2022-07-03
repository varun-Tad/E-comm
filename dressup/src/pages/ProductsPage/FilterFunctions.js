import { ProductsPageData } from "./ProductsPage.data";

const sortProductList = (order, products) => {
  switch (order) {
    case "highToLow":
      return products.sort((a, b) => b.discountPrice - a.discountPrice);
    case "lowToHigh":
      return products.sort((a, b) => a.discountPrice - b.discountPrice);
    default:
      return products;
  }
};

const sortRatingList = (rate, sortedProducts) => {
  switch (rate) {
    case "FiveStars":
      return sortedProducts.filter((item) => item.rating === 5);
    case "FourStars":
      return sortedProducts.filter((item) => item.rating === 4);
    case "ThreeStars":
      return sortedProducts.filter((item) => item.rating === 3);
    case "TwoStars":
      return sortedProducts.filter((item) => item.rating === 2);
    case "OneStar":
      return sortedProducts.filter((item) => item.rating === 1);
    case "All":
      return sortedProducts;
    default:
      return sortedProducts;
  }
};

const sortingCatgeories = (categs, ratedProducts) => {
  if (
    categs.Shirts === true &&
    categs.Pants === false &&
    categs.Watches === false
  ) {
    return ratedProducts.filter((item) => item.categoryName === "Shirts");
  }

  if (
    categs.Pants === true &&
    categs.Shirts === false &&
    categs.Watches === false
  ) {
    return ratedProducts.filter((item) => item.categoryName === "Pants");
  }

  if (
    categs.Pants === false &&
    categs.Shirts === false &&
    categs.Watches === true
  ) {
    return ratedProducts.filter((item) => item.categoryName === "Watches");
  }

  if (
    categs.Shirts === true &&
    categs.Pants === true &&
    categs.Watches === true
  ) {
    return ratedProducts.filter(
      (item) =>
        item.categoryName === "Shirts" ||
        item.categoryName === "Pants" ||
        item.categoryName === "Watches"
    );
  }

  if (
    categs.Shirts === true &&
    categs.Pants === true &&
    categs.Watches === false
  ) {
    return ratedProducts.filter(
      (item) => item.categoryName === "Shirts" || item.categoryName === "Pants"
    );
  }

  if (
    categs.Shirts === false &&
    categs.Pants === true &&
    categs.Watches === true
  ) {
    return ratedProducts.filter(
      (item) => item.categoryName === "Pants" || item.categoryName === "Watches"
    );
  }

  if (
    categs.Shirts === true &&
    categs.Pants === false &&
    categs.Watches === true
  ) {
    return ratedProducts.filter(
      (item) =>
        item.categoryName === "Shirts" || item.categoryName === "Watches"
    );
  }

  return ratedProducts;
};

const sortPriceRange = (theValue, checkBoxProducts) => {
  return checkBoxProducts.filter((item) => item.discountPrice < theValue);
};

export { sortProductList, sortRatingList, sortingCatgeories, sortPriceRange };
