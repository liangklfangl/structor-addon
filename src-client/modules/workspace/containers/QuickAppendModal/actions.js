import { bindActionCreators } from "redux";
import {
  quickBefore,
  quickAfter,
  quickFirst,
  quickLast,
  quickReplace
} from "modules/workspace/containers/LibraryPanel/actions";
import { setSelectedKeys } from "modules/workspace/containers/SelectionBreadcrumbs/actions";

/**
 * 可能存在的操作类型
 */
export const modeMap = {
  addBefore: { type: "addBefore", label: "Add before selected component" },
  addAfter: { type: "addAfter", label: "Add after selected component" },
  //
  insertFirst: {
    type: "insertAfter",
    label: "Insert as first child in selected component"
  },
  insertLast: {
    type: "insertLast",
    label: "Insert as last child in selected component"
  },
  replace: { type: "replace", label: "Replace selected component" }
};

export const HIDE_MODAL = "QuickAppendModal/HIDE_MODAL";
export const SHOW_MODAL = "QuickAppendModal/SHOW_MODAL";
export const SUBMIT = "QuickAppendModal/SUBMIT";

export const hideModal = () => ({ type: HIDE_MODAL });

/**
 * 
 * @param {*} appendMode 
 * @param {*} targetKey 
 */
export const showModal = (appendMode, targetKey) => (dispatch, getState) => {
  if (targetKey) {
    dispatch(setSelectedKeys([targetKey]));
  }
  dispatch({ type: SHOW_MODAL, payload: appendMode });
};

/**
 * 
 * @param {*} componentTuple 
 * @param {*} appendMode 
 * submit(tuple, appendMode);
 */
export const submit = (componentTuple, appendMode) => (dispatch, getState) => {
  console.log("submit");
  const componentNames = componentTuple.split(".");
  console.log("submit被调用====", componentNames);
  //   根据appendMode调用不同的方法
  if (appendMode.type === modeMap.addBefore.type) {
    // 前面添加
    dispatch(quickBefore(componentNames));
  } else if (appendMode.type === modeMap.addAfter.type) {
    //后面添加
    dispatch(quickAfter(componentNames));
  } else if (appendMode.type === modeMap.insertFirst.type) {
    dispatch(quickFirst(componentNames));
  } else if (appendMode.type === modeMap.insertLast.type) {
    console.log("我在插入子元素的时候是最后一个lalall");
    dispatch(quickLast(componentNames));
  } else if (appendMode.type === modeMap.replace.type) {
    dispatch(quickReplace(componentNames));
  }
  //   隐藏弹窗
  dispatch(hideModal());
};

export const containerActions = dispatch =>
  bindActionCreators(
    {
      hideModal,
      submit
    },
    dispatch
  );
