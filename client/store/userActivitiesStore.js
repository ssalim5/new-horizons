import axios from 'axios'
import history from '../history'

/* ACTION TYPES */
const GET_USERACTIVITY = "GET_USERACTIVITIES"
const POST_USERACTIVITY = "POST_USERACTIVITY"

/* ACTION CREATORS */
export const _postUserActivity = (userActivity) => {
    return{
        type: POST_USERACTIVITY,
        userActivity
    }
}

export const _getUserActivities = (userActivities) => {
    return{
        type: GET_USERACTIVITY,
        userActivity
    }
}

/* THUNKS */
export const getUserActivity = () => {
    return async (dispatch) => {
        const {data} = await axios.get("/api/users/activities")
        dispatch(_getUserActivities(data))
    }
}

export const postUserActivity = (activityId,score) => {
    return async (dispatch) => {
        const {data} = await axios.post("/api/activities",{
            activityId: activityId,
            score: score
        })
        dispatch(_postUserActivity(data))
    }
}

/* REDUCER */
const initialState = [];
const userActivitiesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USERACTIVITY:
            return action.userActivity
        case POST_USERACTIVITY:
            return [...state,action.userActivity]
    }
}