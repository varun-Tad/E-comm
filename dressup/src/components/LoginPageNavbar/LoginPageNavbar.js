import { Logo, Searchbar, Navicons } from "../Navbar/index";
import { UserContext } from "../../contexts/user.context";
import React, { useContext } from "react";
const LoginPageNavbar = () => {
  // const { currentUser } = useContext(UserContext);
  // console.log("currentUser", currentUser);

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
};

export default LoginPageNavbar;
