import React, { useState } from "react";
import "./calc.css";

const Calculator = () => {
  const [data, setData] = useState({
    Addition: [0, 0],
    Subtract: [0, 0],
    Multiply: [0, 0],
    Divide: [0, 0],
    results: {
      addition: "",
      subtract: "",
      multiply: "",
      divide: "",
    },
  });

  const handleChange = (e, number, index) => {
    const newValues = { ...data };
    newValues[number][index] = e.target.value;
    setData(newValues);
  };

  const calculateResult = (a, b, operation) => {
    const operations = {
      Addition: (a, b) => a + b,
      Subtract: (a, b) => a - b,
      Multiply: (a, b) => a * b,
      Divide: (a, b) => (b === 0 ? 0 : a / b),
    };

    return operations[operation](a, b);
  };

  const handleCalculate = () => {
    const calculatedResults = {};
    Object.keys(data).forEach((number) => {
      if (Array.isArray(data[number])) {
        const [a, b] = data[number];
        calculatedResults[number] = calculateResult(
          Number(a),
          Number(b),
          number
        );
      }
    });
    setData((prevData) => ({ ...prevData, results: calculatedResults }));
  };

  return (
    <div className="calc-container">
      <h2>Basic Calculator</h2>
      <div className="calc-ineer-container">
        {Object.keys(data).map((number, i) => (
          <span className="calc-input" key={i}>
            {number}:
            {Array.isArray(data[number]) &&
              data[number].map((subNumber, index) => (
                <div style={{ margin: "1%" }} key={index}>
                  <input
                    type="text"
                    value={subNumber}
                    onChange={(e) => handleChange(e, number, index)}
                  />
                </div>
              ))}
            {/* <span style={{ padding: "1%" }}>=</span> */}
          </span>
        ))}
      </div>
      <button onClick={handleCalculate}>Calculate All</button>

      <div>
        {Object.keys(data.results).map((operation) => (
          <div key={operation}>
            {operation} = {data.results[operation]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
