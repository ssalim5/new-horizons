import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSingleActivity} from "../store"
import { useParams } from 'react-router-dom'
import RatingsModal from './utilities/RatingModal'
import Map from './Map'
import {activityQueries} from './utilities/MapsTextSearch'

export default function SingleActivity(){
    const dispatch = useDispatch()
    const params = useParams()
    const activity = useSelector((state)=> state.singleActivity)

    useEffect(()=>{
        dispatch(fetchSingleActivity(params.id))
    },[])

    if(!activity.useractivities){
        return(
            <div>Loading</div>
        )
    }
    return(
        <div className="singleActivity module">
            <div className="singleActivity-body">
                <div className="singleActivity-image">
                    <img src= {activity.imageUrl}/>
                </div>
                <div className="singleActivity-text">
                    <div className="singleActivityInfo">
                        <h2>{activity.name}</h2>
                        <p>Description: {activity.description}</p>
                        <p>ExertionLevel: {activity.exertionLevel}</p>
                        <p>{activity.outside ? "Outdoors" : "Indoors"}</p>
                        <p>Rating: {activity.useractivities.length>0 ? activity.useractivities[0].score : "n/a"}</p>
                    </div>
                    <RatingsModal activity={activity} />
                </div>
            </div>
            <div className="map">
                <Map activityQuery={activityQueries[activity.name]} />
            </div>

        </div>
    )
}
