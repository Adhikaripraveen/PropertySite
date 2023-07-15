import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="about">
          <img src="./images/logo.jpg" alt="logo" />
          <p>Our vision to make all people the best place to live them.</p>
        </div>
        <div className="information">
          <h1>Information</h1>
          <p>C-604 Shaheed Marg,New Delhi,India</p>
          <div className="footer-links">
            <a href="#residence">Property</a>
            <a href="#value">Services</a>
            <a href="#residence">Product</a>
            <a href="#contact">About Us</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
