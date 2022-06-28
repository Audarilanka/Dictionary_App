import React    from "react";


import "./NavBar.css";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-links">
          <li className="nav-item1">Dictionary</li>
        </Link>
        <Link to="/abot" className="nav-links">
          <li className="nav-item2">Abot Us</li>
        </Link>
        <Link to="/contact" className="nav-links">
          <li className="nav-item3">Contact</li>
        </Link>
        <Link to="/help" className="nav-links">
          <li className="nav-item4">Help</li>
        </Link>
      </nav>
    </div>
  );
}
