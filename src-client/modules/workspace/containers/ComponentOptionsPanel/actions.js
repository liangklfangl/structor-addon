import { merge, isEmpty } from "lodash";
import { bindActionCreators } from "redux";
import { utils, graphApi } from "api";
import { pushHistory } from "modules/workspace/containers/HistoryControls/actions";
import { setSelectedKey } from "modules/workspace/containers/SelectionBreadcrumbs/actions";
import { updatePage } from "modules/workspace/containers/DeskPage/actions";
import { failed } from "modules/app/containers/AppMessage/actions";
export const DELETE_OPTION = "ComponentOptionsPanel/DELETE_OPTION";
export const CHANGE_OPTION = "ComponentOptionsPanel/CHANGE_OPTION";
export const ADD_OPTION = "ComponentOptionsPanel/ADD_OPTION";
export const SET_ACTIVE_TAB = "ComponentOptionsPanel/SET_ACTIVE_TAB";
import { quickLastSelectOption } from "modules/workspace/containers/LibraryPanel/actions";
// 快速为Select添加Option
export const TOGGLE_STYLE_SECTION =
  "ComponentOptionsPanel/TOGGLE_STYLE_SECTION";
export const SHOW_MODAL = "QuickAppendModal/SHOW_MODAL";
export const modeMap = {
  addBefore: { type: "addBefore", label: "Add before selected component" },
  addAfter: { type: "addAfter", label: "Add after selected component" },
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

/**
 * 删除Option
 */
export const deleteOption = (componentObject, optionPath) => (
  dispatch,
  getState
) => {
  const { key } = componentObject;
  let node = graphApi.getNode(key);
  if (node) {
    let oldProps = node.modelNode.props || {};
    let newProps = utils.delex(utils.fulex(oldProps), optionPath);
    if (newProps.style && isEmpty(newProps.style)) {
      delete newProps.style;
    }
    dispatch(pushHistory());
    node.modelNode.props = newProps;
    dispatch(setSelectedKey(key));
    dispatch(updatePage());
  } else {
    dispatch(failed("Component with key " + key + " was not found."));
  }
};

/**
 * 通过drag+size设置元素的宽度+高度
 */
export const changeOptionDragResize = (componentObject, optionObject) => (
  dispatch,
  getState
) => {
  console.log("changeOptionDragResize中的值为===", componentObject, optionObject);
  const { key } = componentObject;
  let node = graphApi.getNode(key);
  const { width, height, x, y } = optionObject || {};
  if (node) {
    let oldProps = node.modelNode.props || {};
    // 原来的props
    let newProps = merge({}, oldProps, optionObject);
    // 没有style直接删除
    if (newProps.combinedProps) {
      delete newProps.combinedProps;
    }
    if (newProps.style && isEmpty(newProps.style)) {
      delete newProps.style;
    } else {
      // 如果style有设置
      if (!newProps.style) {
        newProps.style = {};
      }
      newProps.style.width = width ? parseInt(width) + "px" : "0px";
      newProps.style.height = height ? parseInt(height) + "px" : "0px";
    }
    dispatch(pushHistory());
    // 添加一条历史
    node.modelNode.props = newProps;
    // 重新设置props
    dispatch(setSelectedKey(key));
    dispatch(updatePage());
    // 设置当前选中的key并更新页面
  } else {
    dispatch(failed("Component with key " + key + " was not found."));
  }
};

/**
 * 修改Options
 */
export const changeOption = (componentObject, optionObject) => (
  dispatch,
  getState
) => {
  const { key } = componentObject;
  let node = graphApi.getNode(key);
  console.log("changeOption调用后的值为===", node, optionObject);
  if (node) {
    let oldProps = node.modelNode.props || {};
    // 原来的props
    let newProps = merge({}, oldProps, optionObject);
    // 没有style直接删除
    if (newProps.style && isEmpty(newProps.style)) {
      delete newProps.style;
    }
    console.log("changeOption调用后newProps的值为===", newProps);
    dispatch(pushHistory());
    // 添加一条历史
    node.modelNode.props = newProps;
    // 重新设置props
    dispatch(setSelectedKey(key));
    dispatch(updatePage());
    // 设置当前选中的key并更新页面
  } else {
    dispatch(failed("Component with key " + key + " was not found."));
  }
};
/**
 * 专门用于添加Option等类似组件
 */
export const addChildren = (componentObject, optionObject) => (
  dispatch,
  getState
) => {
  const { label, value } = optionObject;
  dispatch(
    quickLastSelectOption(
      ["Option [antd]"],
      {
        value
      },
      [
        {
          key: Math.random(),
          type: "span",
          text: label
        }
      ]
    )
  );
};

export const setActiveTab = activeTab => ({
  type: SET_ACTIVE_TAB,
  payload: activeTab
});
export const toggleStyleSection = sectionKey => ({
  type: TOGGLE_STYLE_SECTION,
  payload: sectionKey
});

export const containerActions = dispatch =>
  bindActionCreators(
    {
      deleteOption,
      changeOption,
      setActiveTab,
      toggleStyleSection,
      addChildren
    },
    dispatch
  );
