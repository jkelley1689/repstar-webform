import React from 'react'
import './Reviews.css'
import { filterFinishedReviews } from './filterFinishedReviews'

import ReactStars from 'react-stars'
import convertDate from './convertDate'

export const Reviews = (props) => {

    const reviews = props.reviews
    const finishedReviews = filterFinishedReviews(reviews)

    console.log('before sort:')
    console.log(finishedReviews)

    finishedReviews.sort((date1, date2) => new Date(date2.updatedAt) - new Date(date1.updatedAt))

    console.log('after sort')
    console.log(finishedReviews)
    
  return (
    <div className='reviews' id='reviews'>
        <div className='container'>
            <h2>Reviews</h2>
            <span className='line'></span>
            {finishedReviews.map(review => (
            <div className='content' key={review.id}>
                <div className='card'>
                    <div className='titleContainer'>
                        <ReactStars className='stars' count={5} edit={false} size={24} color2={'#FF8C00'} value={review.starRating} />
                        <p>{review.title}</p>
                    </div>
                    <p>{convertDate(review.updatedAt)}</p>
                    <p>{review.comment}</p>
                    <p><span>{review.customerFirstName} {review.customerLastName}</span></p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
