import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   signInWithGooglePopup,
//   signInAuthUserWithEmailAndPassword,
// } from "../../utils/firebase/firebase.utils";
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

  // const signInWithGoogle = async () => {
  //   try {
  //     await signInWithGooglePopup();
  //     toast.success("Login successful !", {
  //       autoClose: 3000,
  //     });
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const { user } = await signInAuthUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   resetFormFields();
    //   toast.success("Login successful !", {
    //     autoClose: 3000,
    //   });
    // } catch (error) {
    //   switch (error.code) {
    //     case "auth/wrong-password":
    //       toast.error("incorrect password for email", {
    //         autoClose: 3000,
    //       });
    //       break;
    //     case "auth/user-not-found":
    //       toast.error("no user associated with this email", {
    //         autoClose: 3000,
    //       });
    //       break;
    //     default:
    //       console.log(error);
    //   }
    // }

    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("tokens", response.data.encodedToken);
      navigate("/");
    } catch (err) {
      console.log(err);
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
            {/* <div className="google-texts" onClick={signInWithGoogle}>
              <img
                src="https://img.icons8.com/color/24/000000/google-logo.png"
                alt="google-icon"
              />
              <span>Sign in with Google</span>
            </div> */}
            <small className="form-smallText">or Sign in with Email</small>
            <div className="basic-input-textboxes">
              <label for="Email"></label>
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
              <label for="Password"></label>
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

            <div className="check-box">
              <div>
                <input type="checkbox" />
                <label for="">Remember me</label>
              </div>
              <p>Forget Password?</p>
            </div>
            <button type="submit" className="btn btn-secondary btns">
              Login
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
