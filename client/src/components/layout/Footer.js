import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Footer.css";
import ImageOne from "../../img/zilah-log-small.png";
import "boxicons";

const Footer = () => {
  const today = new Date();
  return (
    <div className="App">
      {/* // <!-- Footer Section --> */}
      <div className="footer_container">
        <div className="footer_links">
          <div className="footer_link-wrapper">
            <div className="footer_link-items">
              <h2 className="footer-heading">About Us</h2>
              <a href="/">How it works</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/sync">Sync</a>
              <a href="/blog">Blog</a>
              {/* <a href="/">Testimonials</a>
              <a href="/">Careers</a> */}
              <a href="/">Privacy Policy </a>
              <a href="/">Terms of Services</a>
            </div>

            <div className="footer_link-items">
              <h2 className="footer-heading">Contact Us</h2>
              <a href="/">Contact</a>
              <a href="/faq">Faq</a>
              <a href="/">Destination</a>
              <a href="/">Sponsorship</a>
            </div>
          </div>
          <div className="footer_link-wrapper">
            <div className="footer_link-items">
              <h2 className="footer-heading">Videos</h2>
              <a href="/">Submit Music</a>
              <a href="/">Ambassadors</a>
              <a href="/">Agency</a>
              <a href="/">Influencer</a>
            </div>
            <div className="footer_link-items">
              <h2 className="footer-heading">Social media</h2>
              <a href="/">Instagram</a>
              <a href="https://www.youtube.com/user/zilah126/videos">Youtube</a>
              <a href="https://www.facebook.com/Zilah-Music-Publishing-162465233801098/#">
                Facebook
              </a>
              <a href="https://twitter.com/zilahmusicpub">Twitter</a>
            </div>
          </div>
        </div>
        <div className="social_media">
          <div className="social_media-wrap">
            <div className="footer_logo">
              <a href="/" id="footer_logo">
                <img src={ImageOne} alt="logo" />
              </a>
            </div>
            <p className="website_rights">
              Zilah Music Publishing {today.getFullYear()}. All rights reserved
            </p>
            <div className="social_icons">
              <a href="/" className="social_icons-link" target="_blank">
                <i className="bx bxl-facebook-circle"></i>
              </a>
              <a href="/" className="social_icons-link" target="_blank"></a>
              <a href="/" className="social_icons-link" target="_blank"></a>
              <a href="/" className="social_icons-link" target="_blank"></a>
              <a href="/" className="social_icons-link" target="_blank"></a>
            </div>
            {/* <!-- social_icons --> */}
          </div>
          {/* <!--   social_media-wrap --> */}
        </div>
        {/* <!--  social_media --> */}
      </div>
      {/* //  <!--footer_container --> */}
    </div>
  );
};

export default Footer;
