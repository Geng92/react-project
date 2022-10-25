import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar(){
  return (
    <header>
      <h1>
        <Link to="/">
          Home
        </Link>
      </h1>
      <nav>
        <div className="navigation">
          <NavLink className="button" exact to="/characters">
            Characters  
          </NavLink>
          <NavLink className="button" to="/characters/new">
            Add Your Own Character   
          </NavLink>
          <NavLink className="button" to="/about">
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;