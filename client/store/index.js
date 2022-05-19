import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import singleUserReducer from './SingleUserStore'
import activitiesReducer from './allActivitiesStore'
import singleActivityReducer from './singleActivityStore'
import userReducer from './allUsersStore'
import recommendationsReducer from './userRecommendations'
import userActivitiesReducer from './userActivitiesStore'
import friendReducer from './friendsStore'
import messagesReducer from './messagesStore'
import utilities from './utilities'

const reducer = combineReducers({
  auth,
  user: singleUserReducer,
  activities: activitiesReducer,
  singleActivity: singleActivityReducer,
  allUsers: userReducer,
  recommended: recommendationsReducer,
  userActivities: userActivitiesReducer,
  friends: friendReducer,
  messages: messagesReducer,
  utilities: utilities,
  })

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './userActivitiesStore'
export * from './singleActivityStore'
export * from './userRecommendations'
export * from './utilities'
