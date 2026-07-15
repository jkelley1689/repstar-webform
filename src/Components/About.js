import React, { useState } from 'react'
import './About.css'
import ReactStars from 'react-stars'

import instagram from '../Images/Instagram - Original.png'
import facebook from '../Images/Facebook - Original.png'
import twitter from '../Images/Twitter - Original.png'
import linkedIn from '../Images/LinkedIn - Original.png'

var AWS = require('aws-sdk')

const About = (props) => {

    const mailto = `mailto:${props.user.email}`
    const cell = `tel:${props.user.cellPhone}`
    const work = `tel:${props.user.workPhone}`


    const [photo,setPhoto] = useState(null)

    var s3 = new AWS.S3({accessKeyId:'', 
    secretAccessKey: '', 
    region:'us-east-1'})

    var params = {
        Bucket: 'repstar-storage-110344f6162513-staging/public',
        Key: props.user.image
    }

    s3.getSignedUrl('getObject', params, function(err,url){
        console.log('signed url:', url)
        setPhoto(url)
    })
    
    console.log(props.user)

    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={photo} alt='john' />
                <div className='col-2'>
                    <span className='line'></span>
                    <p>{props.user.firstName + " " + props.user.lastName}</p>
                    <div className='starsContainer'>
                        <ReactStars className='stars' count={5} edit={false} size={32} color2={'#FF8C00'} value={props.user.avgRating}></ReactStars>
                        <p className='rating'>{isNaN(props.user.avgRating) ? <p> </p> : props.user.avgRating}</p>
                    </div>
                    <a href={mailto}>{props.user.email}</a>
                    <p>{props.user.title} at {props.user.companyName}</p>
                    <a href={cell}>Cell: {props.user.cellPhone}</a>
                    <a href={work}>Work: {props.user.workPhone}</a>
                    <div className='social'>
                        <a href={props.user.facebook} > <img src={facebook} alt='fb' onClick={props.user.facebook}></img></a>
                        <a href={props.user.instagram} > <img src={instagram} alt='insta' onClick={props.user.instagram}></img></a>
                        <a href={props.user.twitter} > <img src={twitter} alt='tw' onClick={props.user.twitter}></img></a>
                        <a href={props.user.linkedIn} > <img src={linkedIn} alt='linked' onClick={props.user.linkedIn}></img></a>
                    </div>
                    <p>About </p>
                    <span className='line'></span>
                    <p>{props.user.aboutMe}</p>
                </div>
            </div>
        </div>
    )
}

export default About