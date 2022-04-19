import React from "react";
import { StaticImage} from "gatsby-plugin-image";
//dedicated css
import "../../webflow_styles/symbols/cards.css";


const Cards = (props) => {
  return (
    <div className={`div-cards white padding ${props.spacing ? "spacing" : ""} ${props.margin ? " margin-bottom" : ""} ${props.black ? " black" : ""} ${props.transparent ? " transparent" : ""} ${props.darkmode ? " darkmode" : ""} ${props.darkmodetext ? " darkmode-text" : ""}`}>
      
      {props.image ? <div className="div-number-circle"><StaticImage image={props.image} alt={props.alt} /></div> : ""}
      
      <div className="cards-title color1">
        {props.title}
      </div>
      <div className="label-titles color3">{props.subtitle}</div>
      <p className="paragraph-regular margin">
        {props.text}
      </p>
    </div>
  );
};
export default Cards;
