import gql from 'graphql-tag'


export const GET_REVIEW = gql` 
    query($id: ID!) {
        getReview (id: $id) {
            id
            title
            comment
            customerFirstName
            customerLastName
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

export const GET_USER = gql`
    query($id: ID!) {
        getUser(id: $id){
            id
            firstName
            lastName
            email
            Profile {
                id
                companyName
                title
                image
                cellPhone
                primaryLanguage
                zipCode
                avgRating
                aboutMe
                workPhone
            }
            Reviews {
                items{
                    id
                    title
                    comment
                    customerFirstName
                    customerLastName
                    starRating
                    dateTime
                    userID
                    customerID
                    reviewCatagory
                    reviewStatus
                    updatedAt
                }
            }
        }
    }
`

export const LIST_REVIEWS = gql`
    query {
        listReviews {
            items {
                comment
                customerFirstName
                customerLastName
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
export const CREATE_REVIEW_NOTIFICATIONS = gql`
    mutation($input: CreateReviewNotificationsInput!){
        createReviewNotifications (input: $input){
            reviewID
            customerID
            userID
            title
            comment
            starRating
            reviewStatus
            reviewCatagory
        }
    }
`

export const LIST_CUSTOMERS = gql`
    query {
        listCustomers {
            items {
                firstName
                lastName
                id
            }
        }
    }
    `