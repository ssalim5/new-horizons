import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleActivity} from "../store/singleActivityStore"
import { Link } from 'react-router-dom'
import RatingsModal from './utilities/RatingsModal'



class SingleActivity extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.fetchSingleActivity(this.props.match.params.id)
    }

    render(){
        const singleActivity = this.props.singleActivity
        //console.log("ACTIVE", singleActivity.id)
        return (
            <div>
                { singleActivity ?
                (
                <div>
                    <div><img src= {singleActivity.imageUrl}/></div>
                    <div><h2>ExperienceNeeded: {singleActivity.experienceNeeded}</h2></div>
                    <div><h2>ExertionLevel: {singleActivity.exertionLevel}</h2></div>
                    <div><h2>Number of People: {singleActivity.numberOfPeople}</h2></div>
                    <div><h2>Venue: {singleActivity.venue}</h2></div>
                    <div><h2>Time: {singleActivity.time}</h2></div>
                    <div><h2>Price: {singleActivity.price}</h2></div>
                    <div><h2>Description: {singleActivity.description}</h2></div>
                    {singleActivity.useractivities ? <RatingsModal activityId={singleActivity.id} /> : ""}
                </div>
                
                )
                : 'There is no activity data'
                }
                
            </div>
        )
    };
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    singleActivity: state.singleActivity
  }
}
const mapDispatch = (dispatch) =>{
    return{
        fetchSingleActivity: (id) => dispatch(fetchSingleActivity(id)),
    }
}

export default connect(mapState, mapDispatch)(SingleActivity)
