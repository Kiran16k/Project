import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="cards">
      <div className="card-body">
        <div className="card-image">
          <img id="object1" src={props?.img} alt="logo"></img>
        </div>
        <div className="card-whole-content">
          <h2 className="card-title">
            <span className="yellow">{props?.title1}</span>
            {props?.title2}
          </h2>
          <div className="card-content">
            <p>{props?.para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
