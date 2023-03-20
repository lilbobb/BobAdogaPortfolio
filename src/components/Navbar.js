import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="brand">BobTech</div>
        <ul>
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
