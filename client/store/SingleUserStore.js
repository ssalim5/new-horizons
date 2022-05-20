import Axios from "axios";

const TOKEN = "token";
const SET_SINGLE_USER = "SET_SINGLE_USER";
const UPDATE_SINGLE_USER = "UPDATE_SINGLE_USER"

const _setSingleUser = (userData) => {
  return {
    type: SET_SINGLE_USER,
    userData,
  };
};

const _updateSingleUser = user => ({type: UPDATE_SINGLE_USER, user})

export const fetchUser = (id) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data: user } = await Axios.get(`/api/users/${id}`,
       {
        headers: {
          authorization: token,
        },
      }
      );
      dispatch(_setSingleUser(user));
    }
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN)
    if(token) {
      try {
        const { data: updatedUser} = await Axios.put(`/api/users/${user.id}`, user)
        dispatch(_updateSingleUser(updatedUser))
      } catch (error) {
        console.log(error)
      }
    }
  }
}


const initialState = {};
export default function singleUserReducer(state = initialState, action) {
  //console.log("ActionSINGLE", action)
  switch (action.type) {
    case SET_SINGLE_USER:
      return action.userData;
    case UPDATE_SINGLE_USER:
      return action.user
    default:
      return state;
  }
}
