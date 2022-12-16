import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
    width: "100px",
    padding: "15px",
    background: "black",
    color: "white",
  };

function NavBar() {
  return (
    <div className="nav">
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/collection" style={linkStyle}>My Collection</NavLink>
        <NavLink to="/shop" style={linkStyle}>Record Shop</NavLink>
    </div>
  );
}

export default NavBar;