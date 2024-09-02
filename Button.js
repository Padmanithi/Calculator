import React from "react";
import "./Button.css";

const Button = ({ value, handleClick }) => {
  const isOperator = ["+", "-", "*", "/", "="].includes(value);
  const isACorPercent = value === "AC" || value === "%" || value === "±";
  const isDelete = value === "DEL";

  let buttonClassName = "button";
  if (isOperator) {
    buttonClassName += " operator";
  } else if (isACorPercent) {
    buttonClassName += " special";
  } else if (isDelete) {
    buttonClassName += " delete";
  }

  if (value === "0") {
    buttonClassName += " zero";
  }

  return (
    <button className={buttonClassName} onClick={() => handleClick(value)}>
      {value}
    </button>
  );
};

export default Button;
