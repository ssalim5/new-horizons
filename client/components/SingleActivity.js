import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSingleActivity} from "../store"
import { useParams } from 'react-router-dom'
import RatingsModal from './utilities/RatingModal'
import Map from './Map'
import {activityQueries} from './utilities/MapsTextSearch'

export default function SingleActivity(props){
    const {activity}=props
    const dispatch = useDispatch()
    const params = useParams()
    // const activity = useSelector((state)=> state.singleActivity)

    // useEffect(()=>{
    //     dispatch(fetchSingleActivity(activityId))
    // },[])

    // if(!activity.useractivities){
    //     return(
    //         <div>Loading</div>
    //     )
    // }
    console.log(activity)
    return(
        <div className="singleActivity module">
            <div className="singleActivity-body">
                {/* <div > */}
                <img className="singleActivity-image" src= {activity.imageUrl}/>
                {/* </div> */}
                {/* <h2>{activity.name}</h2> */}
                <RatingsModal activity={activity} />
                <div className="singleActivity-text">
                    {/* <div className="singleActivityInfo"> */}
                        {/* <p>Rating: {activity.useractivities.length>0 ? activity.useractivities[0].score : "n/a"}</p> */}
                        <p>ExertionLevel: {activity.exertionLevel}</p>
                        <p>{activity.outside ? "Outdoors" : "Indoors"}</p>
                        <p>Description: {activity.description}</p>
                    {/* </div> */}
                </div>
            </div>
            <div className="map">
                <Map activityQuery={activityQueries[activity.name]} />
            </div>

        </div>
    )
}
