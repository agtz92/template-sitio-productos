import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link} from "gatsby"
import "../../webflow_styles/symbols/categorypreview.css";

import kebabCase from "lodash/kebabCase"

const CategoryPreview = (props) => {


  return (
    <div
      className="div-category-preview"
    >
      <GatsbyImage image={props.image} alt={props.alt} />
      <div className="div-category-title-wrapper">
        <h1 className="text-big white">{props.title}</h1>
        <Link className="button-regular w-button bck-color1" to={`/categories/${kebabCase(props.title)}/`}>Ir</Link>
      </div>
    </div>
  );
};

export default CategoryPreview;
