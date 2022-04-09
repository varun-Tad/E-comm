import React from "react";
import "./ProductsPage.css";

import {
  Navbar,
  ProdListingPage,
  FilterSection,
  Footer,
} from "../ProductsPage/index";

function ProductsPage() {
  return (
    <div className="productPageBody">
      <Navbar />

      <section className="prod-land">
        <FilterSection />
        <ProdListingPage />
      </section>
      <div className="footer-sectio">
        <Footer />
      </div>
    </div>
  );
}

export default ProductsPage;
