import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile Image" />
      <h1>
        <span>I'm Abinash Nath Pandey,</span> Computer Engineer based in Nepal.
      </h1>
      <p>
        I am an ML, Full Stack Developer from Kathmandu, Nepal. I am still
        pursuing a Computer Engineering Degree from Kathmandu Engineering
        College. I did an Entry Level job in the Laravel Programming Language at
        Robust Information Technology.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
        <a
          href="/abinash_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
