import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://cdn.dribbble.com/users/2893989/screenshots/15487629/media/b8384ec4c509bb6f0034e7934da01947.png"
          alt=""
          className="home_image"
        />
      </div>
      <div className="home_row">
        <Product
          id="12345678"
          title="ADIDAS R1"
          price={170}
          image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3b3fe645626949d38b3dad4901167df9_9366/NMD_R1_Shoes_Black_GV8422_01_standard.jpg"
        />
        <Product
          id="12468910"
          title="ULTRABOOST WEB DNA"
          price={190}
          image="  https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/51cdf085d8a54001ad52ad430109228e_9366/Ultraboost_Web_DNA_Shoes_Black_GY4173_01_standard.jpg"
        />
        <Product
          id="12986524"
          title="ULTRABOOST CLIMACOOL"
          price={180}
          image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/227646f91bed4a598924ae37012df828_9366/Ultraboost_Climacool_2_DNA_Shoes_Blue_GZ0441_01_standard.jpg"
        />
      </div>
      <div className="home_row">
      <Product
          id="12023784"
          title="LITE RACER ADAPT"
          price={46}
          image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c364111c408340e3a73fade900fcb92e_9366/Lite_Racer_Adapt_3.0_Shoes_White_GY8580_01_standard.jpg"
        />
        <Product
          id="12468910"
          title="ULTRABOOST MULTIX"
          price={80}
          image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b26af1889156457e9654adec012584a8_9366/Multix_Shoes_Brown_GY9642_01_standard.jpg"
        />
        <Product
          id="87654321"
          title="TERREX SKYCHASER GORE-TEX"
          price={160}
          image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdfbb7ce380145e8b418adda00c42d20_9366/Terrex_Skychaser_GORE-TEX_2.0_Hiking_Shoes_Grey_GZ0320_01_standard.jpg"
        />
      </div>
      
      <div className="home_row">
      <Product
          id="56382763"
          title="PREDATOR FREAK"
          price={200}
          image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e4d6e938854444d9bfd5acc2010d8303_9366/Predator_Freak.1_Firm_Ground_Cleats_Red_FY6266_01_standard.jpg"
        />
        <Product
          id="86755342"
          title="GAMEMODE KNIT"
          price={60}
          image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1625731194f74e64b899ad4a0104fc43_9366/Gamemode_Knit_Firm-Ground_Cleats_Black_G57878_01_standard.jpg"
        />
        <Product
          id="28730497"
          title="ULTRABOOST 22"
          price={190}
          image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2e0af3250d349abb9c6ad7a0088d90c_9366/Ultraboost_22_Shoes_Red_GX5462_01_standard.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
