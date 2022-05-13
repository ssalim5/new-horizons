import React from "react";
import { connect } from "react-redux";
import { fetchUsers} from "../store/allUsersStore";
import { Link } from "react-router-dom";
import { createFriend } from "../store/friendsStore";

export class AllUsers extends React.Component {
  constructor() {
    super()
  }
  componentDidMount(){
    this.props.fetchUsers();
  }


  render() {
    const users = this.props.allUsers
    return (
      <div className="container">
        <div></div>
        {users.map((user) => {
          return (
            <div className="user" key={user.id}>
              <Link to={`/usersActivities/${user.id}`} key={user.id}>
                <div key={user.id}>
                  <h1 className="name">{user.username}</h1>
                  {/* <h2>{user.email}</h2> */}
                </div>
              </Link>
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
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatch)(AllUsers);
