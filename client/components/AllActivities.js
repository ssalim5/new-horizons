import React from "react";
import { connect } from "react-redux";
import { fetchActivities} from "../store/allActivitiesStore";
import MappedActivity from "./utilities/MappedActivity";


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
            <div key={activity.id} className={activity.useractivities ? 
              (activity.useractivities.length>0 ? `activity-${activity.useractivities[0].score}`:"activity-x") 
            : "activity"}>
              <MappedActivity activity={activity} />
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
