import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, LayoutGrid, Plane, Hotel, Bell } from "lucide-react";
import { useContact, useSiteSettings } from "../context/ContactContext";
import Logo from "./Logo";
import "./Header.css";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { contactSettings } = useContact();
  const { siteSettings } = useSiteSettings();
  const headerColors = siteSettings.colors || {};

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", path: "/", icon: LayoutGrid },
    { label: "Flights", path: "/flights", icon: Plane },
    { label: "Hotels", path: "/hotels", icon: Hotel },
    { label: "Airlines", path: "/airlines", icon: Plane },
  ];

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""}`}
      style={{
        background:
          headerColors.headerBg ||
          "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        color: headerColors.headerText || "#ffffff",
      }}
    >
      <div className="header-container">
        {/* Left Section - Logo */}
        <div className="header-left">
          <Link to="/" className="logo-link">
            <Logo />
          </Link>
        </div>

        {/* Center Section - Navigation */}
        <nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link"
                onClick={closeMobileMenu}
              >
                <Icon size={18} className="nav-icon" />
                <span className="nav-text">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Section - Call & Actions */}
        <div className="header-right">
          <a
            href={`tel:${contactSettings.tfn.replace(/[^0-9+]/g, "")}`}
            className="call-btn-modern"
            title="Click to call"
          >
            <span className="call-icon">
              <Phone size={20} />
            </span>
            <span className="call-text">{contactSettings.tfn}</span>
          </a>

          {/* Mobile Menu Toggle */}
          
            <div onClick={toggleMobileMenu} className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
