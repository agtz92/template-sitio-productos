import React from "react";
import "../../webflow_styles/symbols/heading.css"

const Heading = (props) => {
  if (props.h1) {
    return <h1 className={`${props.alignment} ${" "} ${props.color} ${" "} ${props.extraclass} ${" "} ${props.size}`}>{props.children}</h1>;
  }
  if (props.h2) {
    return <h2 className={`${props.alignment} ${" "} ${props.color} ${" "} ${props.extraclass} ${" "} ${props.size}`}>{props.children}</h2>;
  }
  if (props.h3) {
    return <h3 className={`${props.alignment} ${" "} ${props.color} ${" "} ${props.extraclass} ${" "} ${props.size}`}>{props.children}</h3>;
  }
  if (props.h4) {
    return <h4 className={`${props.alignment} ${" "} ${props.color} ${" "} ${props.extraclass} ${" "} ${props.size}`}>{props.children}</h4>;
  }
};

export default Heading;
