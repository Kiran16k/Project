import React from "react";

const Card2 = (props) => {
  return (
    <div className="Card2-cont">
      <div className="Card2-text">
        <h3>{props.text}</h3>
        <div className="Card-main-img">
          <img id="img-obj" src={props.img} alt=""></img>
        </div>
      </div>
      <div className="Card2-content">
        <div className="Card2-head">
          <span style={{ color: "gold" }}>{props.title1}</span>
          {props.title2}
        </div>
        <div className="Card2-para">
          <div className="Card2-para-inner-div">{props.para}</div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
