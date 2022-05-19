import axios from "axios";

const TOKEN = "token";

/* ACTION TYPES */
const SET_ACTIVITIES = "SET_ACTIVITIES";
const SORT_ACTIVITIES = "SORT_ACTIVITIES"
const CREATE_ACTIVITY = "CREATE_ACTIVITY";
const DELETE_ACTIVITY = "DELETE_ACTIVITY";
const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
const POST_USERACTIVITY = "POST_USERACTIVITY"

/* ACTION CREATORS */
export const _setActivities = (activities,sort) => {
  return {
    type: SET_ACTIVITIES,
    activities,
    sortOn: sort.sortOn,
    sortDirection: sort.sortDirection,
  };
};

export const _sortActivities = (sort) => {
  return {
    type: SORT_ACTIVITIES,
    sortOn: sort.sortOn,
    sortDirection: sort.sortDirection,
  }
}

const _createActivity = (activity) => {
  return {
    type: CREATE_ACTIVITY,
    activity,
  };
};

const _deleteActivity = (activity) => {
  return {
    type: DELETE_ACTIVITY,
    activity,
  };
};

const _updateActivity = (ACTIVITY) => {
  return {
    type: UPDATE_ACTIVITY,
    activity,
  };
};

export const _postUserActivity = (userActivity) => {
  return{
      type: POST_USERACTIVITY,
      userActivity,
  }
}

export const fetchActivities = (keyword,sort) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
      const { data } = await axios.get("/api/activities/",{
        headers: {
          authorization: token
        },
        params: {keyword}
      });
      dispatch(_setActivities(data,sort));
  };
};

export const postUserActivity = (activityId,score) => {
  const token = window.localStorage.getItem(TOKEN)
  return async (dispatch) => {
      const {data} = await axios.post("/api/activities/useractivity",
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
      dispatch(_postUserActivity(data))
  }
}

export const createActivity = (activity, history) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data } = await axios.post("/api/activities", activity, {
        headers: {
          authorization: token,
        },
      });
      dispatch(_createActivity(data));
      history.push('/activities')
    }
  };
};

export const deleteActivity = (id) => {
  return async (dispatch) => {

    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data } = await axios.delete(`/api/activities/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(_deleteActivity(data));
    }
  };
};

export const updateActivity = (activity) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data } = await axios.put(`/api/activities/${activity.id}`, activity, {
        headers: {
          authorization: token,
        },
      });
      dispatch(_updateActivity(data));
    }
  };
};

function sortingMethod(activities,sortOn,sortDirection){
  if(sortOn==="score"){
    if(sortDirection==="forward"){
      return activities.sort(function(a,b){
        if(a.useractivities.length<=0){
          a.useractivities = [{score:0}]
        }
        if(b.useractivities.length<=0){
          b.useractivities = [{score:0}]
        }
        return (a.useractivities[0].score-b.useractivities[0].score)
      })
    }else if(sortDirection==="reverse"){
      return activities.sort(function(a,b){
        if(a.useractivities.length<=0){
          a.useractivities = [{score:0}]
        }
        if(b.useractivities.length<=0){
          b.useractivities = [{score:0}]
        }
        return (b.useractivities[0].score-a.useractivities[0].score)
      })
    }
  }else{
    if(sortDirection==="forward"){
      return activities.sort(function(a,b){
        if(a[sortOn] < b[sortOn]) { return -1}
        if(b[sortOn] < a[sortOn]) { return 1}
        return 0
      })
    }else if(sortDirection==="reverse"){
      return activities.sort(function(a,b){
        if(a[sortOn] < b[sortOn]) { return 1}
        if(b[sortOn] < a[sortOn]) { return -1}
        return 0
      })
    }
  }
}

// reducer

const initialState = [];
const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return sortingMethod(action.activities,action.sortOn,action.sortDirection)
    case SORT_ACTIVITIES:
      return sortingMethod(state,action.sortOn,action.sortDirection)
    case POST_USERACTIVITY:
      const arr = state.filter(elem=>elem.id !== action.userActivity.id)
      return [...arr,action.userActivity]
    case CREATE_ACTIVITY:
      return [...state, action.activity];
    case DELETE_ACTIVITY:
      return state.filter((activity) => activity.id !== action.activity.id);
    case UPDATE_ACTIVITY:
      return state.map((activity) =>
      activity.id === action.activity.id ? [...state, action.activity] : activity
      );
    default:
      return state;
  }
};

export default activitiesReducer;
