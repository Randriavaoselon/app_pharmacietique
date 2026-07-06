import { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import "../style/Navbar.css";

import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 10 || isOpen
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? "" : "hidden"}`}>
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <img src={logo} alt="Company Logo" />
        </a>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home" className="nav-link home-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link about-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#therapeutic">Therapeutic Areas</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#rd">R&D</a>
          </li>
          <li>
            <a href="#investors">Investors</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li className="mobile-only-btn">
            <button className="partner-btn">Partner With Us</button>
          </li>
        </ul>

        <div className="nav-actions">
          {/* Conteneur de recherche */}
          <div className={`search-wrapper ${isSearchOpen ? "open" : ""}`}>
            <input
              type="text"
              placeholder="Rechercher..."
              className="search-input"
            />
            <button
              className="icon-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <FiX /> : <FiSearch />}
            </button>
          </div>

          <button className="partner-btn desktop-only-btn">
            Partner With Us
          </button>

          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
