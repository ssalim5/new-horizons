import React from "react";
import { connect } from "react-redux";
import { fetchUsers} from "../store/allUsersStore";
import { Link } from "react-router-dom";
import { createFriend } from "../store/friendsStore";

export class AddFriends extends React.Component {
  constructor() {
    super()
  }
  componentDidMount(){
    this.props.fetchUsers();
  }

  handleFriend(user){
    const select = {
      userId: this.props.match.params.id,
      username: user.username,
      friendId: `${user.id}`

    }
    console.log("FRIEND", select)
    this.props.createFriend(select)
  }


  render() {
    const users = this.props.allUsers
    return (
      <div className="container">
        <div>ADD FRIENDS</div>
        {users.map((user) => {
          return (
            <div className="user" key={user.id}>

                  <h1 className="name">{user.username}</h1>
                  <form onSubmit={(ev) => ev.preventDefault()}>
        <button type="submit"
          onClick={() => {this.handleFriend(user)}}
        >
          SELECT FRIEND
        </button>
        </form>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allUsers: state.allUsers,
    friends: state.friends
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    createFriend: (friend) => dispatch(createFriend(friend, history))
  };
};

export default connect(mapStateToProps, mapDispatch)(AddFriends);
