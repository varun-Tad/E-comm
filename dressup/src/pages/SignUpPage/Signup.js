import React from "react";
import LoginPageNavbar from "../../components/LoginPageNavbar/LoginPageNavbar";
import "./Signup.css";
import img1 from "../../images/sport-shoes.webp";
import img2 from "../../images/Red-kurta.webp";
import img3 from "../../images/handbags.jpeg";
import img4 from "../../images/watch.jpeg";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div>
      <LoginPageNavbar />
      <div className="main-container">
        <div className="image-container">
          <img className="image1" src={img1} alt="apparel" />
          <img className="image2" src={img2} alt="apparel" />
          <img className="image3" src={img3} alt="apparel" />
          <img className="image4" src={img4} alt="apparel" />
          <p>...and more!</p>
        </div>
        <div class="login-container">
          <form className="form">
            <h2>Sign Up</h2>
            <div className="google-text">
              <img
                src="https://img.icons8.com/color/24/000000/google-logo.png"
                alt="google-icon-img"
              />
              <span>Sign up with Google</span>
            </div>
            <small className="form-smallText">or Sign up with Email</small>
            <div className="basic-input-textboxes">
              <label for="Name"></label>
              <input
                className="basic-input-box inp-btn login-inp"
                type="text"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="basic-input-textboxes">
              <label for="Email"></label>
              <input
                className="basic-input-box inp-btn login-inp"
                type="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="basic-input-textboxes">
              <label for="Password"></label>
              <input
                className="basic-input-box inp-btn login-inp"
                type="password"
                placeholder="Enter Password"
                required
              />
            </div>

            <div className="check-box">
              <div>
                <input type="checkbox" />
                <label for="">
                  I agree to the <span>Terms & Conditions</span>
                </label>
              </div>
            </div>
            <button type="button" className="btn btn-secondary btns">
              Sign Up
            </button>
            <p>
              Already have an account? <Link to="/Login">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
