import React from "react";
import "../../webflow_styles/symbols/landingsection.css";
import { StaticImage } from "gatsby-plugin-image"

const LandingSection = ({ children }) => {
  return (
    <div className="landing-wrapper cc-store-home-wrap">
      <div className="intro-header">
      <StaticImage className="image-background" src="../../images/bckimg.jpg" alt="background image" />
        
        <div className="black-overlay"></div>
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

export default LandingSection;

