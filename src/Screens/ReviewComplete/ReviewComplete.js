import React, { useEffect } from 'react'

export default function ReviewComplete(){

    useEffect(() => {
        document.title = 'Repstar - Review Completed'
    },[])

    return(
        <h1>Thank you for your submission, your review is extremely helpful to me!</h1>
    )
}