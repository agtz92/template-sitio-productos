import React from "react";
import "../../webflow_styles/symbols/landingsection.css";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import img from "../../images/2HFSTKr.jpg";

const LandingSection = ({ children }) => {
  return (
    <div className="darkmode landing-wrapper cc-store-home-wrap">
      <div className="intro-header">
      <StaticImage className="image-background" src="../../../public/assets/bckimg.jpg" alt="background image" />
        
        <div className="black-overlay"></div>
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

export default LandingSection;

export const pageQuery = graphql`
  query {
    allFile(filter: {name: {eq: "bckimg"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
  }
`;