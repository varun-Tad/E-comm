import React from "react";
import "./Navbar.css";

import { Logo, PrimaryNavbutton, Searchbar, Navicons } from "./index";

function Navbar() {
  return (
    <div className="main-navbar">
      <div className="left-nav">
        <Logo></Logo>
      </div>
      <div className="right-nav">
        <PrimaryNavbutton text={"Sign in"}></PrimaryNavbutton>

        <div className="basic-input-textboxes">
          <Searchbar></Searchbar>
        </div>
        <Navicons></Navicons>
      </div>
    </div>
  );
}

export default Navbar;
