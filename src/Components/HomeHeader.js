import React from 'react'
import logo from '../Images/icon.png'


import './HomeHeader.css'


const HomeHeader = () => {
    
    return (
        <div className='header'>
            <nav className='navbar'>
                <img src={logo} alt='logo'/>
            </nav>
        </div>
    )
}

export default HomeHeader