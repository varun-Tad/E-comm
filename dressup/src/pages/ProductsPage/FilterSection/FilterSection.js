import "./FilterSection.css";

const FilterSection = () => {
  return (
    <aside className="filter-section">
      <div className="filter-header">
        <h3>Filter</h3>
        <h4>Clear All</h4>
      </div>
      <div className="border"></div>
      <p className="priceRange-header">PRICE RANGE</p>
      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          className="slider"
          id="myRange"
        ></input>
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
            ></input>
            <label htmlFor="Price low to high">Price low to high</label>
          </li>
          <li>
            <input
              type="radio"
              name="sort-by"
              value="Price high to low"
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
            <input type="checkbox" name="categories" value="Tshirts"></input>
            <label htmlFor="Tshirts"> Tshirts</label>
          </li>
          <li>
            <input type="checkbox" name="categories" value="Shirts"></input>
            <label htmlFor="Shirts"> Shirts</label>
          </li>
          <li>
            <input type="checkbox" name="categories" value="Watches"></input>
            <label htmlFor="Watches"> Watches</label>
          </li>
          <li>
            <input type="checkbox" name="categories" value="Skirts"></input>
            <label htmlFor="Skirts">Skirts</label>
          </li>
          <li>
            <input type="checkbox" name="categories" value="Shoes"></input>
            <label htmlFor="Shoes">Shoes</label>
          </li>
        </ul>
      </div>
      <div className="border"></div>
      <div className="ratings">
        <ul className="ratings-list">
          <p>RATINGS</p>
          <li>
            <input type="checkbox" name="ratings" value="5 Stars"></input>
            <label htmlFor="5 Star"> 5 Stars</label>
          </li>
          <li>
            <input type="checkbox" name="ratings" value="4 Stars"></input>
            <label htmlFor="4 Stars"> 4 Stars</label>
          </li>
          <li>
            <input type="checkbox" name="ratings" value="3 Stars"></input>
            <label htmlFor="3 Stars"> 3 stars</label>
          </li>
          <li>
            <input type="checkbox" name="ratings" value="2 Stars"></input>
            <label htmlFor="2 Stars"> 2 Stars</label>
          </li>
          <li>
            <input type="checkbox" name="ratings" value="1 Star"></input>
            <label htmlFor="1 Star"> 1 Star</label>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default FilterSection;
