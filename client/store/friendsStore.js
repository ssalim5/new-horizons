import Axios from "axios";

const CREATE_FRIEND= "CREATE_FRIEND";
const SET_FRIENDS = "SET_FRIENDS";
const DELETE_FRIEND = "DELETE_FRIEND"

const _createFriend= (friend) => {
  return {
    type: CREATE_FRIEND,
    friend,
  };
};

const setFriends = (friends) => {
  return {
    type: SET_FRIENDS,
    friends,
  };
};

const _deleteFriend = (friend) => {
  return {
    type: DELETE_FRIEND,
    friend,
  };
};

export const fetchFriends= (id) => {
  return async (dispatch) => {
        const {data}= await Axios.get(`/api/friends/${id}`);
        dispatch(setFriends(data));
  };
};

export const createFriend= (friend, history) => {
  return async (dispatch) => {
    console.log("WORKING", friend)
      const { data: created } = await Axios.post("/api/friends", friend);
      dispatch(_createFriend(created));
  };
};

export const deleteFriend = (id, history) => {
  return async (dispatch) => {
    const { data: friend } = await Axios.delete(`/api/friends/${id}`);
    dispatch(_deleteFriend(friend));
    // history.push("/");
  };
};

const initialState = [];
export default function friendReducer(state = initialState, action) {
  console.log("TEST", action)
  switch (action.type) {
    case SET_FRIENDS:
      return action.friends;
    case CREATE_FRIEND:
      return [...state, action.friend];
      case DELETE_FRIEND:
        return state.filter((friend) => friend.id !== action.friend.id)
        ;
    default:
      return state;
  }
}
