import axios from 'axios'
import {initialState as homeSortUtility} from './utilities'

/* ACTION TYPES */
const TOKEN = 'token'
const SET_USERACTIVITY = "SET_USERACTIVITIES"
const POST_USERACTIVITY = "POST_USERACTIVITY"
const UPDATE_USERACTIVITY = "UPDATE_USERACTIVITY"
const SORT_USERACTIVITY = "SORT_USERACTIVITY"

/* ACTION CREATORS */
export const _postUserActivity = (userActivity,direction) => {
    console.log(direction)
    return{
        type: POST_USERACTIVITY,
        userActivity,
        direction
    }
}

export const _updateUserActivity = (userActivity,direction) => {
    return{
        type: UPDATE_USERACTIVITY,
        userActivity,
        direction
    }
}

export const _setUserActivities = (userActivities) => {
    return{
        type: SET_USERACTIVITY,
        userActivities
    }
}

export const _sortUserActivities = (sort)=>{
    return {
        type: SORT_USERACTIVITY,
        sortOn: sort.sortOn,
        sortDirection: sort.sortDirection,
    }
}

/* THUNKS */
export const getUserActivities = () => {
    return async (dispatch) => {
        const token = window.localStorage.getItem(TOKEN);
        const {data} = await axios.get(`/api/activities/users`,{
            headers: {
              authorization: token
            }
          });
          dispatch(_setUserActivities(data))
    }
}

function sortingMethod(activities,sortOn,sortDirection){
    function typeHelper(input){
      if(sortOn==="score" || sortOn=="updatedAt"){
        if(input.useractivities.length<=0){
          return 0
        }else{
          if(sortOn==="updatedAt"){
            return new Date(input.useractivities[0].updatedAt).getTime()
          }
          return input.useractivities[0][sortOn]
        }
      }
      return input[sortOn]
    }
  
    if(sortDirection===true){
      return activities.sort(function(a,b){
        // console.log(a)
        if(typeHelper(a) < typeHelper(b)) { return -1}
        if(typeHelper(b) < typeHelper(a)) { return 1}
         return 0
      })
    }else if(sortDirection===false){
      return activities.sort(function(a,b){
        if(typeHelper(a) < typeHelper(b)) { return 1}
        if(typeHelper(b) < typeHelper(a)) { return -1}
        return 0
      })
    }
}

/* REDUCER */
const initialState = [];
const userActivitiesReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USERACTIVITY:
          return sortingMethod(action.userActivities,"updatedAt",false)
        case SORT_USERACTIVITY:
          return sortingMethod(state,"updatedAt",action.sortDirection)
        case POST_USERACTIVITY:
          return sortingMethod([...state,action.userActivity],"updatedAt",action.direction)
        case UPDATE_USERACTIVITY:
          return sortingMethod(state.map((activity) =>
          activity.id === action.userActivity.id ? action.userActivity : activity
          ),"updatedAt",action.direction);
        default:
          return state;
    }
}

export default userActivitiesReducer