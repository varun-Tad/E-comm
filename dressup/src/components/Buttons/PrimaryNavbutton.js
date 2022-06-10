import "./PrimaryNavbutton.css";
import { Link } from "react-router-dom";
import React from "react";

const PrimaryNavbutton = ({ text }) => {
  return (
    <div>
      <button type="button" className="btn btn-secondary btns sign-in-btn">
        <Link className="btnLink" to="/Login">
          {text}
        </Link>
      </button>
    </div>
  );
};

export default PrimaryNavbutton;
