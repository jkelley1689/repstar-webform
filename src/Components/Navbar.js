import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../Images/logo192.png'

import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <img src={logo} alt='logo'/>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{color: '#ffffff'}} />) : (<FaBars size={30} style={{color: '#ffffff'}} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#reviews' onClick={closeMenu}>Reviews</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar