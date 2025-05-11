import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.png";
import user_icon from "../../assets/user_icon.svg";
import facebook_icon from "../../assets/facebook_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import linkedin_icon from "../../assets/linkedin_icon.png";
import github_icon from "../../assets/github_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="FooterLogo" />
          <p>
            I am frontend developer from, Nepal and pursuing degree of Computer
            Engineering at Kathmandu Engineering College with 2 years of
            experience.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="UserIcon" />
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/abinash.nath.pandey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook_icon} alt="FacebookIcon" />
            </a>
            <a
              href="https://www.instagram.com/abin.ash_056/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram_icon} alt="InstagramIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/abinashnathpandey/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin_icon} alt="LinkedInIcon" />
            </a>
            <a
              href="https://github.com/abinash2055"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github_icon} alt="GithubIcon" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 . All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;



