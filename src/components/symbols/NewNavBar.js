import React, { Component, useState } from "react";
//dedicated css
import "../../webflow_styles/symbols/navbar.css";
import { Link } from "gatsby";
import logo from "../../images/logo.png";

const NewNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className={`navbar bck-color4  w-nav${props.sticky ? " sticky" : ""}`}
    >
      <div className="container-3 w-container">
        <Link to="/" className="w-nav-brand">
          <img
            srcSet={logo}
            loading="lazy"
            width="100"
            alt=""
            style={{ width: "70px", height: "45px", paddingTop: "5px" }}
          />
          <p className="color-white paragraph-regular">de MatMarkt</p>
        </Link>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <Link
            to="/"
            className="navlink w-nav-link color-white"
            activeclassname="w--current color1"
          >
            Inicio
          </Link>
          <Link
            to="/categorias/"
            className="navlink w-nav-link color-white"
            activeclassname="w--current color1"
          >
            Productos
          </Link>
          <Link
            to="/nosotros/"
            className="navlink w-nav-link color-white"
            activeclassname="w--current color1"
          >
            Acerca de Nosotros
          </Link>
          <Link
            to="/contacto/"
            className="navlink w-nav-link color-white"
            activeclassname="w--current color1"
          >
            Contactanos
          </Link>
          <a
            href="#"
            className="navlink-contrast bck-color1 w-nav-link "
            activeclassname="w--current color1"
          >
            Cotiza Ahora
          </a>
        </nav>
        <div
          className={
            "w-nav-button " + (isOpen ? "w--open bck-color2" : "bck-color2")
          }
          onClick={toggle}
          aria-hidden="true"
        >
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
      <div
        className={"w-nav-overlay" + (isOpen ? " showing" : " not-showing")}
        data-wf-ignore=""
        id="w-nav-overlay-0"
        style={{ height: "100vh", display: "block" }}
      >
        <nav
          role="navigation"
          className="nav-menu w-nav-menu transition darkmode"
          data-nav-menu-open=""
        >
          <Link
            to="/"
            aria-current="page"
            className="navlink w-nav-link w--nav-link-open color-white"
            activeclassname="w--current color1"
          >
            Inicio
          </Link>
          <Link
            to="/categorias/"
            className="navlink w-nav-link w--nav-link-open color-white"
            activeclassname="w--current color1"
          >
            Productos
          </Link>
          <Link
            to="/nosotros/"
            className="navlink w-nav-link w--nav-link-open color-white"
            activeclassname="w--current color1"
          >
            Acerca de Nosotros
          </Link>
          <Link
            to="/contacto/"
            className="navlink w-nav-link w--nav-link-open color-white"
            activeclassname="w--current color1"
          >
            Contactanos
          </Link>
          <a
            href="#"
            className="navlink-contrast bck-color1 w-nav-link w--nav-link-open"
            activeclassname="w--current color1"
          >
            Cotiza Ahora
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NewNavBar;
