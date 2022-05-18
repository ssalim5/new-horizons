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

  changeSort(sortType){

  }

  render() {
    return(
      <div id="allActivities" className="module">
        <h2>All Activities</h2>
        <button>a-z</button>
        <button>z-a</button>
        <MappedActivity data={this.props.activities}/>
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
    fetchActivities: (sort) => dispatch(fetchActivities()),
  };
};

export default connect(mapState, mapDispatch)(AllActivities);
