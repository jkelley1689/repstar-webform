import React from "react";
import { useParams } from "react-router";

import { GET_USER }  from '../../Components/apiFunctions/gql/gqlFunctions'
import { useGQLQuery } from '../../Components/apiFunctions/gql/useGQLFunctions'

import './UserInfoPage.css'
import Img from '../../Images/17fd0045-3500-4c01-9a33-630f8b55d002.jpg'

//const User = lazy(() => import('../Components/User'))

const UserInfoPage = () => {
    const { id } = useParams()

    const {data,isLoading, error} = useGQLQuery('getUser',GET_USER, {
        id: id
    })

    if(isLoading) return <div>Loading....</div>
    if(error) return <div>{error}</div>

    return(
        <div className="u">
            <div className="u-left">
                <div className="u-left-wrapper">
                    <h2 className="u-intro">Hello, My Name is</h2>
                    <h1 className="u-name">{data.getUser.firstName} {data.getUser.lastName}</h1>
                    <div className="u-title">
                        <div className="u-title-wrapper">
                            <div className="u-title-item">{data.getUser.Profile.title}</div>
                            <div className="u-title-item">{data.getUser.Profile.companyName}</div>
                        </div>
                    </div>
                    <div className="u-email">{data.getUser.email}</div>
                    <p className="u-desc">
                        {data.getUser.Profile.aboutMe}
                    </p>
                </div>
            </div>
            <div className="u-right">
                <img src={Img} alt="" className="u-img"></img>
            </div>
        </div>
    )
    
}

export default UserInfoPage