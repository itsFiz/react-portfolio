import React from 'react'
import './About.css'
import ReduxIcon from '../assets/redux.png'
import HTML from '../assets/html.png'
import jQuery from '../assets/jquery.png'
import Ruby from '../assets/ruby.png'
import JEST from '../assets/jest.png'
import Flutter from '../assets/flutter.png'
import VSCode from '../assets/vscode.png'
import Figma from '../assets/figma.png'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="about-me">
        <h2 className='title about-title'>aBOUT mE</h2>
        <p className='paragraph about-para'>
          My journey in the world of programming began in 2018 when I ventured into freelancing. Since then, I have had the opportunity to work on a wide range of projects, honing my skills and expanding my knowledge along the way. I have worked with various clients, both independently and as part of a team, to deliver innovative and user-friendly websites and mobile applications.
        </p>
        <button className='hire-me'>
          <a href="https://prantoshb.github.io/Portfolio-Backend/assets/Prantosh-Biswas.pdf" target='_blank'>
          GET MY CV
          </a></button>
      </div>
      <div className="about-skills">
        <h2 className='skill-title'>Front-End</h2>
        <div className="skills">
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
              alt="" />
            <p>React</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"
              alt="" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <img src={ReduxIcon}
              alt="" />
            <p>Redux</p>
          </div>
          <div className="skill">
            <img src={HTML}
              alt="" />
            <p>HTML5</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/640px-CSS3_logo.svg.png"
              alt="" />
            <p>CSS3</p>
          </div>
          <div className="skill">
            <img src={jQuery}
              alt="" />
            <p>jQuery</p>
          </div>
          <div className="skill">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/512px-Sass_Logo_Color.svg.png?20150315202757'
              alt="" />
            <p>SASS</p>
          </div>
          <div className="skill">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png'
              alt="" />
            <p>Bootstrap</p>
          </div>
          <div className="skill">
            <img src='https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp'
              alt="" />
            <p>Next.js</p>
          </div>
        </div>
        <h2 className='skill-title'>Back-End</h2>
        <div className="skills">
          <div className="skill">
            <img src={Ruby}
              alt="" />
            <p>Ruby</p>
          </div>
          <div className="skill">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ruby_on_Rails_logo.svg/640px-Ruby_on_Rails_logo.svg.png'
              alt="" />
            <p>Ruby on Rails</p>
          </div>
          <div className="skill">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png?20080116191800'
              alt="" />
            <p>PostgreSQL</p>
          </div>
        </div>
        <h2 className='skill-title'>Mobile</h2>
        <div className="skills">
          <div className="skill">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207'
              alt="" />
            <p>React Native</p>
          </div>
          <div className="skill">
            <img src={Flutter} alt="" />
            <p>Flutter</p>
          </div>

        </div>
        <h2 className='skill-title'>Tools</h2>
        <div className="skills">
          <div className="skill">
            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
            <p>Git</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Github_logo_svg.svg/640px-Github_logo_svg.svg.png" alt="" />
            <p>GitHub</p>
          </div>
          <div className="skill">
            <img src="https://rspec.info/images/logo.png" alt="" />
            <p>RSpec</p>
          </div>
          <div className="skill">
            <img src={JEST} alt="" />
            <p>JEST</p>
          </div>
          <div className="skill">
            <img src='https://avatars.githubusercontent.com/u/11260967?s=280&v=4' alt="" />
            <p>Chrome Dev Tools</p>
          </div>
          <div className="skill">
            <img src={VSCode} alt="" />
            <p>VS Code</p>
          </div>
          <div className="skill">
            <img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon.png" alt="" />
            <p>Webpack</p>
          </div>
          <div className="skill">
            <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/postman-icon.png" alt="" />
            <p>Postman</p>
          </div>
          <div className="skill">
            <img src="https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-3xqnd60o.png" alt="" />
            <p>npm</p>
          </div>
        </div>
        <h2 className='skill-title'>Design</h2>
        <div className="skills">
          <div className="skill">
            <img src="https://freelogopng.com/images/all_img/1656733637logo-canva-png.png" alt="" />
            <p>Canva</p>
          </div>
          <div className="skill">
            <img src={Figma}alt="" />
            <p>Figma</p>
          </div>
        </div>
        <h2 className='skill-title'>Communication</h2>
        <div className='skills'>
          <div className="skill">
            <img src="https://www.pngkey.com/png/full/984-9844126_slack-new-slack-logo-png.png" alt="" />
            <p>Slack</p>
          </div>
          <div className="skill">
            <img src="https://www.freepnglogos.com/uploads/skype-logo-png/skype-logo-vector-icon-template-clipart-download-0.png" alt="" />
            <p>Skype</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/2491px-Google_Meet_icon_%282020%29.svg.png" alt="" />
            <p>Google Meet</p>
          </div>
          <div className="skill">
            <img src="https://static.vecteezy.com/system/resources/previews/012/871/376/original/zoom-logo-in-blue-colors-meetings-app-logotype-illustration-free-png.png" alt="" />
            <p>Zoom</p>
          </div>
        </div>
        <h2 className="skill-title">Soft Skills</h2>
        <div className="skills">
          <p className='soft-skill'>Remote Pair-Programming</p>
          <p className='soft-skill'>Communication</p>
          <p className='soft-skill'>Mentoring</p>
          <p className='soft-skill'>Collaboration</p>
          <p className='soft-skill'>Leadership</p>
          <p className='soft-skill'>Problem Solving</p>
          <p className='soft-skill'>Time Management</p>
          <p className='soft-skill'>Decision Making</p>
          <p className='soft-skill'>Critical Thinking</p>
        </div>
      </div>

    </section>
  )
}

export default About