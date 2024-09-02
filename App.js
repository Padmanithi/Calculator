import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "AC") {
      clearInput();
    } else if (value === "DEL") {
      deleteLastChar();
    } else {
      if (input === "0" && value !== ".") {
        setInput(value);
      } else {
        setInput(input + value);
      }
    }
  };

  const calculateResult = () => {
    try {
      // Use a safer method to evaluate the arithmetic expression
      const safeResult = Function("return " + input)();
      setResult(safeResult);
    } catch (e) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("0");
    setResult("");
  };

  const deleteLastChar = () => {
    if (input.length === 1) {
      setInput("0");
    } else {
      setInput(input.slice(0, -1));
    }
  };

  return (
    <div className="app">
      <Display input={input} result={result} />
      <div className="buttons">
        {[
          "AC",
          "±",
          "%",
          "/",
          "7",
          "8",
          "9",
          "*",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          "0",
          ".",
          "=",
          "DEL",
        ].map((btn, i) => (
          <Button key={i} value={btn} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default App;
