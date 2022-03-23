import "./PrimaryNavbutton.css";

const PrimaryNavbutton = ({ text }) => {
  return (
    <div>
      <button type="button" className="btn btn-secondary btns sign-in-btn">
        {text}
      </button>
    </div>
  );
};

export default PrimaryNavbutton;
