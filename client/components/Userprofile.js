import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../store/singleUserStore";

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchUserData(this.props.match.params.id);
  }

  render() {
    const user = this.props.userData;
    return (
      <div>
        {user ? (
          <div>
            <h1>USER: {user.name}</h1>
            <h2>USER EMAIL: {user.email}</h2>
            <div><img src= {user.imageUrl}/></div>
           <div> <Link to={`/user/modify/${this.props.match.params.id}`}>Modify {user.name}</Link></div>
           </div>
           )
      : (
        "There is no user data"
      )}
    </div>
    )
  }
}

const mapState = (state) => {
  return {
    userData: state.userData,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchUserData: (id) => dispatch(fetchUser(id)),
  };
};

export default connect(mapState, mapDispatch)(UserProfile);
