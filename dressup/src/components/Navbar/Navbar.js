import React, { useContext } from "react";
import "./Navbar.css";

import { Logo, Searchbar, Navicons } from "./index";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();

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
        {currentUser ? (
          <button className="sign-btn" onClick={signOutHandler}>
            Sign Out
          </button>
        ) : (
          <Link to="/Login">
            <button className="sign-btn">Sign In</button>
          </Link>
        )}

        <div className="basic-input-textboxes">
          <Searchbar></Searchbar>
        </div>
        <Navicons></Navicons>
      </div>
    </div>
  );
};

export default Navbar;
