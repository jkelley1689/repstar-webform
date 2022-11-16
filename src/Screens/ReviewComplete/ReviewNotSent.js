import React, { useEffect } from 'react'
import ReviewHeader from '../../Components/ReviewHeader'

import './ReviewNotSent.css'

export default function ReviewNotSent(){

    useEffect(() => {
        document.title = 'Repstar - Review Already Completed'
    },[])

    return(
        <div className='reviewNotSent'>
            <ReviewHeader />
            <h1>This review has already been submitted, edits to the review are not allowed</h1>
        </div>
    )
}