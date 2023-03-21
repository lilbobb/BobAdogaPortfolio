import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="brand">BobTech</div>
        <div className="navbar-bars">
          <a href="#" className="navbar-bar"></a>
          <a href="#" className="navbar-bar"></a>
          <a href="#" className="navbar-bar"></a>
        </div>
        <ul className="navbar-links">
          <li>
            <i className="fa-solid fa-bars"></i>
          </li>
          <li>
            <Link to="/" className="pages">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="pages">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Contacts" className="pages">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
