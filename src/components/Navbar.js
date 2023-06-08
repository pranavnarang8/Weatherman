import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li className="nav-item title">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            WeatherMan
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/around_the_globe"
            style={{ textDecoration: "none", color: "silver" }}
          >
            Around the World
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/favourites"
            style={{ textDecoration: "none", color: "silver" }}
          >
            Favourites
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
