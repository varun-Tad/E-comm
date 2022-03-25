import React from "react";
import "./Homepage.css";
import {
  Navbar,
  Categories,
  HeroSection,
  TrendingSection,
  Topbrandssection,
  Footer,
} from "../Homepage/index";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <HeroSection />
      <h1 class="trend-heading">Trending</h1>
      <TrendingSection />
      <h1 class="brand-heading">Explore Top Brands</h1>
      <Topbrandssection />
      <div className="footer-sec">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
