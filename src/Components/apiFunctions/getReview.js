import { GET_REVIEW }  from './gql/gqlFunctions'
import { useGQLQuery } from './gql/useGQLFunctions'

export default function FetchReview(id){

    const {data,isLoading, error} = useGQLQuery('getReview',GET_REVIEW, {
        id: id
    })
    //console.log(data)

    if(isLoading) return <div>Loading....</div>
    if(error) return <div>{error}</div>
    return data
}
