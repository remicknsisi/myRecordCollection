import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/collection" className="nav-link">My Collection</NavLink>
        <NavLink to="/shop" className="nav-link">Record Shop</NavLink>
    </div>
  );
}

export default NavBar;