import { Rating } from '@mui/material'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FetchReview from '../../Components/apiFunctions/getReview'
import { Formik } from 'formik'
import * as Yup from 'yup'
import './helper.css'
import { graphQLClient } from '../../Components/apiFunctions/gql/useGQLFunctions'
import { useMutation } from 'react-query'
import { UPDATE_REVIEW } from '../../Components/apiFunctions/gql/gqlFunctions'
import { CREATE_REVIEW_NOTIFICATIONS } from '../../Components/apiFunctions/gql/gqlFunctions'

export default function ReviewForm(){
    const { id } = useParams()
    const blankReview = FetchReview(id)

    let review = {}
    let notification = {}
    let navigate = useNavigate()

    const newReview = useMutation((updatedReview) => {
        return graphQLClient.request(UPDATE_REVIEW,updatedReview)
    })

    const newReviewNotification = useMutation((newNotification) => {
        return graphQLClient.request(CREATE_REVIEW_NOTIFICATIONS, newNotification)
    })

    function checkIfCompleted(){
        if(blankReview.getReview._version > 1){
            return true
        }
    }
    

    return(
        <div className='app'>
            <h1>Please fill out the review below</h1>
            <Formik
            initialValues={{ title: "" , comment: "", starRating: 0}}
            onSubmit={async values => {
                if(checkIfCompleted()){
                    navigate('/review-already-complete')
                }else{
                await new Promise(resolve => setTimeout(resolve, 500));
                //alert(JSON.stringify(values, null, 2));
                console.log(blankReview.getReview._version)
                review = {input:{
                    id: id, 
                    title:values.title,
                    comment:values.comment,
                    starRating:parseInt(values.starRating),
                    reviewStatus:3,
                    _version:blankReview.getReview._version
                }}
                notification = {input:{
                    reviewID: id,
                    customerID: blankReview.getReview.customerID,
                    userID: blankReview.getReview.userID,
                    title: values.title,
                    comment: values.comment,
                    starRating: parseInt(values.starRating),
                    reviewStatus: 3,
                    reviewCatagory: blankReview.getReview.reviewCatagory
                }}
                console.log(review)
                newReview.mutate(review)
                newReviewNotification.mutate(notification)
                navigate('/complete')
                }
            }}
            validationSchema={Yup.object().shape({
                title: Yup.string().required("Required"),
                comment: Yup.string().required("Required"),
                //stars: Yup.string().required("Required")
            })}
            >
            {props => {
                const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset
                } = props;
                return (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title" style={{ display: "block" }}>
                    Title
                    </label>
                    <input
                    id="title"
                    placeholder="Title"
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        errors.title && touched.title
                        ? "text-input error"
                        : "text-input"
                    }
                    />
                    {errors.title && touched.title && (
                    <div className="input-feedback">{errors.title}</div>
                    )}
                    <label htmlFor="comment" style={{ display: "block" }}>
                    Please tell me about your experience with me
                    </label>
                    <input
                    id="comment"
                    placeholder="Please place your comment here"
                    type="text"
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        errors.comment && touched.comment
                        ? "text-input error"
                        : "text-input"
                    }
                    />
                    {errors.comment && touched.comment && (
                    <div className="input-feedback">{errors.comment}</div>
                    )}
                    <label htmlFor="stars" style={{ display: "block" }}>
                    Please rate your experience with me (out of 5 stars)
                    </label>
                    <Rating
                    name="starRating"
                    value={parseInt(values.starRating)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    <button
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                    >
                    Reset
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                    Submit
                    </button>
                </form>
                );
            }}
            </Formik>
        </div>
    )
}