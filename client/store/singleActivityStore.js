import Axios from "axios";

const TOKEN = "token";
const SET_SINGLE_ACTIVITY = "SET_SINGLE_ACTIVITY";

const _setSingleActivity = (activity) => {
  return {
    type: SET_SINGLE_ACTIVITY,
    activity,
  };
};

export const fetchActivity = (id) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data: activity } = await Axios.get(`/api/activities/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(_setSingleActivity(activity));
    }
  };
};


const initialState = [];
export default function singleActivityReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_ACTIVITY:
      return action.activity;
    default:
      return state;
  }
}
