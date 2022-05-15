import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

Modal.setAppElement("#app")

export default function MappedActivity (props) {
    let {activity} = props
    
    return(
        <Link to ={`/activities/${activity.id}`}>
            <h2>{activity.name}</h2>
            <img src= {activity.imageUrl}/>
        </Link>
    )
}