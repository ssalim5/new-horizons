import React from "react";
import { connect } from "react-redux";
import { fetchActivities, fetchActivitiesWithUserInfo} from "../store/allActivitiesStore";
import { Link } from 'react-router-dom'
import RatingsModal from './utilities/RatingsModal'


export class AllActivities extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount(){
      this.props.fetchActivities()
  }
  render() {
    return(
      <div id="allActivities">
        {this.props.activities.map((activity) => {
          return(
              
            <div className={activity.useractivities ? 
            (activity.useractivities.length>0 ? "activity-completed":"activity") 
              : "activity"} key={activity.id}>

              <Link to ={`/activities/${activity.id}`}>
                <div> Name: {activity.name} </div>
                <img src={activity.imageUrl} />
              </Link>

              {activity.useractivities ? 
              (activity.useractivities.length>0 ? <div>score: {activity.useractivities[activity.useractivities.length-1].score}</div> : <RatingsModal activityId={activity.id}/>)
              : ""}
              
            </div>
          )
         })}
      </div>
    )
  }
}


const mapState = (state) => {
  return {
    activities: state.activities
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchActivities: () => dispatch(fetchActivities()),
  };
};

export default connect(mapState, mapDispatch)(AllActivities);
