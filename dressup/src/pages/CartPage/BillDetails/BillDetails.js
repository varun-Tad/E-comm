import "./BillDetails.css";

function BillDetails() {
  return (
    <div className="check-container">
      <h2>Price Details</h2>
      <div className="price">
        <p>Price (3 items)</p>
        <p>₹ 7000</p>
      </div>
      <div className="discount">
        <p>Discount</p>
        <p>₹ 200</p>
      </div>
      <div className="del-charges">
        <p>Delivery Charges</p>
        <p>₹ 30</p>
      </div>
      <div className="total">
        <h3>Total Amount</h3>
        <p>₹ 7030</p>
      </div>

      <button type="button">Buy Now</button>
    </div>
  );
}

export default BillDetails;
