import "./TrendingSection.css";

import img3 from "../../../images/handbags.jpeg";
import img4 from "../../../images/watch.jpeg";
import img5 from "../../../images/sport-shoes.webp";

import Card from "../../../components/Cards/Card";

const TrendingSection = () => {
  return (
    <div className="trending-section">
      <Card title={"WATCHES"} img={img4} />
      <Card title={"SHOES"} img={img5} />
      <Card title={"HANDBAGS"} img={img3} />
    </div>
  );
};

export default TrendingSection;
