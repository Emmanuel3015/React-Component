import React from "react";
import products from "../Products";

function Image() {
  return (
    <img
      src={products.imageUrl}
      alt={products.name}
      style={{ width: "100%", height: "auto", marginBottom: "15px" }}
    />
  );
}

export default Image;
