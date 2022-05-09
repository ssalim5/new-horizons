import React from "react";
import { connect } from "react-redux";
import { fetchActivities} from "../store/allActivitiesStore";
import { Link } from 'react-router-dom'


export class Friends extends React.Component {
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
    <div>Friends:</div>
    <div>1:</div>
    <div></div>
    <div>Friends Activities:</div>
    <div>2:</div>
    <div>Friends Activities:</div>
    <div>3:</div>
    <div>Friends Activities:</div>
    <div>4:</div>
    <div>Friends Activities:</div>
    <div>5:</div>
    <div>Friends Activities:</div>
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

export default connect(mapState, mapDispatch)(Friends);
