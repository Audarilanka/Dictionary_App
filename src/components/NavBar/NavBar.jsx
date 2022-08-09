import React from "react";

import "./NavBar.css";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-links l1">
          <li className="nav-item dic">Dictionary</li>
        </Link>
        <Link to="/about" className="nav-links l2">
          <li className="nav-item">About Us</li>
        </Link>
        <Link to="/contact" className="nav-links l3">
          <li className="nav-item">Contact</li>
        </Link>
        <Link to="/help" className="nav-links l4">
          <li className="nav-item">Help</li>
        </Link>
      </nav>
    </div>
  );
}
