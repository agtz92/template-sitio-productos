import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import "../../webflow_styles/symbols/productpreview.css"
import img from "../../images/dummyimage.jpg";

const ProductPreview = (props) => {
  return (
    <div className="div-shadow">
      <div className="cards-image-mask">
      <GatsbyImage className="cards-image" image={props.image} alt={props.alt} />
      
      </div>
      <div className="div-product-description">
        <h1 className="text-big">{props.title}</h1>
        <div className="label-prices color2">
          {props.price}
        </div>
        <p className="paragraph-regular">
          {props.text}
        </p>
        <Link to={props.link} className="button-regular w-button bck-color1">
          Ver Más
        </Link>
      </div>
    </div>
  );
};
export default ProductPreview;

