import React, { useState } from "react";

import "./Signup.css";
import img1 from "../../images/sport-shoes.webp";
import img2 from "../../images/Red-kurta.webp";
import img3 from "../../images/handbags.jpeg";
import img4 from "../../images/watch.jpeg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        autoClose: 3000,
      });
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-a;ready-in-use") {
        toast.error("Cannot create user.Email already in use", {
          autoClose: 3000,
        });
      } else {
        console.error("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <div className="main-container">
        <div className="image-container">
          <img className="image1" src={img1} alt="apparel" />
          <img className="image2" src={img2} alt="apparel" />
          <img className="image3" src={img3} alt="apparel" />
          <img className="image4" src={img4} alt="apparel" />
          <p>...and more!</p>
        </div>
        <div class="login-container">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>

            <div className="basic-input-textboxes">
              <label></label>
              <input
                className="basic-input-box inp-btn login-inp"
                type="text"
                placeholder="Enter name"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
              />
            </div>
            <div className="basic-input-textboxes">
              <label></label>
              <input
                className="basic-input-box inp-btn login-inp"
                type="email"
                placeholder="Enter email"
                required
                onChange={handleChange}
                name="email"
                value={email}
              />
            </div>
            <div className="basic-input-textboxes">
              <label></label>
              <input
                className="basic-input-box inp-btn login-inp"
                type="password"
                placeholder="Enter Password"
                required
                onChange={handleChange}
                name="password"
                value={password}
              />
            </div>
            <div className="basic-input-textboxes">
              <label></label>
              <input
                className="basic-input-box inp-btn login-inp"
                type="password"
                placeholder="Confirm Password"
                required
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
              />
            </div>

            <div className="check-box">
              <div>
                <input type="checkbox" />
                <label>
                  I agree to the <span>Terms & Conditions</span>
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-secondary btns">
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
};

export default Signup;
