import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from "../../assets/about_profile.png"


const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="About Me" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Profile Image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Enables computers to learn from data and make predictions or
              decisions without explicit programming. Commonly used in
              applications like recommendation systems and image recognition.
            </p>
            <p>
              Builds both front-end 'UI' and back-end 'server, database' parts
              of web applications. Skilled in technologies like React, Node.js,
              HTML/CSS, and databases.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>FRONTEND</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Machine Learning</p>
              <hr style={{ width: "45%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>MAJOR PROJECT</p>
        </div>
      </div>
    </div>
  );
}

export default About
