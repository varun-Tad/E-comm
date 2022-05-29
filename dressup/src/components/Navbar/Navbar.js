import React, { useContext } from "react";
import "./Navbar.css";

import { Logo, PrimaryNavbutton, Searchbar, Navicons } from "./index";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    // await signOutUser();
    // setCurrentUser(null);
    console.log("signed out");
  };

  return (
    <div className="main-navbar">
      <div className="left-nav">
        <Logo></Logo>
      </div>
      <div className="right-nav">
        {/* <PrimaryNavbutton text={"Sign in"}></PrimaryNavbutton> */}

        {currentUser ? (
          <button onClick={signOutUser}>Sign Out</button>
        ) : (
          <Link to="/Login">
            <button>Sign in</button>
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
