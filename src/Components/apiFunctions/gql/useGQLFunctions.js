import { GraphQLClient } from 'graphql-request'
import { useQuery } from 'react-query'


const endpoint  = 'https://5sz72i2mazbhhmcg3pfrvseyai.appsync-api.us-east-1.amazonaws.com/graphql'
    const apiToken = 'da2-axvfc6iubffuzna7r7xtdzm7bm'
    const headers = {
        headers: {
            'x-api-key': apiToken
        }
    }

export const graphQLClient = new GraphQLClient(endpoint, headers)

export const useGQLQuery = (key,query,variables,config={}) => {

    const fetchData = async () => await graphQLClient.request(query, variables)

    return useQuery(key,fetchData,config)

}
