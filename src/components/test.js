import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import "./test.css";

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleInput = (event) => {
    const inputValue = event.target.value;

    setInputValue(inputValue);
  };

  const handleAddNumber = () => {
    if (inputValue !== "") {
      setNumbers([...numbers, inputValue]);
      setInputValue("");
    } else {
      setNumbers([]);
    }
  };

  return (
    <div className="Main-Container-test">
      <div className="Inner-Container-test">
        <h6>To enter a String/Integer and display in child as props</h6>

        <h6> Enter a Vaild String/Integer Number</h6>
        <input type="text" value={inputValue} onChange={handleInput} />
        <br></br>
        <button onClick={handleAddNumber}>
          <span>ADD</span>
        </button>
        <ChildComponent numbers={numbers} />
      </div>
    </div>
  );
};

export default ParentComponent;
