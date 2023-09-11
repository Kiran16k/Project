import React from "react";
import "./Style.css";

const Footer = () => {
  return (
    <div className="Container1">
      <footer>
        <h3 className="footer-head">Contact Us</h3>
        <div className="footerContainer">
          <div className="foot-box" id="facebook-img">
            <h5 className="white"> FACEBOOK </h5>
          </div>
          <div className="foot-box" id="insta-img">
            <h5 className="white">INSTAGRAM </h5>
          </div>
          <div className="foot-box" id="Link-img">
            <h5 className="white">LINKEDIN </h5>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
