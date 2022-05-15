import Axios from "axios";

const TOKEN = "token";
const SET_USER_RECOMMENDATIONS = "SET_USER_RECOMMENDATIONS";

const _setUserRecomendations = (recommended) => {
  return {
    type: SET_USER_RECOMMENDATIONS,
    recommended,
  };
};

export const fetchUserRecommendations = () =>{
    return async (dispatch) => {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const res = await Axios.get(`/api/users/activities/rec`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(_setUserRecomendations(res.data));
      }
    };
  }

  const initialState = [];
export default function recommendationsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_RECOMMENDATIONS:
        console.log("state recommended being set")
      return action.recommended;
    default:
      return state;
  }
}