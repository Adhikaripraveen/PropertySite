import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  //
  return (
    <div className="h-wrapper">
      <div className="h-container">
        <img src="./images/logo.jpg" alt="logo" />

        <div className="links">
          <a href="#residence">Residence</a>
          <a href="#value">Our Values</a>
          <a href="#contact">Contact us</a>
          <a href="#start-section">Get Started</a>
        </div>
        <div className="menu ">
          <MenuIcon
            onClick={toggle}
            style={{ color: "white", fontSize: "6rem" }}
          />
        </div>
      </div>
      {show && (
        <div className="menu-content ">
          <div className="menu-links">
            <a href="#residence">Residencies</a>
            <a href="#value">Our Values</a>
            <a href="#contact">Contact us</a>
            <a href="#start-section">Get Started</a>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
