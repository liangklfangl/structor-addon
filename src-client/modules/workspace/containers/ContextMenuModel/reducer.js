import * as actions from "./actions.js";
import { initialExpandedStyleGroups } from "./constants";

/**
 * 默认右键弹窗不显示
 */
const initialState = {
  showContextMenu: false,
  addOn: {}
  // 附加属性
};

/**
 * 处理右键点击的弹出窗
 */
export default (state = initialState, action = {}) => {
  const { type, payload, addOn } = action;
  console.log("显示contextMenu===", action);
  if (type === actions.SHOW_CONTEXTMENU_MODEL) {
    return Object.assign({}, state, {
      showContextMenu: payload,
      addOn
    });
  }

  return state;
};
