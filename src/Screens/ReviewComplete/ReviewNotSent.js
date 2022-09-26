import React, { useEffect } from 'react'

export default function ReviewNotSent(){

    useEffect(() => {
        document.title = 'Repstar - Review Already Completed'
    },[])

    return(
        <h1>This review has already been submitted, edits to the review are not allowed</h1>
    )
}