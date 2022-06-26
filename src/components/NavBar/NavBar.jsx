import React    from "react";


import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-links">
          <li className="nav-item">Dictionary</li>
        </Link>
        <Link to="/abot" className="nav-links">
          <li className="nav-item">Abot Us</li>
        </Link>
        <Link to="/contact" className="nav-links">
          <li className="nav-item">Contact</li>
        </Link>
        <Link to="/help" className="nav-links">
          <li className="nav-item">Help</li>
        </Link>
      </nav>
    </div>
  );
}
