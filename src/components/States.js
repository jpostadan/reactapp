import React from "react";
import { useState } from "react";

const States = () => {
  const [calc, setCalc] = useState(0);
  const add = () => {
    setCalc(calc + 1);
  };
  const sub = () => {
    setCalc(calc - 1);
  };
  return (
    <div className="calc">
      <h2 className="result">{calc}</h2>
      <button className="button" onClick={add}>
        Increment
      </button>
      <button className="button" onClick={sub}>
        Decrement
      </button>
    </div>
  );
};

export default States;
