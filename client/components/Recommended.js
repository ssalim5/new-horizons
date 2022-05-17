import React from "react";
import { connect } from "react-redux";
// import { fetchActivities} from "../store/allActivitiesStore";
import { fetchUserRecommendations } from "../store/userRecommendations";
import { Link } from 'react-router-dom'


export class Recommended extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount(){
    // this.props.fetchRecommended();  
  }
  render() {
    console.log("RENDERING",this.props.recommended)
    return  (
      <div className="recommendations-container">
        <div>Based on your previous activity rankings here are some more activities you might like</div>
        <ul className="activities-container">
        {this.props.recommended? this.props.recommended.sort((a,b)=>{
          console.log ("A",a, "B",b)
          return (a.score>b.score?-1:1)
        }).slice(0,6).
        map((activity) => {
          return(
            <Link to ={`/activities/${activity.id}`}key={activity.id} className="activity-container">
            <div key={activity.id} >
              <div> Name: {activity.name} </div>
              <img className="activityImage" src={activity.imageUrl} />
              <div> Score: {activity.score}</div>
            </div>
            </Link>
          )
          }):""}
        </ul>
      </div>
    )
  }
}


const mapState = (state) => {
  return {
    recommended: state.recommended
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchRecommended: () => dispatch(fetchUserRecommendations()),
  };
};

export default connect(mapState, mapDispatch)(Recommended);
