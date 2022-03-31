import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar">
      <div className={`mobile-menu only-mobile ${showMenu ? "overlay" : ""}`}>
        <div className="mobile-navbar" onClick={toggleMenu}>
          <Link to="/">
            {" "}
            <div className="mobile-nav-links">Home</div>
          </Link>
          <Link to="login">
            <div className="mobile-nav-links">Login</div>
          </Link>
          <Link to="cart">
            <div className="mobile-nav-links">cart </div>
          </Link>
        </div>
      </div>

      <div className="navbar-items">
        <Link to="/">
          <h1
            className="navbar-logo "
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Compu<span style={{ textDecoration: "underline" }}>Lab</span>{" "}
            <FaLink style={{ color: "teal" }} />{" "}
          </h1>{" "}
        </Link>

        <div className="mobile-menu-button-wrapper only-mobile">
          <button
            class={`hamburger hamburger--spring ${showMenu ? "is-active" : ""}`}
            type="button"
            onClick={toggleMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <div className="non-mobile nav-menu">
          <Link to="/">
            <div className="nav-links">Home</div>
          </Link>
          <Link to="login">
            <div className="nav-links">Login</div>
          </Link>
          <Link to="cart">
            <div className="nav-links">cart</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
