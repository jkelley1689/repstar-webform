import React, { useEffect } from 'react'
import ReviewHeader from '../../Components/ReviewHeader'

import './ReviewComplete.css'

export default function ReviewComplete(){

    useEffect(() => {
        document.title = 'Repstar - Review Completed'
    },[])

    return(
        <div className='reviewComplete'>
            <ReviewHeader />
            <h1>Thank you for your submission, your review is extremely helpful to me!</h1>
        </div>
    )
}