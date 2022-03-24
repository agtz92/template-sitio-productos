import React from "react";
import "../../webflow_styles/wrappers/container.css";

const Container = (props) => {
  return <div className={`container-component w-container ${props.padding ? "padding" : ""} ${props.margin ? " margin-container" : ""}`}>{props.content}</div>;
};

export default Container;
