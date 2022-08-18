import React from 'react'
import { Reviews } from './Reviews'

export const filterFinishedReviews = (reviews) => {
  const finishedReviews = []
  reviews.map(r => {
    if(r.reviewStatus === 1)
        finishedReviews.push(r)
  })
  return finishedReviews
}
