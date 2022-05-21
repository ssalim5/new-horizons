import { getPosition } from "../components/Locate";

const SET_LOCATION = "SET_LOCATION"

export const setLocation = (location) => ({
  type: SET_LOCATION,
  location
})

const initialState = {};

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return action.location;
    default:
      return state;
  }
}
