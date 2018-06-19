import { bindActionCreators } from "redux";
import { graphApi } from "api";
import {
  success,
  failed,
  timeout,
  close
} from "modules/app/containers/AppMessage/actions";
import { updateMarked } from "modules/workspace/containers/DeskPage/actions";

export const SET_SELECTED_KEY = "SelectionBreadcrumbs/SET_SELECTED_KEY";

/**
 * 
 * @param {*} key 
 * @param {*} isModifier 
 * 设置选中的key
 */
export const setSelectedKey = (key, isModifier) => (dispatch, getState) => {
  let { selectionBreadcrumbs: { selectedKeys } } = getState();
  console.log("获取选中的selectedKeys====", selectedKeys);
  let filtered = selectedKeys.filter(selectedKey => key === selectedKey);
  if (filtered.length === 0) {
    if (selectedKeys.length > 0 && !isModifier) {
      selectedKeys.forEach(selectedKey => {
        let graphNode = graphApi.getNode(selectedKey);
        if (graphNode) {
          graphNode.selected = undefined;
        }
      });
      selectedKeys = [];
    }
    let nextGraphNode = graphApi.getNode(key);
    if (nextGraphNode) {
      nextGraphNode.selected = true;
      selectedKeys.push(key);
      dispatch({ type: SET_SELECTED_KEY, payload: selectedKeys });
      dispatch(updateMarked());
    } else {
      console.log("setSelectedKeys====key====", key);
      dispatch(
        failed(
          "Required to be selected component with id '" +
            key +
            "' was not found"
        )
      );
    }
  } else {
    if (selectedKeys.length > 0) {
      let graphNode = graphApi.getNode(key);
      if (isModifier) {
        if (graphNode) {
          graphNode.selected = undefined;
          selectedKeys = selectedKeys.filter(
            selectedKey => key !== selectedKey
          );
          dispatch({ type: SET_SELECTED_KEY, payload: selectedKeys });
          dispatch(updateMarked());
        } else {
          dispatch(
            failed(
              "Currently selected component with id '" + key + "' was not found"
            )
          );
        }
      } else {
        if (graphNode) {
          selectedKeys.forEach(selectedKey => {
            let selectedGraphNode = graphApi.getNode(selectedKey);
            if (selectedGraphNode) {
              selectedGraphNode.selected = undefined;
            } else {
              dispatch(
                failed(
                  "Currently selected component with id '" +
                    key +
                    "' was not found"
                )
              );
            }
          });
          graphNode.selected = true;
          selectedKeys = [key];
          dispatch({ type: SET_SELECTED_KEY, payload: selectedKeys });
          dispatch(updateMarked());
        } else {
          dispatch(
            failed(
              "Required to be selected component with id '" +
                key +
                "' was not found"
            )
          );
        }
      }
    }
  }
};

/**
 * 
 * @param {*} key 
 * @param {*} isModifier 
 * 设置选中的父级组件
 */
export const setSelectedParentKey = (key, isModifier) => (
  dispatch,
  getState
) => {
  const parentKey = graphApi.getGraph().parent(key);
  if (parentKey) {
    const parentParentKey = graphApi.getGraph().parent(parentKey);
    if (parentParentKey) {
      dispatch(setSelectedKey(parentKey, isModifier));
    }
  }
};

/**
 * 
 * @param {*} key 
 * @param {*} isHighlighted 
 * 设置高亮的key
 */
export const setHighlightSelectedKey = (key, isHighlighted) => (
  dispatch,
  getState
) => {
  let graphNode = graphApi.getNode(key);
  if (graphNode) {
    if (!isHighlighted) {
      graphNode.highlighted = undefined;
    } else if (isHighlighted) {
      graphNode.highlighted = true;
    }
    dispatch(updateMarked());
  }
};

/**
 * 移除选中的key
 */
export const removeSelectedKeys = () => (dispatch, getState) => {
  let { selectionBreadcrumbs: { selectedKeys } } = getState();
  let selectedNode;
  if (selectedKeys && selectedKeys.length > 0) {
    selectedKeys.forEach(key => {
      selectedNode = graphApi.getNode(key);
      if (selectedNode && selectedNode.selected) {
        selectedNode.selected = undefined;
      }
    });
    dispatch({ type: SET_SELECTED_KEY, payload: [] });
    dispatch(updateMarked());
  }
};

/**
 * 重新设置选中的key
 */
export const resetSelectedKeys = () => (dispatch, getState) => {
  let { selectionBreadcrumbs: { selectedKeys } } = getState();
  let newSelectedKeys = [];
  let selectedNode;
  if (selectedKeys && selectedKeys.length > 0) {
    selectedKeys.forEach(key => {
      selectedNode = graphApi.getNode(key);
      if (selectedNode && selectedNode.selected) {
        newSelectedKeys.push(key);
      }
    });
    dispatch({ type: SET_SELECTED_KEY, payload: newSelectedKeys });
    dispatch(updateMarked());
  }
};

/**
 * 
 * @param {*} keys 
 * 设置选中的keys
 */
export const setSelectedKeys = keys => (dispatch, getState) => {
  if (keys && keys.length > 0) {
    const { selectionBreadcrumbs: { selectedKeys } } = getState();
    let selectedNode;
    if (selectedKeys && selectedKeys.length > 0) {
      selectedKeys.forEach(key => {
        selectedNode = graphApi.getNode(key);
        if (selectedNode && selectedNode.selected) {
          selectedNode.selected = undefined;
        }
      });
    }
    let newSelectedKeys = [];
    keys.forEach(key => {
      let nextGraphNode = graphApi.getNode(key);
      if (nextGraphNode) {
        nextGraphNode.selected = true;
        newSelectedKeys.push(key);
      } else {
        console.log("setSelectedKeys====keys====", keys);
        dispatch(
          failed(
            "Required to be selected component with id '" +
              key +
              "' was not found"
          )
        );
      }
    });
    dispatch({ type: SET_SELECTED_KEY, payload: newSelectedKeys });
    dispatch(updateMarked());
  }
};

export const containerActions = dispatch =>
  bindActionCreators(
    {
      setSelectedKey,
      setHighlightSelectedKey,
      removeSelectedKeys
    },
    dispatch
  );
