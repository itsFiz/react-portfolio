import React from 'react'
import './Contact.css'

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        I LOVE <br />
        COFFEE
        <br /> CHAT
      </h1>
      <p>&copy; 2023 Hafiz Kadir</p>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Multimedia</p>
        <p>Augmented Reality</p>
        <p>3D Modelling</p>
        <p>Live Streaming</p>
        <p>Programming</p>
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <a href="mailto:hafizkadir.work@gmail.com">Contact Me</a>
      </h3>

      <hr />

      <div className="social">
        
      </div>
      
    </div>
    
  </div>
  
)

export default Contact
