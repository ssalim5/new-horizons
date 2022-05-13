import axios from "axios";

// Action Types
const SET_ACTIVITIES = "SET_ACTIVITIES";
const CREATE_ACTIVITY = "CREATE_ACTIVITY";
const DELETE_ACTIVITY = "DELETE_ACTIVITY";
const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
const TOKEN = "token";

// Action creators
export const _setActivities = (activities) => {
  return {
    type: SET_ACTIVITIES,
    activities,
  };
};

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

//Thunks
export const fetchActivities = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    if(token){
      const { data } = await axios.get("/api/activities/user",{
        headers: {
          authorization: token
        }
      });
      dispatch(_setActivities(data));
    }else{
      const { data } = await axios.get("/api/activities");
      dispatch(_setActivities(data))
    }
  };
};

export const fetchActivitiesWithUserInfo = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.get("/api/activities/user",{
      headers: {
        authorization: token
      }
    });
    dispatch(_setActivities(data));
  };
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

// reducer

const initialState = [];
const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return action.activities;
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
