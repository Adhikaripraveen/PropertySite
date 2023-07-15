import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CountUp from "react-countup";

const Main = () => {
  return (
    <div className="M-wrapper">
      <div className="content-section">
        <p className="m-heading">Discover Most Suitable Property</p>
        <p className="m-sub-heading">
          Find a variety of properties that suit you very easily ,forget the
          difficulties in finding a residence for you
        </p>
        <div className="search">
          <LocationOnIcon style={{ color: "blue", fontSize: "3rem" }} />
          <input type="text" placeholder="Search by location" />
          <button className="button">Search</button>
        </div>
        <div className="number">
          <div>
            <CountUp end={8000} />
            <span>+</span>
            <p>Premium Products</p>
          </div>
          <div>
            <CountUp end={2000} />
            <span>+</span>
            <p>Happy Coustomer</p>
          </div>
          <div>
            <CountUp end={28} />
            <span>+</span>
            <p>Award Winning</p>
          </div>
        </div>
      </div>
      <div className="img-section">
        <img src="./images/hero-image.png" alt="image of house" />
      </div>
    </div>
  );
};
export default Main;
