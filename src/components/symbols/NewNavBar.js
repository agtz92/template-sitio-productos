import React, { Component, useState } from "react";
//dedicated css
import "../../webflow_styles/symbols/navbar.css";
import { Link } from "gatsby"
import logo from "../../images/logo.png";

const NewNavBar = (props) =>{

    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className={`navbar w-nav${props.sticky ? " sticky" : ""}`}
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
          </Link>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <Link to="/" className="navlink w-nav-link" activeclassname="w--current color1">
              Home
            </Link>
            <a href="#" className="navlink w-nav-link" activeclassname="w--current color1">
              Products
            </a>
            <a href="#" className="navlink w-nav-link" activeclassname="w--current color1">
              About Us
            </a>
            <a href="#" className="navlink w-nav-link" activeclassname="w--current color1">
              Contact Us
            </a>
            <a href="#" className="navlink-contrast bck-color1 w-nav-link" activeclassname="w--current color1">
              Get a Quote
            </a>
          </nav>
          <div
            className={
              "w-nav-button " +
              (isOpen ? "w--open bck-color2" : "bck-color2")
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
          style={{height: "100vh", display: "block"}}
        >
          <nav
            role="navigation"
            className="nav-menu w-nav-menu transition"
            data-nav-menu-open=""

          >
            <Link
              to="/"
              aria-current="page"
              className="navlink w-nav-link w--nav-link-open"
              activeclassname="w--current color1"
            >
              Home
            </Link>
            <a
              href="/products"
              className="navlink w-nav-link w--nav-link-open"
              activeclassname="w--current color1"
            >
              Products
            </a>
            <a
              href="/about-us"
              className="navlink w-nav-link w--nav-link-open"
              activeclassname="w--current color1"
            >
              About Us
            </a>
            <a
              href="/contact-us"
              className="navlink w-nav-link w--nav-link-open"
              activeclassname="w--current color1"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="navlink-contrast bck-color1 w-nav-link w--nav-link-open"
              activeclassname="w--current color1"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </div>
    );

}

export default NewNavBar