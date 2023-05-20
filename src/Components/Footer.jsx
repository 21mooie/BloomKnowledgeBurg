import React from "react";

import "./Footer.css"

const Footer = () => {
  return <footer>
    <div class="footer-container">
        <div class="Footer-item">
            <img src="src/assets/mentor.jpg" alt="Become a Mentor"></img>
            <p>Become a Mentor</p>
        </div>
        <div class="Footer-item">
            <img src="src/assets/submit.jpg" alt="Submit Resources"></img>
            <p>Submit Resources</p>
        </div>
        <div class="Footer-item">
            <img src="src/assets/events.jpg" alt="Share An Event"></img>
            <p>Share An Event</p>
        </div>
        <div class="Footer-item">
            <img src="src/assets/signup.jpg" alt="Signup"></img>
            <p>Sign Up</p>
        </div>
    </div>
    <div class="afterboot">
        <p>2023 AFTERBOOT</p>
    </div>
  </footer>
  
};



export default Footer;