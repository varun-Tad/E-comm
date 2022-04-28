import React from "react";
import { Link } from "react-router-dom";
import LoginPageNavbar from "../../components/LoginPageNavbar/LoginPageNavbar";
import "./Login.css";

function Login() {
  return (
    <div>
      <LoginPageNavbar />
      <div className="main-containers">
        <div className="login-containers">
          <form className="forms">
            <h2>Login</h2>
            <div className="google-texts">
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
                <label for="">Remember me</label>
              </div>
              <p>Forget Password?</p>
            </div>
            <button type="button" className="btn btn-secondary btns">
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
}

export default Login;
