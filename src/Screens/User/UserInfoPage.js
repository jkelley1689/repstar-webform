import React, { useEffect } from "react";
import { useParams } from "react-router";

import { GET_USER }  from '../../Components/apiFunctions/gql/gqlFunctions'
import { useGQLQuery } from '../../Components/apiFunctions/gql/useGQLFunctions'

import './UserInfoPage.css'
import Navbar from "../../Components/Navbar";
import About from "../../Components/About";
import { Reviews } from "../../Components/Reviews";
import calcAvgRating from "../../Components/calcAvgRating";


const UserInfoPage = () => {

    useEffect(() => {
        document.title = 'Repstar - View Salesperson Information and Reviews'
    },[])

    const { id } = useParams()

    const {data,isLoading, error} = useGQLQuery('getUser',GET_USER, {
        id: id
    })

    if(isLoading) return <div>Loading....</div>

    const avgRating = calcAvgRating(data.getUser.Reviews.items)

    const user = {
        firstName: data.getUser.firstName,
        lastName: data.getUser.lastName,
        email: data.getUser.email,
        companyName: data.getUser.Profile.companyName,
        title: data.getUser.Profile.title,
        image: data.getUser.Profile.image,
        cellPhone: data.getUser.Profile.cellPhone,
        primaryLanguage: data.getUser.Profile.primaryLanguage,
        zipCode: data.getUser.Profile.zipCode,
        aboutMe: data.getUser.Profile.aboutMe,
        workPhone: data.getUser.Profile.workPhone,
        avgRating: avgRating
    }

    if(error) return <div>{error}</div>

    return(
        <div>
            <Navbar />
            <About user={user} />
            <Reviews reviews={data.getUser.Reviews.items}/>
        </div>
    )
    
}

export default UserInfoPage