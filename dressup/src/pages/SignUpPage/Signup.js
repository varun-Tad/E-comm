import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import img1 from "../../images/sport-shoes.webp";
import img2 from "../../images/Red-kurta.webp";
import img3 from "../../images/handbags.jpeg";
import img4 from "../../images/watch.jpeg";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const defaultFormFields = {
  FirstName: "",
  LastName: "",
  email: "",
  Password: "",
};

const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { FirstName, email, LastName, Password } = formFields;
  const [pwdType, setpwdType] = useState("password");
  const [pwdText, setPwdText] = useState("Show password");

  let navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: FirstName,
        lastName: LastName,
        email: email,
        password: Password,
      });

      navigate("/");
      localStorage.setItem(`tokens`, response.data.encodedToken);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const pwdHandler = () => {
    pwdType === "password" ? setpwdType("text") : setpwdType("password");
    pwdText === "Show password"
      ? setPwdText("Hide password")
      : setPwdText("Show password");
  };

  return (
    <div className="theMain">
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
                placeholder="Enter first name"
                required
                onChange={handleChange}
                name="FirstName"
                value={FirstName}
              />
            </div>
            <div className="basic-input-textboxes">
              <label></label>
              <input
                className="basic-input-box inp-btn login-inp"
                type="text"
                placeholder="Enter last name"
                required
                onChange={handleChange}
                name="LastName"
                value={LastName}
              />
            </div>
            <div className="basic-input-textboxes">
              <label></label>
              <input
                className="basic-input-box inp-btn login-inp"
                type="email"
                placeholder="Enter Email"
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
                type={pwdType}
                placeholder="Enter Password"
                required
                onChange={handleChange}
                name="Password"
                value={Password}
              />
            </div>
            <div className="show-pwd">
              <small onClick={pwdHandler}>{pwdText}</small>
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
