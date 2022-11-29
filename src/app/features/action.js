import * as counter from "./constant";

export let increment = (value) => {
  return {
    type: counter.INC,
    value: value,
  };
};
export let decrement = (value) => {
  return {
    type: counter.DEC,
    value: value,
  };
};

export let decrementWithCheckingAction = (value) => {
  return (dispatch, getState) => {
    if (getState().counter.count > 0) {
      dispatch(decrement(value));
    }
  };
};
