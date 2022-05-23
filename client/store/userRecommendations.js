import Axios from "axios";

const TOKEN = "token";
const SET_USER_RECOMMENDATIONS = "SET_USER_RECOMMENDATIONS";
const REMOVE_RECOMMENDATION = "REMOVE_RECOMMENDATIION"
const SORT_RECOMMENDATIONS = "SORT_RECOMMENDATIONS"

export const _setUserRecomendations = (recommended) => {
  return {
    type: SET_USER_RECOMMENDATIONS,
    recommended,
  };
};

export const _removeRec = (recommendation) => {
  return{
    type: REMOVE_RECOMMENDATION,
    recommendation,
  }
}

export const _sortRec = (sort) => {
  return {
    type: SORT_RECOMMENDATIONS,
    sortOn: sort.sortOn,
    sortDirection: sort.sortDirection,
  }
}

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

function sortingMethod(recs,sortOn,sortDirection){
  if(sortDirection===true){
    return recs.sort(function(a,b){
      // console.log(a)
      if(a[sortOn] < b[sortOn]) { return -1}
      if(b[sortOn] < a[sortOn]) { return 1}
       return 0
    })
  }else if(sortDirection===false){
    return recs.sort(function(a,b){
      if(a[sortOn] < b[sortOn]) { return 1}
      if(b[sortOn] < a[sortOn]) { return -1}
      return 0
    })
  }
}

  const initialState = [];
export default function recommendationsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_RECOMMENDATIONS:
        // console.log("state recommended being set")
      return sortingMethod(action.recommended,"score",false);
    case SORT_RECOMMENDATIONS:
      return sortingMethod(state,action.sortOn,action.sortDirection)
    case REMOVE_RECOMMENDATION:
      return state.filter((rec) => rec.id !== action.recommendation)
    default:
      return state;
  }
}