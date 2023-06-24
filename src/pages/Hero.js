import React from 'react'
import './Hero.css'
import Imu from '../assets/imu.png'
import { Link } from 'react-scroll'


const Hero = () => {

    return (
        <div className='hero' id='home'>
            <div className="description">
                <h2 className='title'>hELLO. i aM PRANTOSH</h2>
                <h3 className='tagline'>Full-Stack Developer</h3>
                <p className='paragraph'>I'm passionate about crafting exceptional digital experiences. With a keyboard as my paintbrush and lines of code as my canvas, I bring ideas to life in the virtual realm. Let's join forces and bring your digital dreams to fruition. Get in touch, and let's embark on this exciting journey together!</p>
                <div className="hero-btns">
                    <button className="hire-me">
                        <a href="https://prantoshb.github.io/Portfolio-Backend/assets/Prantosh-Biswas.pdf" target='_blank'>
                            GET MY CV
                        </a>
                            </button>
                    <button className="lets-talk">
                    <Link spy={true} smooth={true} offset={50} duration={500} to="contact">
                    LET'S TALK
                    </Link>  
                        </button>
                </div>
            </div>
            <div className="hero-image">
                <img src={Imu} alt="prantosh" />

            </div>
            <div className="social-icons">
                <a href="https://github.com/PrantoshB" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/prantosh" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://wellfound.com/u/prantosh-biswas">
                    <i className="fab fa-angellist"></i>
                </a>
                <a href="https://www.twitter.com/prantalks" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                </a>
            </div>
        </div>
    )
}

export default Hero