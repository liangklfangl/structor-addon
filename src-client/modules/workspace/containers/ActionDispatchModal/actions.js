import { serverApi, graphApi, utils } from "api";
import { bindActionCreators } from "redux";
export const SHOW_ACTION_DISPATCH_MODEL =
  "ComponentOptionsPanel/SHOW_ACTION_DISPATCH_MODEL";
// 显示行为组件+数据组件弹窗
export const GET_ACTION_DISPATCH_MODEL_DATA =
  "ComponentOptionsPanel/GET_ACTION_DISPATCH_MODEL_DATA";
export const MUTATION_ACTION_DISPATCH_MODEL_DATA =
  "ComponentOptionsPanel/MUTATION_ACTION_DISPATCH_MODEL_DATA";
// 直接修改props的action
import { changeOptions } from "modules/workspace/containers/ComponentOptionsPanel/actions";
/**
 * 
 * @param {*} isShow
 * 行为+数据组件 
 */
export const showActionDispatch = (show, payload) => (dispatch, getState) => {
  dispatch({
    type: SHOW_ACTION_DISPATCH_MODEL,
    show,
    payload
  });
  dispatch(showPageFieldsDispatch(show, payload));
};

/**
 * 设置选项异步被saga捕获
 */
export const showPageFieldsDispatch = (isShow, addOn) => (
  dispatch,
  getState
) => {
  const model = graphApi.getModel();
  dispatch({
    type: GET_ACTION_DISPATCH_MODEL_DATA,
    payload: {
      isShow,
      addOn,
      data: model
    }
  });
};

/**
 * 修改state
 */
export const mutationActionState = payload => (dispatch, getState) => {
  dispatch({
    type: MUTATION_ACTION_DISPATCH_MODEL_DATA,
    payload
  });
};

export const containerActions = dispatch =>
  bindActionCreators(
    {
      showPageFieldsDispatch,
      mutationActionState,
      changeOptions
    },
    dispatch
  );
