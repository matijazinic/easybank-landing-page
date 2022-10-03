import React, { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-wrapper">
      <div className="header-content container">
        <a href="#">
          <img src="/images/logo.svg" alt="" className="nav-logo" />
        </a>
        <button
          className={`hamburger-menu ${
            mobileMenuOpen ? "hamburger-menu-open" : ""
          }`}
          onClick={() => setMobileMenuOpen((prevValue) => !prevValue)}
        ></button>
        <nav
          className={`nav-wrapper ${mobileMenuOpen ? "nav-wrapper-show" : ""}`}
        >
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </nav>
        <button className="btn btn-primary">Request Invite</button>
      </div>
    </header>
  );
}

export default Navbar;
