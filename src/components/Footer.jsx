import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer>
    <div className="container">
      <div className="footer-cont d-flex justify-content-between flex-wrap">
        <div className="footer-quote">
          <h3>Innovative Designs</h3>
          <h2>
            for Modern <span>Lifestyles.</span>
          </h2>
        </div>
        <div>
          <div className="footer-title">London, UK</div>
          <ul className="nav flex-column">
            <li className="nav-item">
              Nira Living, 8 Springfield Road, London, UK
            </li>
            <li className="nav-item">
              <Link to="mailto:info@niraliving.com">info@niraliving.com</Link>
            </li>
            <li className="nav-item">
              <Link to="tel:+91 123 456 7890">+91 123 456 7890</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-title">Company</div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="#">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Works</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Studio</Link>
            </li>
            <li className="nav-item">
              <Link to="#">News</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-title">Helps</div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="#">Terms & Conditions</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Privacy Policy</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Affiliate Programs</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Faq's</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright d-flex justify-content-between align-items-center flex-column flex-lg-row position-relative">
        <div>© 2024 Nira Living | All Right Reserved.</div>
        <Link to="/" className="copyright-logo">
          <img src="assets/img/logo.png" alt="Logo" className="logo" />
        </Link>
        <div className="social">
          Follow us on :
          <ul>
            <li>
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-youtube"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </footer>
  );
}
