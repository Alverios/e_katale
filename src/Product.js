import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price}) {

  const [{},dispatch] = useStateValue();
 

  const addToCart = () => {
    dispatch({
      type:"ADD_TO_CART",
      item: {
        id:id,
        title:title,
        image:image,
        price:price
      }
    })
  };



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
        <button className="add_to_cart" onClick={addToCart}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
