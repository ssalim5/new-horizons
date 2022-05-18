import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../store/SingleUserStore";
import { fetchActivities} from "../store/allActivitiesStore";
import { getUserActivities } from "../store/userActivitiesStore";
import {fetchFriends, deleteFriend} from "../store/friendsStore"
import MappedActivity from "./utilities/MappedActivity";


class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchUserData(this.props.match.params.id);
    this.props.fetchFriends(this.props.match.params.id);
    this.props.fetchActivities()
    this.props.getUserActivities()
  }

  render() {
    const user = this.props.userData;
    const friends = this.props.friends;
    const recent = this.props.activities
    const userActivities = this.props.userActivities
    const recent5 = userActivities.slice(0,5)
    const reverse = recent5.reverse()

    return (
      <div>
      <div>
        {user ? (
          <div>
            <h2>USER: {user.username}</h2>
            <h2>USER EMAIL: {user.email}</h2>
            {/* <div><img src= {user.imageUrl}/></div> */}
           {/* <div> <Link to={`/user/modify/${this.props.match.params.id}`}>Modify </Link></div> */}
           <h1>5 MOST RECENT ACTIVITIES:</h1>
           <div id="allActivities">
        {recent5.map((activity) => {
          return(
            <Link to ={`/activities/${activity.id}`}>
            <img src= {activity.imageUrl} className="singleItem-image"/>
            <div>
                <h3>{activity.name}</h3>
            </div>
        </Link>

            // <div key={activity.id} className="activity-x">
            // <h1>{activity.name}</h1>
            // </div>
          )
         })}
      </div>
           </div>
           )
      : (
        "There is no user data"
      )}
    </div>
    <h2><Link to={`/addfriends/${this.props.match.params.id}`}>Add Friends</Link></h2>
    <h2>Friends List:</h2>
    <div> {friends.map((friend) => {
          return (
            <div>
            <Link to={`/users/${friend.id}`} key={friend.id}>
            <div className="friend" key={friend.id}>
            <h2 className="name">{friend.username}</h2>
            </div>
            </Link>
             <form onSubmit={(ev) => ev.preventDefault()}>
               <div className= "remove"></div>
             <button
             type="submit"
               className= "x-button"
               onClick={() => this.props.deleteFriend(friend.id)}
             >
               Remove Friend
             </button>
             </form>
               </div>
          );
        })}
        </div>
    </div>
    )
  }
}

const mapState = (state) => {
  return {
    userData: state.user,
    friends: state.friends,
    activities: state.activities,
    userActivities: state.userActivities
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchUserData: (id) => dispatch(fetchUser(id)),
    fetchFriends: (id) => dispatch(fetchFriends(id)),
    deleteFriend: (id) => dispatch(deleteFriend(id)),
    fetchActivities: () => dispatch(fetchActivities()),
    getUserActivities: () => dispatch(getUserActivities())
  };
};

export default connect(mapState, mapDispatch)(UserProfile);
