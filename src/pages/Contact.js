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
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>React</p>
        <p>Backend Development</p>
        <p>Augmented Reality</p>
        <p>3D Modelling</p>

        <p>WordPress Development</p>
        <p>Startups</p>
        <p>Flutter</p>
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <a href="mailto:hafizkadir.work@gmail.com">Contact Me</a>
      </h3>

      <hr />

      <div className="social">
        <p>&copy; 2023 Hafiz Kadir</p>
      </div>
    </div>
  </div>
)

export default Contact
