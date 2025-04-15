import React from "react";
import products from "../Products";

function Description() {
  return (
    <h2 style={{ textTransform: "capitalize" }}>{products.description}</h2>
  );
}

export default Description;
