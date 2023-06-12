import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <nav>
                <h1>Prantosh.</h1>
                <ul className='menu'>

                    <li>
                        <a href="#home"> 
                        Home
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar