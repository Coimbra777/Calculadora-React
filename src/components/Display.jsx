import React from "react";
import "./Display.css";

const Display = (props) => {
  // Certifique-se de que a linha abaixo inclua o "return"
  return <div className="display">{props.value}</div>;
};

export default Display;
