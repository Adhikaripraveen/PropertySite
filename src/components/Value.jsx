import react from "react";
import Accordian from "./Accordian";

const Value = () => {
  return (
    <>
      <div className="value-section" id="value">
        <p className="heading">Our Value</p>
        <p className="sub-heading  ">Value We Give to You</p>
        <p className="text">
          We always ready to help by providing the best services for you .We
          believe a good blace to live can make your life better.
        </p>
        <div className="value-content">
          <div className="value-img">
            <img src="./images/value.png" alt="image" />
          </div>
          <div className="A-wrapper">
            <Accordian />
          </div>
        </div>
      </div>
    </>
  );
};
export default Value;
