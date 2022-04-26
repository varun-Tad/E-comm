import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="shop-by">
        <p className="shop-by-heading">SHOP BY</p>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>New Arrivals</p>
      </div>

      <div className="dress-up">
        <p className="dress-up-heading">DRESS UP</p>
        <p>Contact us</p>
        <p>FAQ</p>
        <p>Track Orders</p>
        <p>Cancellation</p>
      </div>

      <div className="about-us">
        <p className="about-us-heading">ABOUT US</p>
        <p>blogs</p>
        <p>Contact</p>
        <p>Careers</p>
      </div>
    </div>
  );
}

export default Footer;
