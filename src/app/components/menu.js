"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./menu-estilos.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const rutas = [
  {
    id: 1,
    nombre: "HOME",
    deruta: "/",
  },
  {
    id: 2,
    nombre: "TRAILERS",
    deruta: "/trailers",
  },
  {
    id: 3,
    nombre: "CATERING",
    deruta: "/catering",
  },
  {
    id: 4,
    nombre: "CONTACTO",
    deruta: "/contacto",
  },
];

const Menu = () => {
  const [activo, setActivo] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setActivo(!activo);
  };

  const handleCambio = () => {
    setActivo(false);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <>
      <nav
        className={`modern-navbar ${scrolled ? "scrolled" : ""} ${
          activo ? "menu-open" : ""
        }`}
      >
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Link href="/" onClick={handleCambio}>
              <span className="logo-text">
                <span className="logo-main">SOTO</span>
                <span className="logo-sub">SERVICIOS INDUSTRIALES</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu desktop-menu">
            {rutas.map(({ id, nombre, deruta }) => (
              <Link
                key={id}
                href={deruta}
                className={`navbar-link ${isActive(deruta) ? "active" : ""}`}
                onClick={handleCambio}
              >
                {nombre}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-toggle" onClick={handleClick}>
            <div className={`hamburger ${activo ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${activo ? "active" : ""}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-menu-list">
              {rutas.map(({ id, nombre, deruta }) => (
                <li key={id} className="mobile-menu-item">
                  <Link
                    href={deruta}
                    className={`mobile-menu-link ${
                      isActive(deruta) ? "active" : ""
                    }`}
                    onClick={handleCambio}
                  >
                    <span className="menu-number">0{id}</span>
                    <span className="menu-text">{nombre}</span>
                    <FaArrowRight className="menu-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
