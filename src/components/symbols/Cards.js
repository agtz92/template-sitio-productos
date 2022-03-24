import React from "react";
import { GatsbyImage} from "gatsby-plugin-image";
//dedicated css
import "../../webflow_styles/symbols/cards.css";

import img from "../../images/Webp.net-resizeimage-min.jpg";

const Cards = (props) => {
  return (
    <div className={`div-cards white padding ${props.margin ? "margin-bottom" : ""} ${props.black ? " black" : ""} ${props.transparent ? " transparent" : ""}`}>
      
      {props.image ? <div className="div-number-circle"><GatsbyImage image={props.image} alt={props.alt} /></div> : ""}
      
      <div className="cards-title color1">
        {props.title}
      </div>
      <div className="label-titles color2">{props.subtitle}</div>
      <p className="paragraph-regular margin">
        {props.text}
      </p>
    </div>
  );
};
export default Cards;
