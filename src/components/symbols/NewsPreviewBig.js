import React from "react"
import img from "../../images/Webp.net-resizeimage-min.jpg"
import "../../webflow_styles/symbols/newspreviewbig.css"

const NewsPreviewBig = (props) =>{
return(
    
  <a href="#" className="article-thumbs w-inline-block">
  <div className="div-article-thumbs-text">
    <h1 className="h1-title color1">{props.title}</h1>
    <div className="category-tag color2">{props.categ}</div>
    <p className="small-description">{props.text}</p>
    <div className="date-author">{props.date}</div>
  </div>
  <div className="div-article-thumbs-img"><img srcSet={img} loading="lazy" width="447px" sizes="(max-width: 479px) 100vw, 447px"  alt={props.alt}/></div>
</a>

);
}
export default NewsPreviewBig;