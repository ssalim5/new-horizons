import React,  {useState, useEffect} from "react";
import { connect } from "react-redux";
import { fetchUsers} from "../store/allUsersStore";
import { Link } from "react-router-dom";
import { createFriend } from "../store/friendsStore";
import {Button} from "react-bootstrap"

export class AddFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
      filteredData: [],
    }
    // this.handleFilter = this.handleFilter.bind(this);
    this.handleFriend = this.handleFriend.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    this.props.fetchUsers();
  }


  handleFriend(user){

    const userId = this.props.data
    console.log("USER", userId)
    const select = {
      userId: userId,
      username: user.username,
      friendId: `${user.id}`

    }
    this.props.createFriend(select)
  }

  handleChange(event) {
    this.setState({
      searchWord: event.target.value,
    })
    const newFilter = this.props.allUsers.filter((value) => {
      return value.username.includes(event.target.value)});
      this.setState({filteredData: newFilter})
  }

  // handleFilter = (event) => {
  //   const searchWord = event.target.value
  //   console.log("SEARCh", searchWord)
    // const newFilter = this.props.allUsers.filter((value) => {
    //   return value.username.includes(searchWord)});
    //   this.setState({filteredData: newFilter})
  //     console.log("STATE", this.state)
  //   }

// const [input, setInput] = useState('')

  render() {
    const filter = this.state.filteredData
    const {searchWord} = this.state
    console.log("Filter", filter)
    console.log("STATE", this.state)

    // console.log("filtered", filteredData)
    const users = this.props.allUsers
    // const handleFilter = this.props.handleFilter
    return (
      <div className="addfriends">
        <form className="search-friends">
          <input
            className="search-friends"
            type="search"
            value={searchWord}
            onChange={this.handleChange}
            placeholder="Type to search..."
          />
        </form>
        {filter.length ?
          <div>
            {filter.map((user) => {
          return (
            <div className="user" key={user.id}>
                  <h2 className="name">{user.username}</h2>
                  <form onSubmit={(ev) => ev.preventDefault()}>
        <Button className="purple" type="submit"
          onClick={() => {this.handleFriend(user)}}
        >
          SELECT
        </Button>
        </form>
        </div>
        )})}
        </div>  :
        <div>
        {users.map((user) => {
          return (
            <div className="user" key={user.id}>

                  <h2 className="name">{user.username}</h2>
                  <form onSubmit={(ev) => ev.preventDefault()}>
        <Button className="purple" type="submit"
          onClick={() => {this.handleFriend(user)}}
        >
          SELECT
        </Button>
        </form>
            </div>
          );
        })}
      </div>

  }
  </div>
  )}}


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

export default connect(mapStateToProps, mapDispatch)(AddFriends)
