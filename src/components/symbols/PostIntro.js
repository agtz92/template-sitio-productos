import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import "../../webflow_styles/symbols/postintro.css"
import Container from "../wrappers/Container"

const PostIntro = (props) => {
  return (
    <Container>
      <React.Fragment>
        <GatsbyImage image={props.image} alt={props.alt} className="image" />
        <p className="paragraph">{props.text}</p>
      </React.Fragment>
    </Container>
  );
};

export default PostIntro;
