import React from "react";
import "./Product.css";

function Product({id, title, image, price}) {
  return (
    <div className="product">
      <img
        src={image}
        alt="product"
      />
      <div className="product_info">
        <div className="product_info_row">
          <p>{title}</p>
          <p className="price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
        </div>
        <button className="add_to_cart">Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
