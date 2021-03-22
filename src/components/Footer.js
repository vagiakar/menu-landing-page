import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-social">
        <a href="/">
          <FaFacebookF className="social-icon" />
        </a>
        <a href="/">
          <FaInstagram className="social-icon" />
        </a>
        <a href="/">
          <FaTwitter className="social-icon" />
        </a>
      </div>
      <div className="footer-copyright">
        <p>© Copyright Coffee Shop. All rights reserved.</p>
      </div>
    </div>
  );
}
