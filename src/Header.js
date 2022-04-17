import React from "react";
import "./Header.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{cart}] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <StorefrontIcon
            className="header_logoImage"
            fontSize="large"
          ></StorefrontIcon>
          <h2 className="header_logoTitle">e-Katale</h2>
        </div>
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <span className="nav_itemLineOne">Hello User!</span>
            <span className="nav_itemLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="nav_item">
          <span className="nav_itemLineOne">Your!</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav_itemBasket">
            <ShoppingBagIcon></ShoppingBagIcon>
            <span className="nav_itemLineTwo nav_basketCount">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
