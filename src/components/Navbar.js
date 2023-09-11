import React from "react";
import "./Style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navigationbar">
      <div className="inputbox">
        <h4>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            HOME
          </NavLink>
        </h4>
      </div>
      <div className="inputbox">
        <h4>
          <NavLink to="/Startup" style={{ textDecoration: "none" }}>
            <span className="yellow"> Start</span>ups
          </NavLink>
        </h4>
      </div>
      <div className="inputbox">
        <h4>
          <NavLink to="/Metaverse" style={{ textDecoration: "none" }}>
            <span className="yellow">Metaverse</span> stack
          </NavLink>
        </h4>
      </div>
      <div className="inputbox">
        <h4>
          <NavLink to="/Building" style={{ textDecoration: "none" }}>
            <span className="yellow">Building</span> with crew
          </NavLink>
        </h4>
      </div>

      <div className="inputbox">
        <h4>
          <NavLink to="/ParentComponent" style={{ textDecoration: "none" }}>
            ADD
          </NavLink>
        </h4>
      </div>
      <div className="inputbox">
        <h4>
          <NavLink to="/Assign" style={{ textDecoration: "none" }}>
            Calculator
          </NavLink>
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
