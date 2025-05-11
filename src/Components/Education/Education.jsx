import React from "react";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Education_Data from "../../assets/education_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="education-title">
        <h1>My Education</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      {/* Timeline */}
      <div className="timeline">
        {Education_Data.map((data) => (
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
                  <h4>{data.Date}</h4>
                  <p>{data.grade}</p>
                  <p>{data.s_desc}</p>
                  <div className="education-readmore">
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

export default Education;
