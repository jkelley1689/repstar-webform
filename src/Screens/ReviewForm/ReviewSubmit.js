import React from 'react'
import { useParams } from 'react-router'
import ReviewForm from '../../Components/ReviewForm'

import ReviewHeader from '../../Components/ReviewHeader'

const ReviewSubmit = () => {

    const { id } = useParams()

    


    return (
        <div>
            <ReviewHeader />
            <ReviewForm id={id}/>
        </div>
    )
}

export default ReviewSubmit