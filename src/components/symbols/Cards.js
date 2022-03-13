import React from "react";
//dedicated css
import "../../webflow_styles/symbols/cards.css";

import img from "../../images/Webp.net-resizeimage-min.jpg";

const Cards = (props) => {
  return (
    <div className={`div-cards white padding ${props.margin ? "margin-bottom" : ""}`}>
      <div className="div-number-circle">
        <img srcSet={props.img} loading="lazy" alt="whoweare_socal" />
      </div>
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
