import "./Searchbar.css";

function Searchbar() {
  return (
    <div className="basic-input-textboxes">
      <label for="products"></label>
      <input
        className="basic-input-box inp-btn"
        type="text"
        placeholder="Search products"
      />
    </div>
  );
}

export default Searchbar;
