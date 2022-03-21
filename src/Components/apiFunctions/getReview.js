import { API } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { getReview } from '../../GraphQL/queries'

export default function fetchReview(id){

    const [review, setReview] = useState([])
        useEffect(() => {
            fetch()
        },[])

    async function fetch(id){
        const reviewData = await API.graphql({
            query: getReview,
            variables: id
        })
        setReview(reviewData.data.getReview)
    }
    return review
}