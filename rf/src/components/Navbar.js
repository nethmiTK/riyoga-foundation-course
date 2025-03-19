import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg"; // Adjust path if needed

function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Who We Are</Link></li>
        <li><Link to="/projects">Projects</Link></li>

        {/* Centered Logo */}
        <li className="logo-container">
          <img src={logo} alt="Logo" className="nav-logo" />
        </li>

        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
