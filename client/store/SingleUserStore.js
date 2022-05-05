import Axios from "axios";

const TOKEN = "token";
const SET_SINGLE_USER = "SET_SINGLE_USER";

const _setSingleUser = (userData) => {
  return {
    type: SET_SINGLE_USER,
    userData,
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data: user } = await Axios.get(`/api/users/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(_setSingleUser(user));
    }
  };
};


const initialState = [];
export default function singleUserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_USER:
      return action.userData;
    default:
      return state;
  }
}
