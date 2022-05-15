import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSingleActivity} from "../store"
import { useParams } from 'react-router-dom'
import RatingsModal from './utilities/RatingModal'


export default function SingleActivity(){
    const dispatch = useDispatch()
    const params = useParams()
    const activity = useSelector((state)=> state.singleActivity)
    
    useEffect(()=>{
        dispatch(fetchSingleActivity(params.id))
    },[])

    if(!activity){
        return(
            <div>Loading</div>
        )
    }
    return(
        <div>
            <div><img src= {activity.imageUrl}/></div>
            <div><h2>ExperienceNeeded: {activity.experienceNeeded}</h2></div>
            <div><h2>ExertionLevel: {activity.exertionLevel}</h2></div>
            <div><h2>Number of People: {activity.numberOfPeople}</h2></div>
            <div><h2>Venue: {activity.venue}</h2></div>
            <div><h2>Time: {activity.time}</h2></div>
            <div><h2>Price: {activity.price}</h2></div>
            <div><h2>Description: {activity.description}</h2></div>
            <RatingsModal activity={activity} />
        </div>
    )
}











// class SingleActivity extends React.Component{
//     constructor(){
//         super()
//     }
//     componentDidMount(){
//         this.props.fetchSingleActivity(this.props.match.params.id)
//     }

//     render(){
//         const singleActivity = this.props.singleActivity
//         //console.log("ACTIVE", singleActivity.id)
//         if(!singleActivity){
//             return(
//                 <div>Loading</div>
//             )
//         }
//         return (
//                 <div>
//                     <div><img src= {singleActivity.imageUrl}/></div>
//                     <div><h2>ExperienceNeeded: {singleActivity.experienceNeeded}</h2></div>
//                     <div><h2>ExertionLevel: {singleActivity.exertionLevel}</h2></div>
//                     <div><h2>Number of People: {singleActivity.numberOfPeople}</h2></div>
//                     <div><h2>Venue: {singleActivity.venue}</h2></div>
//                     <div><h2>Time: {singleActivity.time}</h2></div>
//                     <div><h2>Price: {singleActivity.price}</h2></div>
//                     <div><h2>Description: {singleActivity.description}</h2></div>
//                     {singleActivity.useractivities ? <RatingsModal activityId={singleActivity.id} /> : ""}
//                 </div>
//         )
//     };
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     singleActivity: state.singleActivity
//   }
// }
// const mapDispatch = (dispatch) =>{
//     return{
//         fetchSingleActivity: (id) => dispatch(fetchSingleActivity(id)),
//     }
// }

// export default connect(mapState, mapDispatch)(SingleActivity)
