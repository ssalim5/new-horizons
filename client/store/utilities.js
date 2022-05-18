import axios from "axios";

const TOKEN = "token";

/* ACTION TYPES */
const GET_UTILITIES = "SET_UTILITIES"
const RESET_UTILITIES = "RESET_UTILITIES"
const CHANGE_TOPFIVE_ACT = "CHANGE_TOPFIVE_ACT"
const CHANGE_TOPFIVE_REC = "CHANGE_TOPFIVE_REC"


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

export const changeTopFiveAct = (startNumber,destination) => {
    console.log(startNumber,destination)
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
    sortRec:"",
    filterRec:"",
    sortAct:"",
    filterAct:"",
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
    
        default:
            return state;
  }
};

export default utilitiesReducer;
