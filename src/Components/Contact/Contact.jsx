import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setAlertMessage("");
    setAlertType("");

    const formData = new FormData(event.target);
    formData.append("access_key", "000ded01-cc65-478c-b7fa-ce16d497d005");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setAlertMessage(res.message);
        setAlertType("success");
      } else {
        setAlertMessage(
          res.message || "Something went wrong. Please try again."
        );
        setAlertType("error");
      }
    } catch (error) {
      setAlertMessage(
        "There was an error with the submission. Please try again."
      );
      setAlertType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
        <img src={theme_pattern} alt="Contact" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail-address" />
              <p>abinashnathpandey@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone-number" />
              <p>+977-9843818328</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your Email Address"
            name="email"
            required
          />
          <label htmlFor="message">Write your Message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          {alertMessage && (
            <div
            className={`alert alert-${alertType} ${alertMessage ? "show" : ""}`}
            role="alert"
          > {alertMessage}
          </div>
          )}
          <button type="submit" className="contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit Now"}</button>
        </form>
      </div>
    </div>
  );
}

export default Contact
