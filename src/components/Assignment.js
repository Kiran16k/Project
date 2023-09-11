import React, { useState } from "react";
import CalcChild from "./CalcChild";
import "./Assignment.css";

const Assignment = () => {
  const [val1, setval1] = useState("");
  const [val2, setval2] = useState("");
  const [val3, setval3] = useState("");
  const [val4, setval4] = useState("");
  const [val5, setval5] = useState("");
  const [val6, setval6] = useState("");
  const [val7, setval7] = useState("");
  const [val8, setval8] = useState("");
  const [result, setResult] = useState({
    addition: "",
    subtract: "",
    multiply: "",
    divide: "",
  });
  const handleNumberChange = (e, stateSetter) => {
    stateSetter(Number(e.target.value));
  };
  const handleOnClick = () => {
    setResult({
      ...result,
      addition: val1 + val2 || 0,
      subtract: val3 - val4 || 0,
      multiply: val5 * val6 || 0,
      divide: val7 / val8 || 0,
    });
  };
  return (
    <div className="main-calc">
      <h3 style={{ fontSize: "50px" }}>Basic Calculator</h3>
      <div className="inner-calc">
        <div className="input-calc">
          <CalcChild
            val1={val1}
            val1Change={(e) => handleNumberChange(e, setval1)}
            val2={val2}
            val2Change={(e) => handleNumberChange(e, setval2)}
            operator="+"
          />
          <p className="result-font">{result.addition}</p>
        </div>
        <div className="input-calc">
          <CalcChild
            val1={val3}
            val1Change={(e) => handleNumberChange(e, setval3)}
            val2={val4}
            val2Change={(e) => handleNumberChange(e, setval4)}
            operator="-"
          />
          <p className="result-font">{result.subtract}</p>
        </div>
        <div className="input-calc">
          <CalcChild
            val1={val5}
            val1Change={(e) => handleNumberChange(e, setval5)}
            val2={val6}
            val2Change={(e) => handleNumberChange(e, setval6)}
            operator="*"
          />
          <p className="result-font">{result.multiply}</p>
        </div>
        <div className="input-calc">
          <CalcChild
            val1={val7}
            val1Change={(e) => handleNumberChange(e, setval7)}
            val2={val8}
            val2Change={(e) => handleNumberChange(e, setval8)}
            operator="/"
          />
          <p className="result-font"> {result.divide}</p>
        </div>
        <span className="calculater-result"></span>
      </div>
      <button className="calculater-btn" onClick={handleOnClick}>
        Calculate
      </button>
    </div>
  );
};
export default Assignment;
