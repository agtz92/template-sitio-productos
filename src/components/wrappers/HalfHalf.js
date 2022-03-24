import React from "react";
import "../../webflow_styles/wrappers/halfhalf.css"

const HalfHalf = (props) => {
  return (
    <div className="_5050wrapper">
      <div className="_5050div">{props.left}</div>
      <div className="_5050div">{props.right}</div>
    </div>
  );
};

export default HalfHalf;
