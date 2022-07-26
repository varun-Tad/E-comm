import React from "react";
import { Logo, Navicons } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();
  const signOutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("tokens");
    navigate("/");

    toast.success("Logout successful", {
      autoClose: 3000,
    });
  };

  return (
    <div className="main-navbar">
      <div className="left-nav">
        <Logo></Logo>
      </div>
      <div className="right-nav">
        {localStorage.getItem("tokens") ? (
          <button className="sign-btn" onClick={signOutHandler}>
            Sign Out
          </button>
        ) : (
          <Link to="/Login">
            <button className="sign-btn">Sign In</button>
          </Link>
        )}
        <div className="basic-input-textboxes"></div>
        <Navicons></Navicons>
      </div>
    </div>
  );
};

export default Navbar;
