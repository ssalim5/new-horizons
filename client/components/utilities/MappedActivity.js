import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'



export default function MappedActivity(props){
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
                    <div key={activity.id} className={activity.hasOwnProperty("score") ? `rating-${Math.ceil(activity.score)} singleItem clickable`:(activity.hasOwnProperty("useractivities") ? (activity.useractivities.length>0 ? `rating-${activity.useractivities[0].score} singleItem clickable`:"rating-x singleItem clickable") : "loading")}>
                        <Link to ={`/activities/${activity.id}`}>
                            <img src= {activity.imageUrl} className="singleItem-image"/>
                            <div>
                                <h3>{activity.name}</h3>
                                <p>{activity.hasOwnProperty("score") ? `recommended: ${activity.score}`:(activity.hasOwnProperty("useractivities") ? (activity.useractivities.length>0 ? `rating: ${activity.useractivities[0].score}`:"No rating") : "loading")}</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
