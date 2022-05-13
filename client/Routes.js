import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import {me} from './store'
import UserProfile from './components/Userprofile';
import AllActivities from './components/AllActivities';
import SingleActivity from './components/SingleActivity';
import Registration from './components/Registration';
import Recommended from './components/Recommended';
import Friends from './components/Friends';
import Graph from './components/Graph';
import AllUsers from './components/AllUsers';
import AddFriends from './components/AddFriends'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Redirect to="/" /> */}
            <Route exact path="/user/:id" component={UserProfile} />
            <Route exact path="/activities" component={AllActivities} />
            <Route exact path="/activities/:id" component={SingleActivity} />
            <Route exact path="/recommended" component={Recommended} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/graph" component={Graph} />
            <Route exact path="/users" component={AllUsers} />
            <Route exact path="/users/:id" component={UserProfile} />
            <Route exact path="/addfriends/:id" component={AddFriends} />

          </Switch>
        ) : (
          <Switch>
            <Route exact path='/' component={ Login } />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/activities" component={AllActivities} />
            <Route exact path="/activities/:id" component={SingleActivity} />
            <Route exact path="/user/:id" component={UserProfile} /> */}
            <Route exact path="/registration" component={Registration} />
            {/* <Route exact path="/recommended" component={Recommended} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/graph" component={Graph} />
            <Route exact path="/users" component={AllUsers} />
            <Route exact path="/addfriends/:id" component={AddFriends} /> */}
          </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
