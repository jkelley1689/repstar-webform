import { GET_USER }  from './gql/gqlFunctions'
import { useGQLQuery } from './gql/useGQLFunctions'

export default function FetchUser(id){

    const {data,isLoading, error} = useGQLQuery('getUser',GET_USER, {
        id: id
    })
    console.log(data)

    if(isLoading) return <div>Loading....</div>
    if(error) return <div>{error}</div>
    
    return(
        <div className="user">
            <div>
                <h1>{data.getUser.firstName}</h1>
                <h1>{"Loading"}</h1>
                <h1>{"Loading"}</h1>
                <h1>{"Loading"}</h1>
                <h1>{"Loading"}</h1>
                <h1>{"Loading"}</h1>
            </div>
        </div>
    )
}
