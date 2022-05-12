import Axios from "axios";

const CREATE_FRIEND= "CREATE_FRIEND";

const _createFriend= (friend) => {
  return {
    type: CREATE_FRIEND,
    friend,
  };
};

export const createFriend= (friend, history) => {
  return async (dispatch) => {
    console.log("WORKING", friend)
      const { data: created } = await Axios.post("/api/friends", friend);
      dispatch(_createFriend(created));
  };
};

const initialState = [];
export default function friendReducer(state = initialState, action) {
  console.log("TEST", action)
  switch (action.type) {
    case CREATE_FRIEND:
      return [...state, action.friend];
    default:
      return state;
  }
}
