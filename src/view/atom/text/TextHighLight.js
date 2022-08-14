import React from "react";
import "./TextHighLight.scss";

const TextHighLight = (props) => {
  const { text } = props || {};
  return <span className="text-high-light">{text}</span>;
};

export default TextHighLight;
