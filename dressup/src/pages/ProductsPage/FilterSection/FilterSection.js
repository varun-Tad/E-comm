import React from "react";
import { useProduct } from "../ProdListingPage/Product-context";
import "./FilterSection.css";

const FilterSection = () => {
  const { state, dispatch } = useProduct();
  return (
    <aside className="filter-section">
      <div className="filter-header">
        <h3>Filter</h3>
      </div>
      <div className="border"></div>
      <p className="priceRange-header">PRICE RANGE</p>
      <div className="slidecontainer">
        <input
          type="range"
          min="500"
          max="20000"
          className="slider"
          id="myRange"
          onChange={(e) => {
            dispatch({ type: "Range", value: e.target.value });
          }}
        ></input>
        <p className="slider-value">₹ {state.theValue}</p>
      </div>
      <div className="border"></div>
      <div className="sort-price">
        <ul className="sort-by-list">
          <p>SORT BY</p>
          <li>
            <input
              type="radio"
              name="sort-by"
              value="Price low to high"
              onChange={() =>
                dispatch({ type: "lowToHigh", value: "lowToHigh" })
              }
            ></input>
            <label htmlFor="Price low to high">Price low to high</label>
          </li>
          <li>
            <input
              type="radio"
              name="sort-by"
              value="Price high to low"
              onChange={() =>
                dispatch({ type: "highToLow", value: "highToLow" })
              }
            ></input>
            <label htmlFor="Price high to low">Price high to low</label>
          </li>
        </ul>
      </div>

      <div className="border"></div>
      <div className="category">
        <ul className="category-list">
          <p>CATEGORIES</p>
          <li>
            <input
              type="checkbox"
              name="Pants"
              value="Pants"
              checked={state.categories.Pants}
              onChange={(e) => dispatch({ type: "catg", value: e.target.name })}
            ></input>
            <label htmlFor="Pants"> Pants</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="Shirts"
              value="Shirts"
              checked={state.categories.Shirts}
              onChange={(e) => dispatch({ type: "catg", value: e.target.name })}
            ></input>
            <label htmlFor="Shirts"> Shirts</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="Watches"
              value="Watches"
              checked={state.categories.Watches}
              onChange={(e) => dispatch({ type: "catg", value: e.target.name })}
            ></input>
            <label htmlFor="Watches"> Watches</label>
          </li>
        </ul>
      </div>
      <div className="border"></div>
      <div className="ratings">
        <ul className="ratings-list">
          <p>RATINGS</p>
          <li>
            <input
              type="radio"
              name="ratings"
              value="5 Stars"
              onClick={() =>
                dispatch({ type: "FiveStars", value: "FiveStars" })
              }
            ></input>
            <label htmlFor="5 Star"> 5 Stars</label>
          </li>
          <li>
            <input
              type="radio"
              name="ratings"
              value="4 Stars"
              onClick={() =>
                dispatch({ type: "FourStars", value: "FourStars" })
              }
            ></input>
            <label htmlFor="4 Stars"> 4 Stars</label>
          </li>
          <li>
            <input
              type="radio"
              name="ratings"
              value="3 Stars"
              onClick={() =>
                dispatch({ type: "ThreeStars", value: "ThreeStars" })
              }
            ></input>
            <label htmlFor="3 Stars"> 3 stars</label>
          </li>
          <li>
            <input
              type="radio"
              name="ratings"
              value="2 Stars"
              onClick={() => dispatch({ type: "TwoStars", value: "TwoStars" })}
            ></input>
            <label htmlFor="2 Stars"> 2 Stars</label>
          </li>
          <li>
            <input
              type="radio"
              name="ratings"
              value="1 Star"
              onClick={() => dispatch({ type: "OneStar", value: "OneStar" })}
            ></input>
            <label htmlFor="1 Star"> 1 Star</label>
          </li>
          <li>
            <input
              type="radio"
              name="ratings"
              value="All"
              onClick={() => dispatch({ type: "All", value: "All" })}
            ></input>
            <label htmlFor="1 Star"> All</label>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default FilterSection;
