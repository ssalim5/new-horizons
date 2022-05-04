import React from 'react'
import {connect} from 'react-redux'
import fetchSingleActivity from "../store/singleActivityStore"
import { Link } from 'react-router-dom'



class SingleActivity extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.fetchSingleActivity(this.props.match.params.id)
    }

    render(){
        const singleActivity = this.props.singleActivity
        return (
            <div>{ singleActivity ?
                (<div>
                    {this.props.isAdmin? <h2>ADMIN VIEW</h2> : <></>}
                    <div><img src= {singleActivity.imageUrl}/></div>
                    <div><h2>Year: {singleActivity.experienceNeeded}</h2></div>
                    <div><h2>Year: {singleActivity.exertionLevel}</h2></div>
                    <div><h2>Make: {singleActivity.numberOfPeople}</h2></div>
                    <div><h2>Model: {singleActivity.venue}</h2></div>
                    <div><h2>Color: {singleActivity.time}</h2></div>
                    <div><h2>Price: {singleActivity.price}</h2></div>
                    <div><h2>Description: {singleActivity.description}</h2></div>
                </div>)
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
        fetchSingleActivity: (id) => { dispatch(fetchSingleActivity(id)) },
    }
}

export default connect(mapState, mapDispatch)(SingleActivity)
