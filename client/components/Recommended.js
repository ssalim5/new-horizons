import React from "react";
import { connect } from "react-redux";
import { fetchActivities} from "../store/allActivitiesStore";
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
    return  (
      <div className="container">
    <div>Recommended Activities:</div>
    <div>1:</div>
    <div>2:</div>
    <div>3:</div>
    <div>4:</div>
    <div>5:</div>
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
    // fetchRecommended: () => dispatch(fetchRecommended()),
  };
};

export default connect(mapState, mapDispatch)(Recommended);
