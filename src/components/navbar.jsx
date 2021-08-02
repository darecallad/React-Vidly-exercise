import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="" id="navbarNavAltMarup">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="./movies">
          Movies
        </NavLink>

        <NavLink className="nav-item nav-link" to="./customers">
          Customers
        </NavLink>

        <NavLink className="nav-item nav-link" to="./rentals">
          Rentals
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
