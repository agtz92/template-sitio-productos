import React from "react";
import "../../webflow_styles/symbols/simplecard.css"

const SimpleCard = (props) => {
  return (
    <div className={`about-us-card bck-color-white ${props.margin ? "margin-right" : ""} ${props.darkmode ? " darkmode" : ""} ${props.darkmodetext ? " darkmode-text" : ""}`}>
      <div className="label-titles color1">{props.title}</div>
      <p className="paragraph-regular">
        {props.text}
      </p>
    </div>
  );
};
export default SimpleCard; 
