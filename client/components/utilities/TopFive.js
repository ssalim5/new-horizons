import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'



export default function topFive(props){
    const {data}=props

    if(!data){
        return(
            <div>Loading</div>
        )
    }
    return(
        <div className="util-component">
            {data.map((activity)=>{
                return(
                    <div key={activity.id} className={activity.score ? `rating-${Math.ceil(activity.score)} singleItem clickable`:`rating-${activity.useractivities[0].score} singleItem clickable`}>
                        <Link to ={`/activities/${activity.id}`}>
                            <img src= {activity.imageUrl} className="singleItem-image"/>
                            <div>
                                <h3>{activity.name}</h3>
                                <p>{activity.score ? `recommended: ${activity.score}` : `rating: ${activity.useractivities[0].score}`}</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}