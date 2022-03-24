import { API } from 'aws-amplify'
import { updateReview } from '../../GraphQL/mutations'

export default async function Update(id,completedReview){

    const updatedReview = {
        id: id,
        title: completedReview.title,
        comment: completedReview.comment,
        starRating: completedReview.starRating,
        reviewStatus: completedReview.reviewStatus,
        _version: completedReview._version
    }

    await API.graphql({
        query: updateReview,
        variables: {input: updatedReview},
        authMode: 'API_KEY',
        authToken: 'da2-o5ssmndjnnbfnnx6b3ggnypu3a'
    })
    
}