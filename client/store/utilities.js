import axios from "axios";

const TOKEN = "token";

/* ACTION TYPES */
const GET_UTILITIES = "SET_UTILITIES"
const RESET_UTILITIES = "RESET_UTILITIES"
const CHANGE_TOPFIVE_ACT = "CHANGE_TOPFIVE_ACT"
const CHANGE_TOPFIVE_REC = "CHANGE_TOPFIVE_REC"
const CHANGE_UTILITIES_SORTACT = "CHANGE_UTILITIES_SORTACT"
const CHANGE_HOME_REC_SORT_DIRECTION = "CHANGE_HOME_REC_SORT_DIRECTION"
const CHANGE_HOME_ACT_SORT_DIRECTION = "CHANGE_HOME_ACT_SORT_DIRECTION"


/* ACTION CREATORS */
export const getUtilities = () => {
    return{
        type: GET_UTILITIES
    }
}

export const resetUtilities = () => {
    return{
        type: RESET_UTILITIES
    }
}

export const changeSortAct = (sort) => {
    return{
        type:CHANGE_UTILITIES_SORTACT,
        sort
    }
}

export const reverseHomeAct = (sortTo) => {
    return{
        type:CHANGE_HOME_ACT_SORT_DIRECTION,
        sortTo,
    }
}

export const reverseHomeRec = (sortTo) => {
    return{
        type:CHANGE_HOME_REC_SORT_DIRECTION,
        sortTo,
    }
}

export const changeTopFiveAct = (startNumber,destination) => {
    if(destination === "fiveAct"){
        return{
            type: CHANGE_TOPFIVE_ACT,
            startNumber
        }
    }else if(destination==="fiveRec"){
        return{
            type: CHANGE_TOPFIVE_REC,
            startNumber
        }
    }
}

/* THUNKS */

// reducer

const initialState = {
    homeSortAct: false,
    homeSortRec: false,
    sortAct:{
        sortOn:"name",
        sortDirection:"forward"
      },
    fiveAct:0,
    fiveRec:0,
};

const utilitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_UTILITIES:
            return state
        case RESET_UTILITIES:
            return initialState
        case CHANGE_TOPFIVE_ACT:
            return {...state,fiveAct:action.startNumber}
        case CHANGE_TOPFIVE_REC:
            return {...state,fiveRec:action.startNumber}
        case CHANGE_UTILITIES_SORTACT:
            return {...state,sortAct:action.sort}
        case CHANGE_HOME_REC_SORT_DIRECTION:
            return { ...state,homeSortRec:action.sortTo}
        case CHANGE_HOME_ACT_SORT_DIRECTION:
            return { ...state,homeSortAct:action.sortTo}
        default:
            return state;
  }
};

export default utilitiesReducer;
