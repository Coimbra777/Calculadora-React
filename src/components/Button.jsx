import React from "react";
import "./Button.css";

const Button = (props) => {
  // let classes = "button";
  // classes += props.operation ? "operation" : "";
  // classes += props.double ? "double" : "";
  // classes += props.triple ? "triple" : "";
  const buttonClasses = `button
  ${props.operation ? "operation" : ""}
  ${props.double ? "double" : ""}
  ${props.triple ? "triple" : ""}`;

  return (
    <button
      onClick={() => {
        return props.click(props.label);
      }}
      className={buttonClasses}
    >
      {props.label}
    </button>
  );
};

export default Button;
