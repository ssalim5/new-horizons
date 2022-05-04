import React from "react";
import { connect } from "react-redux";
import { fetchActivities} from "../store/allActivitiesStore";
import { Link } from 'react-router-dom'


export class AllActivities extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount(){
    this.props.fetchActivities();
  }
  render() {
    return  (
      <div className="container">
      {this.props.activities.map((activity) => {
        return (
          <div className="activity" key={activity.id}>
        <Link to ={`/activities/${activity.id}`}key={activity.id}>
        <div key={activity.id}>
          <div> Name: {activity.name} </div>
          <img src={activity.imageUrl} />
        </div>
        </Link>
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
