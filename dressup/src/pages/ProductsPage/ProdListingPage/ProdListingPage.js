import "./ProdListingPage.css";
import ProdListingCard from "../../../components/Cards/ProdListingCard";
import { ProductsPageData } from "../ProductsPage.data";

const ProdListingPage = () => {
  return (
    <div className="card-vessel">
      {ProductsPageData.map((item) => {
        return <ProdListingCard prodData={item}></ProdListingCard>;
      })}
    </div>
  );
};

export default ProdListingPage;
