import React from "react";
import "../../webflow_styles/wrappers/div5050.css"

const Div5050 = (props) => {
  return (
    <div className={`div-5050-holder ${props.noPaddingSide ? "nopaddingside" : "padding"}`}>
      <div className="div-5050">{props.left}</div>
      <div className="div-5050">{props.right}</div>
    </div>
  );
};

export default Div5050;
