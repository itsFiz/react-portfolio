import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import Imu from "../assets/fizloki.jpeg";
import Typewriter from "typewriter-effect";

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">hELLO. i aM Hafiz Kadir</h2>

        <h3 className="tagline">
          I do AR, Fullstack Dev, Ui/Ux, Photography and stream on Twitch for
          fun!
        </h3>
        
       
          
        
        <p className="paragraph">
          I'm passionate about crafting exceptional digital experiences. I bring
          ideas to life in the virtual realm with a keyboard as my paintbrush
          and lines of code as my canvas. Let's join forces and bring your
          digital dreams to fruition. Get in touch, and let's embark on this
          exciting journey together!
        </p>
        <div className="hero-btns">
          <button className="hire-me">
            <a
              href="https://drive.google.com/file/d/1jUhLyp8Ww0NMzZK4gPTCoL_KMuQfd8eC/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Get My CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              Say Hello
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="Fiz" className="hero-image" />
    </div>
    <div>
      <p align="left">
        {" "}
        <img
          src="https://komarev.com/ghpvc/?username=itsfiz&label=Profile%20views&color=ce3636&style=flat"
          alt="itsfiz"
        />{" "}
      </p>
    </div>
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
  </div>
);

export default Hero;
