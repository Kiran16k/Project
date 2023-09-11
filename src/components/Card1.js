import React from "react";
import "./card1.css";

const Card1 = (props) => {
  return (
    <div className="card1-cont">
      <div className="card1-body">
        <div className="image-content">
          <img src={props.img} alt=""></img>
          <h4 id="Head">{props.title2}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card1;
