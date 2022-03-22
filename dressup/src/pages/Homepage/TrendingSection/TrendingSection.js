import "./TrendingSection.css";
import { PrimaryNavbutton } from "../../../components/Navbar";
import img3 from "../../../images/handbags.jpeg";
import img4 from "../../../images/watch.jpeg";
import img5 from "../../../images/sport-shoes.webp";

function TrendingSection() {
  return (
    <div className="trending-section">
      <div className="card">
        <div className="image-container">
          <img class="image" src={img4} alt="apparel"></img>
        </div>
        <p>WATCHES</p>
        <div class="link-container">
          <PrimaryNavbutton text={"Buy now"}></PrimaryNavbutton>
          <PrimaryNavbutton text={"Bookmark"}></PrimaryNavbutton>
        </div>
      </div>

      <div className="card">
        <div className="image-container">
          <img class="image" src={img5} alt="apparel"></img>
        </div>
        <p>SHOES</p>
        <div class="link-container">
          <PrimaryNavbutton text={"Buy now"}></PrimaryNavbutton>
          <PrimaryNavbutton text={"Bookmark"}></PrimaryNavbutton>
        </div>
      </div>

      <div className="card">
        <div className="image-container">
          <img class="image" src={img3} alt="apparel"></img>
        </div>
        <p>HANDBAGS</p>
        <div class="link-container">
          <PrimaryNavbutton text={"Buy now"}></PrimaryNavbutton>
          <PrimaryNavbutton text={"Bookmark"}></PrimaryNavbutton>
        </div>
      </div>
    </div>
  );
}

export default TrendingSection;
