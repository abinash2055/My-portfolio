import React from 'react'
import "./WorkExperience.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import WorkExperience_Data from "../../assets/workexperience_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";


const WorkExperience = () => {
  return (
    <div id="work-experience" className="experience">
      <div className="experience-title">
        <h1>My Work Experience</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      {/* Timeline  */}
      <div className="timeline">
        {WorkExperience_Data.map((data) => (
          <div className="timeline-item" key={data.s_no}>
            <div className="timeline-item-content">
              <span className="timeline-tag">{data.s_no}</span>
              <div className="timeline-details">
                <img
                  src={data.img}
                  alt={data.s_name}
                  className="timeline-img"
                />
                <div className="timeline-text">
                  <h3>{data.s_name}</h3>
                  <h4>{data.s_duration}</h4> 
                  <p>{data.s_position}</p> 
                  <p>{data.s_post}</p> 
                    <p>{data.s_location}</p>
                  <p>{data.s_desc}</p>
                  <div className="experience-readmore">
                    <p>Read More</p>
                    <img src={arrow_icon} alt="Arrow Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience
