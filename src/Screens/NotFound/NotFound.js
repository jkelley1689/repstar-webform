import React, { useEffect } from 'react'
import ReviewHeader from '../../Components/ReviewHeader'

import './NotFound.css'

const NotFound = () => {

useEffect(() => {
    document.title = 'Repstar - Page Not Found'
},[])

  return (
    <div>
        <ReviewHeader />
        <div className='notFound'>
            <h2>404 Page Not Found</h2>
        </div>
    </div>
  )
}

export default NotFound