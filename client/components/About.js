import React from "react";
import { connect } from "react-redux";

export class About extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return(
      <div>
        <div className="about-page">
          <div className="heading">
            <h1> New Horizons </h1>
          </div>
          <div className="about-description">
            <p1>
            New-horizons is a simple application to get people to expand their horizons and try new things. We wanted to be able to recommend users new activities based on previous activities they've tried.
            We built a simple collaborative filtering recommendations system with the mathjs library. Users get recommendations to find new things to try that they might like. We have plenty of features we would still like to add like connecting users on our platform so they can try out new activities together. As well as an option to provide feedback to users about the features we think they would like most in an activity. We may also want to suggest new activities to users either at random or specifically against our own recommendations to get people to really push their boundaries. We would also like to expand our database to have even more activities and users to give more and better recommendations.
            </p1>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatch)(About);
