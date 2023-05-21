import React from "react";

import mentorjpg from "../assets/mentor.jpg";
import "./Footer.css";
import submitJPG from "../assets/submit.jpg";
import eventsJpg from "../assets/events.jpg";
import signupjpg from "../assets/signup.jpg";

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="Footer-item">
          <img src={mentorjpg} alt="Become a Mentor"></img>
          <p className="p">Become a Mentor</p>
        </div>
        <div class="Footer-item">
          <img src={submitJPG} alt="Submit Resources" className="img"></img>
          <p className="p">Submit Resources</p>
        </div>
        <div class="Footer-item">
          <img src={eventsJpg} alt="Share An Event" className="img"></img>
          <p className="p">Share An Event</p>
        </div>
        <div class="Footer-item">
          <img src={signupjpg} alt="Signup" className="img"></img>
          <p className="p">Sign Up</p>
        </div>
      </div>
      <div class="afterboot">
        <p className="p">2023 AFTERBOOT</p>
      </div>
    </footer>
  );
};

export default Footer;
