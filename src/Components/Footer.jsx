import React from "react";

import "./Footer.css"

const Footer = () => {
  return <footer>
    <div class="footer-container">
        <div class="Footer-item">
            <img src="src/assets/mentor.jpg" alt="Become a Mentor"></img>
            <p className="p">Become a Mentor</p>
        </div>
        <div class="Footer-item">
            <img src="src/assets/submit.jpg" alt="Submit Resources" className="img"></img>
            <p className="p">Submit Resources</p>
        </div>
        <div class="Footer-item">
            <img src="src/assets/events.jpg" alt="Share An Event" className="img"></img>
            <p className="p">Share An Event</p>
        </div>
        <div class="Footer-item">
            <img src="src/assets/signup.jpg" alt="Signup" className="img"></img>
            <p className="p">Sign Up</p>
        </div>
    </div>
    <div class="afterboot">
        <p className="p">2023 AFTERBOOT</p>
    </div>
  </footer>
  
};



export default Footer;