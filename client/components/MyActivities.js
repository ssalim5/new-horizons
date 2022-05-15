import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal'
import { getUserActivities } from '../store';
import MappedActivity from './utilities/MappedActivity'

Modal.setAppElement("#app")

export default function MyActivities(){
    const dispatch = useDispatch()
    const myActivities = useSelector((state)=> state.userActivities)
    
    useEffect(()=>{
        dispatch(getUserActivities())
    },[])

    if(!myActivities){
        return(
            <div>Loading</div>
        )
    }
    return(
        <div>
            {myActivities.map((activity)=>{
                return(
                    <div key={activity.id} className={`activity-${activity.useractivities[0].score}`}>
                        <MappedActivity activity={activity} />
                    </div>
                )
            })}
        </div>
    )
}

