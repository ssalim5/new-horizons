import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import {me} from './store'
import UserProfile from './components/UserProfile';
import AllActivities from './components/AllActivities';
import SingleActivity from './components/SingleActivity';

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
            <Route exact path="/home" component={Home} />
            <Redirect to="/home" />
            <Route exact path="/user/:id" component={UserProfile} />
            <Route exact path="/activities" component={AllActivities} />
            <Route exact path="/activities/:id" component={SingleActivity} />

          </Switch>
        ) : (
          <Switch>
            <Route exact path='/' component={ Login } />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/activities" component={AllActivities} />
            <Route exact path="/activities/:id" component={SingleActivity} />
            <Route exact path="/user/:id" component={UserProfile} />
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
