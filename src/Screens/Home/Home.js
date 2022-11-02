import React, {useEffect} from 'react'
import HomeHeader from '../../Components/HomeHeader'

import underConstruction from '../../Images/SeekPng.com_under-construction-png_4412106.png'
import './Home.css'


const Home = () => {

    useEffect(() => {
        document.title = 'Repstar'
    },[])

  return (
    <div>
        <HomeHeader />
        <div className='underConstruction'>
            <img className='image' src={underConstruction} alt='logo'/>
        </div>
    </div>
  )
}

export default Home