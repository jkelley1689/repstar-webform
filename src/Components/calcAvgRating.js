import { filterFinishedReviews } from './filterFinishedReviews'

const calcAvgRating = (reviews) => {
    const finishedReviews = filterFinishedReviews(reviews)
    let reviewSum = 0

    finishedReviews.map(calcSum)
    function calcSum(r){
        reviewSum = reviewSum + r.starRating
    }

    let avg = reviewSum/finishedReviews.length

    return parseFloat(avg.toFixed(1))
}

export default calcAvgRating