import PrimaryNavbutton from "../Buttons/PrimaryNavbutton";
import "./Card.css";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="image-container">
          <img className="image" src={props.img} alt="apparel"></img>
        </div>
        <p>{props.title}</p>
        <div class="link-container">
          <PrimaryNavbutton text={"Buy now"}></PrimaryNavbutton>
          <PrimaryNavbutton text={"Bookmark"}></PrimaryNavbutton>
        </div>
      </div>
    </div>
  );
}

export default Card;
