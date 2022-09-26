import React, { useEffect } from 'react'
import ReviewHeader from '../../Components/ReviewHeader'

const NotFound = () => {

useEffect(() => {
    document.title = 'Repstar - Page Not Found'
},[])

  return (
    <div>
        <ReviewHeader />
        <text>404 Page Not Found</text>
    </div>
  )
}

export default NotFound