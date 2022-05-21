import axios from 'axios'

/* ACTION TYPES */
const SET_FRIENDACTIVITIES = "SET_FRIENDACTIVITIES"


/* ACTION CREATORS */


export const _setFriendActivities = (friendActivities) => {
    return{
        type: SET_FRIENDACTIVITIES,
        friendActivities
    }
}

/* THUNKS */
export const getFriendActivities = (id) => {
    return async (dispatch) => {
      console.log("FRIENDSACT")
        const {data} = await axios.get(`/api/useractivities/${id}`
          );
          dispatch(_setFriendActivities(data))
    }
}

/* REDUCER */
const initialState = [];
const friendActivitiesReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_FRIENDACTIVITIES:
            return action.friendActivities
        default:
            return state;
    }
}

export default friendActivitiesReducer
