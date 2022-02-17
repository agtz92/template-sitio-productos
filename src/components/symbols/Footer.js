import React from "react";
//dedicated css
import "../../webflow_styles/symbols/footer.css";

import img from "../../images/Webp.net-resizeimage-min.jpg";

const Footer = () => {
  return (
    <footer id="footer" className="footer wf-section bck-color4">
      <div className="w-container">
        <div className="footer-flex-container">
          <div className="div-block-2">
            <img srcSet={img} loading="lazy" width="150" alt="SoCal Rubber" />
            <p className="paragraph-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div>
            <h2 className="footer-heading color2">Heading Label</h2>
            <ul role="list" className="w-list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Text Link
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Text Link
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Text Link
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Text Link
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Text Link
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer-heading color2">Heading Label</h2>
            <ul role="list" className="w-list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Text Link
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Text Link
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer-heading color2">Heading Label</h2>
            <ul role="list" className="w-list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Text Link
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Text Link
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Text Link
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-block">
          Copyright © 2022 SoCal Rubber. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
