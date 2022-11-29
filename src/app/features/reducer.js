import * as counter from "./constant";

let initialState = {
  count: 0,
};

let counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case counter.DEC:
      return {
        ...state,
        count: state.count - action.value,
      };
    case counter.INC:
      return {
        count: state.count + action.value,
      };
    default:
      return state;
  }
};

export default counterReducer;
