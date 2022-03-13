import React from "react";
import { Link } from "gatsby"
import "../../webflow_styles/symbols/productpreview.css"
import img from "../../images/Webp.net-resizeimage-min.jpg";

const ProductPreview = (props) => {
  return (
    <div className="div-shadow">
      <div className="cards-image-mask">
        <img
          srcSet={img}
          loading="lazy"
          sizes="100vw"
          alt=""
          className="cards-image"
        />
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
