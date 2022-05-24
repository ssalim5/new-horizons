import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../store/SingleUserStore";
import { fetchActivities} from "../store/allActivitiesStore";
import { getFriendActivities } from "../store/friendsActivitiesStore";
import {fetchFriends, deleteFriend} from "../store/friendsStore"
import MappedActivity from "./utilities/MappedActivity";
import {Image} from 'react-bootstrap'


class FriendsActivities extends React.Component {


  componentDidMount() {
    // console.log("ID", this.props.match.params.id)
    this.props.fetchUserData(this.props.match.params.id);
    this.props.getFriendActivities(this.props.match.params.id)
  }

  render() {
    const user = this.props.userData;
    // console.log("activities", this.props.friendActivities)
    const friend = this.props.friendActivities.activities || ''
    // console.log("activities!!", friend)
    // const friendActivities = this.props.friendActivities

    return (
      <div className="friendProfile">
        <div className="userInfo">
          <div className="userInfoImage">
            <Image roundedCircle id="userProfileImage" src= {user.imageUrl}/>
          </div>
          <div className="userInfoText">
            <p>username: {user.username}</p>
            <p>email: {user.email}</p>
          </div>
        </div>
        <div id="home" className="component">
          <div id="topFive-recommendations" className="module">
            <h2>{`${user.username}'s Activities`}</h2>
            <a> </a>
            <div className="topFive-nav">
              {/* <button className ="clickable" type="button" onClick={()=>reverseSort("rec")}>reverse</button> */}
            </div>
            <MappedActivity data={friend.slice(0,5)}/>
          </div>
        </div>
      </div>
    )}}
        {/* {user ? (
          <div>
            <img className="resize" src= {user.imageUrl}/>
            <h2>Friends Username: {user.username}</h2>
            <h2>Friends Email: {user.email}</h2>
      </div>
           )
      : (
        "There is no user data"
      )}
      </div>
        <div>
        {friend.length ? (<div>
          <h1>Friends ACTIVITIES:</h1>
               <div id="allActivities">
          //   {friend.map((activity) => {
              return(
                <Link to ={`/activities/${activity.id}`}>
                <img src= {activity.imageUrl} className="singleItem-image"/>
                <div>
                    <h3>{activity.name}</h3>
                </div>
            </Link>)}
          )}
            </div>
            </div>
              ) : (
              "There is no activity data"
              )}
              </div>
           </div>
    )}} */}


const mapState = (state) => {
  return {
    userData: state.user,
    friendActivities: state.friendActivities
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchUserData: (id) => dispatch(fetchUser(id)),
    getFriendActivities: (id) => dispatch(getFriendActivities(id))
  };
};

export default connect(mapState, mapDispatch)(FriendsActivities);
