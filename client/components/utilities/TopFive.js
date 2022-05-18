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
                    <div key={activity.id} className="singleItem clickable">
                        <Link to ={`/activities/${activity.id}`}>
                            {/* <div className="singleItem-img"> */}
                                <img src= {activity.imageUrl} className="singleItem-image"/>
                            {/* </div> */}
                            <h3>{activity.name}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}