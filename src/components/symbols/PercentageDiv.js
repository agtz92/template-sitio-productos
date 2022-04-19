import React from "react";
import "../../webflow_styles/symbols/percentagediv.css";

const PercentageDiv = (props) => {
  const paddingleft = props.paddingleft;
  const paddingright = props.paddingright;
  const paddingtop = props.paddingtop;
  const paddingbottom = props.paddingbottom;
  const percent = props.percent;
  const backgroundimage = props.backgroundimage;
  return (
    <div
      className="percentagediv"
      style={{
        paddingLeft: paddingleft + "px",
        paddingRight: paddingright + "px",
        paddingTop: paddingtop + "px",
        paddingBottom: paddingbottom + "px",
        width: percent + "%",
        backgroundImage : `url(${backgroundimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
        
      }}
    >
      {props.children}
    </div>
  );
};

export default PercentageDiv;
