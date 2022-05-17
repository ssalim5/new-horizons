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
        <div className="topFive">
            {data.map((activity)=>{
                return(
                    <div key={activity.id} className="topFive-option">
                        <Link to ={`/activities/${activity.id}`}>
                            <h3>{activity.name}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}