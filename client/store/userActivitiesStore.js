import axios from 'axios'

/* ACTION TYPES */
const TOKEN = 'token'
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
        const {data} = await axios.get("/api/users/useractivities")
        dispatch(_getUserActivities(data))
    }
}

export const postUserActivity = (activityId,score) => {
    const token = window.localStorage.getItem(TOKEN)
    console.log("---TOKEN---",token)
    return async (dispatch) => {
        const {data} = await axios.post("/api/useractivities",
        {
            activityId: activityId,
            score: score
        },
        {
            headers: {
                authorization: token
              },
        },
        )
        console.log("DATA: ",data)
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
        default:
            return state;
    }
}

export default userActivitiesReducer