import { createStructuredSelector } from "reselect";
/**
 * 获取参数，这个是顺序执行selector
 * this.props.componentModel.showContextMenu
 * https://github.com/reduxjs/reselect
 */
export const modelSelector = createStructuredSelector({
  actionDispatchModal: state => {
    return state.actionDispatchModal;
  }
});
