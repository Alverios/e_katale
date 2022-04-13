import React from "react";
import "./CheckoutProduct.css";
// import {useStateValue} from "./StateProvider"

function CheckoutProduct({ id, image, title, price }) {
  // const [dispatch] = useStateValue();

  return (
    <div className="checkoutProduct">
     
      <img src={image} alt="" className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        
        <button className="checkoutProduct_buy">Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
