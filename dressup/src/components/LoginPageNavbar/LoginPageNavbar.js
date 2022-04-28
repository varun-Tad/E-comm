import { Logo, Searchbar, Navicons } from "../Navbar/index";
import React from "react";
function LoginPageNavbar() {
  return (
    <div className="main-navbar">
      <div className="left-nav">
        <Logo></Logo>
      </div>
      <div className="right-nav">
        <div className="basic-input-textboxes">
          <Searchbar></Searchbar>
        </div>
        <Navicons></Navicons>
      </div>
    </div>
  );
}

export default LoginPageNavbar;
