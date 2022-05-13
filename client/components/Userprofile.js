import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../store/SingleUserStore";
import {fetchFriends, deleteFriend} from "../store/friendsStore"


class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchUserData(this.props.match.params.id);
    this.props.fetchFriends(this.props.match.params.id);
  }

  render() {
    const user = this.props.userData;
    const friends = this.props.friends;
    return (
      <div>
      <div>
        {user ? (
          <div>
            <h1>USER: {user.username}</h1>
            <h2>USER EMAIL: {user.email}</h2>
            <div><img src= {user.imageUrl}/></div>
           {/* <div> <Link to={`/user/modify/${this.props.match.params.id}`}>Modify </Link></div> */}
           <div><Link to={`/addfriends/${this.props.match.params.id}`}>Add Friends</Link></div>
           </div>
           )
      : (
        "There is no user data"
      )}
    </div>
    <div>Friends List</div>
    <div> {friends.map((friend) => {
          return (
            <div>
            <Link to={`/users/${friend.id}`} key={friend.id}>
            <div className="friend" key={friend.id}>
            <h1 className="name">{friend.username}</h1>
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
    friends: state.friends
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchUserData: (id) => dispatch(fetchUser(id)),
    fetchFriends: (id) => dispatch(fetchFriends(id)),
    deleteFriend: (id) => dispatch(deleteFriend(id))
  };
};

export default connect(mapState, mapDispatch)(UserProfile);
