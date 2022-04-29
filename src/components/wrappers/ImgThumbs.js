import React from "react";

const ImgThumbs = (props) => {
  return (
    <div
      style={{
        width: "100px",
        paddingTop: "10px",
        paddingRight: "10px",
      }}
    >
      {props.children}
    </div>
  );
};

export default ImgThumbs;
