import React,  { useRef }from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
 
  const notify = () => toast("Wow so easy !");
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_nnumsqs","template_nlqzrsa",
          form.current,
          "L1nXwHkN6KpTJN_Uv"
        )
        .then(
          (result) => {
            <ToastContainer />
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  return(
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        Minding a project?
      </h1>
      <button className="hire-me" style={{marginLeft:"20%"}}>
        <a href="mailto:hafizkadir.work@gmail.com">Contact Me</a>
      </button>
      
      <p className="footer-text" style={{marginTop:"150px"}}>&copy; 2023 Hafiz Kadir</p>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Multimedia</p>
        <p>Augmented Reality</p>
        <p>3D Modelling</p>
        <p>Live Streaming</p>

        <p>Photography</p>
        <p>React</p>
        <p>Springboot</p>

        <p>Flutter</p>
        <p>Unity</p>
      </div>

      <hr />

      
      
      <p>
        <a href="https://ko-fi.com/criedfizcken">
          {' '}
          <img
            src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
            height="50"
            width="210"
            alt="criedfizcken"
          />
        </a>
      </p>
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
        <a
          href="https://discord.gg/EhkJZpVyvX"
          target="_blank"
          rel="noreferrer"
        >
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
    </div>
  </div>
  )
}

export default Contact
