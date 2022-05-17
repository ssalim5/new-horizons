import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

Modal.setAppElement("#app")

export default function MappedActivity (props) {
    let {activity} = props
    
    return(
        <Link to ={`/activities/${activity.id}`}>
            <img src= {activity.imageUrl} className = "activityImage"/>
            <div>
            <h2>{activity.name}</h2>
            <p>rating: {activity.useractivities ? (activity.useractivities.length>0 ? activity.useractivities[0].score:"n/a") : "loading"}</p>
            </div>
        </Link>
    )
}