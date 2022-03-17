import React from "react";
import { Link} from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "../../webflow_styles/symbols/productpreview.css"

const ProductPreview = (props) => {
  return (
    <div className="div-shadow" key={props.key}>
      <GatsbyImage image={props.img} alt={props.alt} />
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

