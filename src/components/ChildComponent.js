import React from "react";

const ChildComponent = ({ numbers }) => {
  return (
    <div>
      {numbers.map((number, index) => (
        <p style={{ color: "whitesmoke" }} key={index}>
          {number}
        </p>
      ))}
    </div>
  );
};

export default ChildComponent;
