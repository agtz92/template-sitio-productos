import React from "react";
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
        <a href="#" className="button-regular w-button bck-color1">
          Ver Más
        </a>
      </div>
    </div>
  );
};
export default ProductPreview;
