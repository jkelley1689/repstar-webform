import React from 'react'
import logo from '../Images/favicon.ico'

import './ReviewHeader.css'


const ReviewHeader = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <img src={logo} alt='logo'/>
            </nav>
        </div>
    )
}

export default ReviewHeader