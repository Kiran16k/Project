import React from "react";
import "./Assignment.css";
const CalcChild = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <input
        className="calc-input"
        value={props.val1}
        onChange={props.val1Change}
      />
      <span style={{ fontSize: "26px", margin: "10px", width: "15px" }}>
        {props.operator}
      </span>
      <input
        className="calc-input"
        value={props.val2}
        onChange={props.val2Change}
      />
      <span style={{ fontSize: "20px", margin: "10px", width: "15px" }}>=</span>
    </div>
  );
};

export default CalcChild;
