import React from "react";
import "../../webflow_styles/symbols/categorypreview.css";
import img from "../../images/Webp.net-resizeimage-min.jpg";

const CategoryPreview = (props) => {


  return (
    <div
      className="div-category-preview"
    >
      <img
        src="images/Webp.net-resizeimage-min.jpg"
        loading="lazy"
        sizes="100vw"
        srcset={img}
        alt=""
        className="image-2"
      />
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
