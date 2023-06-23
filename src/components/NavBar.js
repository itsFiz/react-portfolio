import React, { useEffect, useState } from 'react';
import './NavBar.css'
import {Link} from 'react-scroll'


const NavBar = () => {
    const [navbarStyle, setNavbarStyle] = useState({});

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const isScrolled = scrollTop > 0;
    
          if (isScrolled) {
            setNavbarStyle({
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)'
            });
          } else {
            setNavbarStyle({});
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <>
            <nav style={navbarStyle}>
                <h1>
                <Link className='name-logo' spy={true} smooth={true} offset={50} duration={500} to="home">
                prantosh.</Link> <span className='blink'></span>
                </h1>
                <ul className='menu'>

                    <li>
                    <Link spy={true} smooth={true} offset={50} duration={500} to="home">
                           home,
                        </Link>
                    </li>
                    <li>
                        <Link spy={true} smooth={true} offset={50} duration={500} to="about">
                           about,
                        </Link>
                    </li>
                    <li>
                    <Link spy={true} smooth={true} offset={50} duration={500} to="projects">
                           projects,
                        </Link>
                    </li>
                    <li>
                        <a href="#contact">
                            contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar