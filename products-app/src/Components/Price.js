import React from "react";
import products from "../Products";

function Price() {
  return (
    <p>
      <strong>Price:</strong>
      {products.price}
    </p>
  );
}

export default Price;
