import React from "react";

function Footer() {
  return (
    <footer className="footer-wrapper pb-4">
      <div className="footer-content container">
        <div className="footer-left">
          <img src="./images/logo-white.svg" alt="" className="footer-logo" />
          <div className="social-media">
            <img
              src="./images/icon-facebook.svg"
              alt=""
              className="social-media-icon"
            />
            <img
              src="./images/icon-youtube.svg"
              alt=""
              className="social-media-icon"
            />
            <img
              src="./images/icon-twitter.svg"
              alt=""
              className="social-media-icon"
            />
            <img
              src="./images/icon-pinterest.svg"
              alt=""
              className="social-media-icon"
            />
            <img
              src="./images/icon-instagram.svg"
              alt=""
              className="social-media-icon"
            />
          </div>
        </div>
        <div className="footer-mid">
          <nav className="footer-links">
            <a href="#" className="footer-link">
              About Us
            </a>
            <a href="#" className="footer-link">
              Careers
            </a>
            <a href="#" className="footer-link">
              Contact
            </a>
            <a href="#" className="footer-link">
              Support
            </a>
            <a href="#" className="footer-link">
              Blog
            </a>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
          </nav>
        </div>
        <div className="footer-right">
          <button className="btn btn-primary">Request Invite</button>
          <p className="copyright">© Easybank. All Rights Reserved</p>
        </div>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/matijazinic/">Matija Zinic</a>.
      </div>
    </footer>
  );
}

export default Footer;
