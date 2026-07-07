import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <FaLeaf className="logo-icon" />
          <span>EcoTrack</span>
        </Link>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/calculator" onClick={() => setMenuOpen(false)}>
              Calculator
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </NavLink>
          </li>

          <li>
            <Link
              to="/register"
              className="register-btn"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.nav>
  );
}
