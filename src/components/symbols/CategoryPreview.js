import React from "react";
import { GatsbyImage} from "gatsby-plugin-image";
import { Link} from "gatsby"
import "../../webflow_styles/symbols/categorypreview.css";

import kebabCase from "lodash/kebabCase"
import Heading from "./Heading";

const CategoryPreview = (props) => {


  return (
    <div
      className="div-category-preview"
    >
      <GatsbyImage image={props.image} alt={props.alt} />
      <div className="div-category-title-wrapper">
        <Heading h2 alignment="center" color={props.color} extraclass="text-big">{props.title}</Heading>
        <Link className="button-regular w-button bck-color1" to={`/categories/${kebabCase(props.title)}/`}>Ver Todos Los Productos</Link>
      </div>
    </div>
  );
};

export default CategoryPreview;
