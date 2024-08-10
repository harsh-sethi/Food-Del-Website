import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Experience the joy of effortless dining with our reliable delivery
            service. From your favorite comfort foods to exotic dishes, we
            ensure every meal is crafted with care and delivered with
            convenience. Your satisfaction is our priority, and we're here to
            bring delicious moments to your table.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/">
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a href="https://in.linkedin.com/">
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href="#">+1-234-567-8901</a>
            </li>
            <li>
              <a href="#">contact@tomato.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
