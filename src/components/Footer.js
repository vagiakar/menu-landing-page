import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-social">
        <FaFacebookF className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaTwitter className="social-icon" />
      </div>
      <div className="footer-copyright">
        <p>© Copyright Coffee Shop. All rights reserved.</p>
      </div>
    </div>
  );
}
