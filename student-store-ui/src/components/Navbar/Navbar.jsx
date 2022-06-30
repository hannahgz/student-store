import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";

import Orders from "../Orders/Orders";

const navbarTitles = ["Home", "About Us", "Contact Us", "Orders"];

/**
 *
 * @returns creates navigation bar that wil autoscroll to various page components
 * renders logo in homepage
 */
export default function Navbar() {
  const nav = useNavigate();
  return (
    <nav>
      <div className="navbar-container">
        <Logo />
        <div className="navbar-links">
          {
            <div className="nav-element">
              <a className="anchor" href={"#about-us"} onClick={() => nav("/")}>
                About Us
              </a>
              <a
                className="anchor"
                href={"#contact-us"}
                onClick={() => nav("/")}
              >
                Contact Us
              </a>
              <Link to="/orders" className="orders">
                {" "}
                Orders
              </Link>
            </div>
          }
        </div>
      </div>
    </nav>
  );
}
