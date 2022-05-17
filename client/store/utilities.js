import axios from "axios";

const TOKEN = "token";

/* ACTION TYPES */


/* ACTION CREATORS */

/* THUNKS */

// reducer

const initialState = {
    sortRec:"",
    filterRec:"",
    sortAct:"",
    filterAct:"",
    fiveAct:{
        start:0,
        end:5
    },
    recFive:{
        start:0,
        end:5
    },
};
const utilitiesReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default utilitiesReducer;
