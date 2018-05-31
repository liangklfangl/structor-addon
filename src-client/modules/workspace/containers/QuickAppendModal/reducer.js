import * as actions from "./actions.js";

const initialState = {
  show: false,
  appendMode: {}
};

/**
 * 接受HIDE_MODAL和SHOW_MODAL两个action
 */
export default (state = initialState, action = {}) => {
  const { type, payload } = action;
  if (type === actions.HIDE_MODAL) {
    return Object.assign({}, state, {
      show: false
    });
  }
  if (type === actions.SHOW_MODAL) {
    return Object.assign({}, state, {
      show: true,
      appendMode: payload
    });
  }

  return state;
};
