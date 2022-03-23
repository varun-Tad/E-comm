import React from "react";
import "./Homepage.css";
import {
  Navbar,
  Categories,
  HeroSection,
  TrendingSection,
  Topbrandssection,
  Footer,
} from "./index";

function Homepage() {
  return (
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <HeroSection></HeroSection>
      <h1 class="trend-heading">Trending</h1>
      <TrendingSection></TrendingSection>
      <h1 class="brand-heading">Explore Top Brands</h1>
      <Topbrandssection></Topbrandssection>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
