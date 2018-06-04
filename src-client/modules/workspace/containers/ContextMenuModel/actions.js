import { bindActionCreators } from "redux";
import { changeOption } from "modules/workspace/containers/ComponentOptionsPanel/actions";
export const SHOW_CONTEXTMENU_MODEL =
  "ComponentOptionsPanel/SHOW_CONTEXTMENU_MODEL";

/**
 * 
 * @param {*} isShow
 * 显示右键面板弹窗 
 */
export const showContextMenuModal = (isShow, addOn = {}) => ({
  type: SHOW_CONTEXTMENU_MODEL,
  payload: isShow,
  addOn: addOn
});

export const containerActions = dispatch =>
  bindActionCreators(
    {
      showContextMenuModal,
      changeOption
    },
    dispatch
  );
