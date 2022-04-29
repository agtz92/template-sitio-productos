import React from "react";
//dedicated css
import "../../webflow_styles/symbols/featurecard.css";
import { StaticImage } from "gatsby-plugin-image";
import SimpleCard from "./SimpleCard";

const FeatureCard = (props) => {
  return (
    <section id="feature-section" className="abotus ">
      <div
        className={`flex-container-2 w-container ${
          props.darkmode ? " darkmode" : ""
        } ${props.darkmodetext ? " darkmode-text" : ""}`}
      >
        <div className="feature-image-mask-2">
          <div className="decor-image bck-color1"></div>
          <div className="feature-image-2">
            <StaticImage
              placeholder="blurred"
              aspectRatio={.8}
              src="../../images/gym_mats.jpg"
              alt="MatMarkt"
            />
          </div>
        </div>
        <div className="about-us-top">
          <div className="label-titles color2">{props.title}</div>
          <h2 className="text-big bigger">{props.bigtitle}</h2>
          <p className="paragraph-regular">{props.text}</p>
          <div className="about-us-bottom">
            <SimpleCard
              title={props.card1Title}
              text={props.card1Text}
              margin
            />
            <SimpleCard title={props.card2Title} text={props.card2Text} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeatureCard;
