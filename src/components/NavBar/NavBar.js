import React from "react";
import "./NavBar.scss";
import logo from "../BUET_LOGO.png";

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="name" style={{ height: 100, width: 100 }} />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/tours" className="nav-link">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
