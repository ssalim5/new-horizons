import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { postUserActivity, putUserActivity } from '../../store/singleActivityStore'
import { _removeRec } from '../../store/userRecommendations'

export default function RatingsModal(props){
    const {activity} = props

    const dispatch = useDispatch()
    const sortDirection = useSelector((state)=> state.utilities.homeSortAct)

    function onChange(event){
        if(activity.hasOwnProperty("useractivities")){
            if(activity.useractivities.length>0){
                dispatch(putUserActivity(activity.id,event.target.value,sortDirection))
            }else{
                dispatch(postUserActivity(activity.id,event.target.value,sortDirection))
                dispatch(_removeRec(activity.id))
            }
        }
        else{
            dispatch(postUserActivity(activity.id,event.target.value,sortDirection))
                dispatch(_removeRec(activity.id))
        }
    }

    let checked = 0
    if(activity.hasOwnProperty("useractivities")){
        if(activity.useractivities.length>0){
            checked = Number(activity.useractivities[0].score)
        }
    }

    return(
        <div className="rating">
            <h3>{checked ? "Update Rating" : "Rate Activity"}</h3>
            <form className="ratingStars" onChange={onChange}>
                <input type="radio" id="star5" name="rate" value="5" defaultChecked={checked===5}/>
                <label htmlFor="star5" title="text">5 stars</label>

                <input type="radio" id="star4" name="rate" value="4" defaultChecked={checked===4}/>
                <label htmlFor="star4" title="text">4 stars</label>

                <input type="radio" id="star3" name="rate" value="3" defaultChecked={checked===3}/>
                <label htmlFor="star3" title="text">3 stars</label>

                <input type="radio" id="star2" name="rate" value="2" defaultChecked={checked===2}/>
                <label htmlFor="star2" title="text">2 stars</label>

                <input type="radio" id="star1" name="rate" value="1" defaultChecked={checked===1}/>
                <label htmlFor="star1" title="text">1 star</label>
            </form>
        </div>
    )
}
