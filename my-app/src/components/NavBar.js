import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/collection">My Collection</NavLink>
        <NavLink to="/shop">Record Shop</NavLink>
    </div>
  );
}

export default NavBar;