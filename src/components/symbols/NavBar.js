import React, { Component } from "react";
//dedicated css
import "../../webflow_styles/symbols/navbar.css";
import { Link } from "gatsby"
import logo from "../../images/logo.png";


export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(function (prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }

  render() {
    return (
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
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
            <Link to="/" className="navlink w-nav-link" activeClassName="w--current color1">
              Home
            </Link>
            <a href="#" className="navlink w-nav-link" activeClassName="w--current color1">
              Products
            </a>
            <a href="#" className="navlink w-nav-link" activeClassName="w--current color1">
              About Us
            </a>
            <a href="#" className="navlink w-nav-link" activeClassName="w--current color1">
              Contact Us
            </a>
            <a href="#" className="navlink-contrast bck-color1 w-nav-link" activeClassName="w--current color1">
              Get a Quote
            </a>
          </nav>
          <div
            className={
              "w-nav-button " +
              (this.state.isToggleOn ? "w--open bck-color2" : "bck-color2")
            }
            onClick={this.handleClick}
            aria-hidden="true" 
          >
            <div className="w-icon-nav-menu"></div>
          </div> 
        </div>
        <div
          className={"w-nav-overlay" + (this.state.isToggleOn ? " showing" : " not-showing")}
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
              activeClassName="w--current color1"
            >
              Home
            </Link>
            <a
              href="/products"
              className="navlink w-nav-link w--nav-link-open"
              activeClassName="w--current color1"
            >
              Products
            </a>
            <a
              href="/about-us"
              className="navlink w-nav-link w--nav-link-open"
              activeClassName="w--current color1"
            >
              About Us
            </a>
            <a
              href="/contact-us"
              className="navlink w-nav-link w--nav-link-open"
              activeClassName="w--current color1"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="navlink-contrast bck-color1 w-nav-link w--nav-link-open"
              activeClassName="w--current color1"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </div>
    );
  }
}
