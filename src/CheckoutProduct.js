import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2e0af3250d349abb9c6ad7a0088d90c_9366/Ultraboost_22_Shoes_Red_GX5462_01_standard.jpg" alt="" className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">ULTRABOOST 22</p>
        <p className="checkoutProduct_price">
            <small>$</small>
            <strong>200</strong>
        </p>
        <button className="checkoutProduct_buy">Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
