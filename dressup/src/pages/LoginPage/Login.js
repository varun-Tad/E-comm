import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPageNavbar from "../../components/LoginPageNavbar/LoginPageNavbar";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
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

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();

      // const userDocRef = await createUserDocumentFromAuth(user);
      await createUserDocumentFromAuth(user);
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
      console.log("signed in ");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <LoginPageNavbar />
      <div className="main-containers">
        <div className="login-containers">
          <form className="forms" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="google-texts" onClick={signInWithGoogle}>
              <img
                src="https://img.icons8.com/color/24/000000/google-logo.png"
                alt="google-icon"
              />
              <span>Sign in with Google</span>
            </div>
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
