import Axios from "axios";

const SET_SINGLE = "SET_SINGLE_ACTIVITY";

const _setSingleActivity = (activity) => {
  return {
    type: SET_SINGLE,
    activity,
  };
};

export const fetchSingleActivity = (id) => {
  return async (dispatch) => {
    try {
      const response = await Axios.get(`/api/activities/${id}`);
      const data = response.data;
      dispatch(_setSingleActivity(data))
    } catch (err) {
      console.log(err)
    }
  }
};


const initialState = {};
const singleActivityReducer = (state = initialState, action) => {
  //console.log("Action!!", action)
  switch (action.type) {
    case SET_SINGLE:
      return action.activity;
    default:
      return state;
  }
}

// const initialState = {}
// export default function singleStudentReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_SINGLE:
//       return action.student
//     default:
//       return state
// }}

export default  singleActivityReducer
