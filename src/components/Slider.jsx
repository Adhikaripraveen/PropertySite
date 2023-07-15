import react from "react";
import Card from "./Card";

const Slider = () => {
  return (
    <>
      <div className="slider">
        <Card />
        <div className="icon" name="left">
          &lt;
        </div>
        <div className="icon" name="right">
          &gt;
        </div>
      </div>
    </>
  );
};

export default Slider;
