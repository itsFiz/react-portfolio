import React from 'react'
import './Hero.css'

const Hero = () => {

    return (
        <div className='hero'>
            <h2 className='title'>Prantosh Biswas</h2>
            <h3 className='tagline'>Full-Stack Developer</h3>
            <p>Hello there! I'm Prantosh, a full stack developer passionate about crafting exceptional digital experiences. With a keyboard as my paintbrush and lines of code as my canvas, I bring ideas to life in the virtual realm. Let's join forces and bring your digital dreams to fruition. Get in touch, and let's embark on this exciting journey together!</p>
            <div className="hero-btns">
                <button className="hire-me">Hire Me</button>
                <button className="lets-talk">Let's Talk</button>
            </div>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/prantosh" target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.twitter.com/prantalks" target="_blank">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="https://github.com/PrantoshB" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    )
}

export default Hero