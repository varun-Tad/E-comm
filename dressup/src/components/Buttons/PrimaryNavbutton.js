import "./PrimaryNavbutton.css";

function PrimaryNavbutton(props) {
  return (
    <div>
      <button type="button" className="btn btn-secondary btns sign-in-btn">
        {props.text}
      </button>
    </div>
  );
}

export default PrimaryNavbutton;
