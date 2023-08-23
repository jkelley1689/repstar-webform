import React from 'react'
import logo from '../Images/icon.png'
import text from '../Images/REPSTAR.png'


import './HomeHeader.css'


const HomeHeader = () => {
    
    return (
        <div className='header'>
            <nav className='navbar'>
                <img src={logo} alt='logo'/>
                <img src={text} alt='text'/>
            </nav>
        </div>
    )
}

export default HomeHeader