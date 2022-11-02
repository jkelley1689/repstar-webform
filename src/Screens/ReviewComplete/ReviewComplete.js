import React, { useEffect } from 'react'
import ReviewHeader from '../../Components/ReviewHeader'

export default function ReviewComplete(){

    useEffect(() => {
        document.title = 'Repstar - Review Completed'
    },[])

    return(
        <div>
            <ReviewHeader />
            <h1>Thank you for your submission, your review is extremely helpful to me!</h1>
        </div>
    )
}