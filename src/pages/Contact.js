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
        
      </h3><button className='hire-me'><a href="mailto:hafizkadir.work@gmail.com">Contact Me</a></button>
      <hr></hr>
      <div className="social-icons">
      <a href="https://github.com/itsFiz" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/hfzkdr/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>

      <a
        href="https://www.twitter.com/criedfizcken"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter" />
      </a>
      <a
        href="https://www.youtube.com/@criedfizcken6200"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-youtube" />
      </a>
      <a href="https://discord.gg/EhkJZpVyvX" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-discord" />
      </a>
      <a
        href="https://www.instagram.com/criedfizcken/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram" />
      </a>
      <a
        href="https://steamcommunity.com/id/itsFizzz/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-steam" />
      </a>
      <a
        href="https://www.twitch.tv/criedfizcken"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitch" />
      </a>
    </div>

      <hr />

      <div className="social">
        
      </div>
      
    </div>
    
  </div>
  
)

export default Contact
