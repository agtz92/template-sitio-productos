import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../../webflow_styles/symbols/categorypreview.css";
import img from "../../images/Webp.net-resizeimage-min.jpg";

const CategoryPreview = (props) => {


  return (
    <div
      className="div-category-preview"
    >
      <GatsbyImage image={props.image} alt={props.alt} />
      <div className="div-category-title-wrapper">
        <h1 className="text-big white">{props.title}</h1>
        <a href="#" className="button-regular w-button bck-color1">
          Button Text
        </a>
      </div>
    </div>
  );
};

export default CategoryPreview;
