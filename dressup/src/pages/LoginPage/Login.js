import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Navbar } from "../Homepage";
import "./Login.css";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  let navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleGuestLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      });
      localStorage.setItem("tokens", response.data.encodedToken);
      resetFormFields();
      navigate("/");
      toast.success("Login successful !", {
        autoClose: 3000,
      });
    } catch (err) {
      toast.error("Error in login.Try again !", {
        autoClose: 3000,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("tokens", response.data.encodedToken);
      resetFormFields();
      navigate("/");
      toast.success("Login successful !", {
        autoClose: 3000,
      });
    } catch (err) {
      toast.error("Error in login.Try again !", {
        autoClose: 3000,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <Navbar />
      <div className="main-containers">
        <div className="login-containers">
          <form className="forms" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="basic-input-textboxes">
              <label htmlFor="Email"></label>
              <input
                className="basic-input-box inp-btn login-inp"
                type="email"
                placeholder="Enter email"
                required
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="basic-input-textboxes">
              <label htmlFor="Password"></label>
              <input
                className="basic-input-box inp-btn login-inp"
                type="password"
                placeholder="Enter Password"
                required
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-secondary btns">
              Login
            </button>
            <button
              type="button"
              onClick={handleGuestLogin}
              className="btn btn-secondary btns"
            >
              Login as Guest
            </button>
            <p className="signUp-para">
              Don't have an account? <Link to="/Signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
