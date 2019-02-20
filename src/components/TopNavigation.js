import React from "react";
import { Link, NavLink } from "react-router-dom";

const isCharactersActive = (match, location) =>
  location.pathname === "/" || location.pathname.includes("/characters");

const TopNavigation = () => (
  <nav
    aria-label="main navigation"
    className="navbar is-fixed-top"
    role="navigation"
  >
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <span className="icon is-large">
          <i className="fas fa-2x fa-dice-d20" />
        </span>
        <span>Tabletop</span>
      </Link>
    </div>
    <div className="navbar-menu">
      <NavLink
        activeClassName="is-active"
        className="navbar-item"
        isActive={isCharactersActive}
        to="/characters"
      >
        Characters
      </NavLink>
      <NavLink activeClassName="is-active" className="navbar-item" to="/moves">
        Moves
      </NavLink>
    </div>
  </nav>
);

export default TopNavigation;
