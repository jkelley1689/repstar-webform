import gql from 'graphql-tag'


export const GET_REVIEW = gql` 
    query($id: ID!) {
        getReview (id: $id) {
            id
            title
            comment
            starRating
            dateTime
            userID
            customerID
            reviewCatagory
            reviewStatus
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
        }
    }`

export const LIST_REVIEWS = gql`
    query {
        listReviews {
            items {
                comment
                createdAt
                dateTime
                reviewCatagory
                reviewStatus
                starRating
                title
                _version
                id
            }
        }
    }
    `

export const UPDATE_REVIEW = gql`
    mutation($input: UpdateReviewInput!) {
        updateReview (input: $input) {
        id
        title
        comment
        starRating
        dateTime
        userID
        customerID
        reviewCatagory
        reviewStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        }
    }
    `