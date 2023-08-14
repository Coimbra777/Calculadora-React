import React from "react";
import "./Button.css";

const Button = (props) => {
  // Certifique-se de que a linha abaixo inclua o "return"
  return <button className="button">{props.label}</button>;
};

export default Button;
