import React, { useState, useEffect } from "react";
import "./Footer.css";
import logo from "../assets/spit-transparent-bg-logo.png";
import {
  FaEnvelopeSquare,
  FaPhoneAlt,
  FaLinkedinIn,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";  


function Footer() {
  return (
    <div id="footer">
      <div id="footer-head">
        <div id="footer-head-logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="footer-head-socials">
          <a href="https://www.facebook.com/SPITCOLLEGE/">
            <FaFacebook className="icons" />
          </a>

          <a href="https://twitter.com/bvbspit">
            <FaTwitter className="icons" />
          </a>

          <a href="https://www.linkedin.com/school/bhartiya-vidya-bhavans-sardar-patel-institute-of-technology-munshi-nagar-andheri-mumbai/">
            <FaLinkedinIn className="icons" />
          </a>
        </div>
      </div>
      

      <div id="footer-main">
        <div className="footer-info">
          <div id="footer-info-left">
            <div id="footer-info-title">
              Sardar Patel Institute of Technology
            </div>
            <div className="footer-info-content">
              Bhavan's Campus, Munshi Nagar, Andheri (West), Mumbai 400-058
            </div>
            <div className="footer-info-content">
              <div className="footer-info-content2">
                <FaPhoneAlt className="icon" />
                <div>: 9930362014 / 9930309463</div>
              </div>
            </div>
            <div className="footer-info-content">
              <div className="footer-info-content2">
                <FaEnvelopeSquare className="icon" />
                <div>: principal@spit.ac.in</div>
              </div>
              </div>
              </div>
              </div>
              </div>
              <div id="footer-copyright">
        Copyrights &copy; {new Date().getFullYear()} | S.P.I.T.
      </div>
              </div>

);
}

export default Footer;

