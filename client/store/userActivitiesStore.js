import axios from 'axios'

/* ACTION TYPES */
const TOKEN = 'token'
const SET_USERACTIVITY = "SET_USERACTIVITIES"
const POST_USERACTIVITY = "POST_USERACTIVITY"
const UPDATE_USERACTIVITY = "UPDATE_USERACTIVITY"

/* ACTION CREATORS */
export const _postUserActivity = (userActivity) => {
    return{
        type: POST_USERACTIVITY,
        userActivity
    }
}

export const _updateUserActivity = (userActivity) => {
    return{
        type: UPDATE_USERACTIVITY,
        userActivity
    }
}

export const _setUserActivities = (userActivities) => {
    return{
        type: SET_USERACTIVITY,
        userActivities
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

/* REDUCER */
const initialState = [];
const userActivitiesReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USERACTIVITY:
            return action.userActivities
        case POST_USERACTIVITY:
            return [...state,action.userActivity]
        case UPDATE_USERACTIVITY:
            console.log("ACTION: ",action)
            return state.map((activity) =>
            activity.id === action.userActivity.id ? action.userActivity : activity
            );
        default:
            return state;
    }
}

export default userActivitiesReducer