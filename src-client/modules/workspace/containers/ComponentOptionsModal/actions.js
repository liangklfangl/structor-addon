import { isEmpty } from "lodash";
import { bindActionCreators } from "redux";
import { graphApi, serverApi } from "api";
import { failed } from "modules/app/containers/AppMessage/actions";

export const LOAD_OPTIONS_AND_SHOW_MODAL =
  "ComponentOptionsModal/LOAD_OPTIONS_AND_SHOW_MODAL";
export const SET_OPTIONS = "ComponentOptionsModal/SET_OPTIONS";
export const SAVE_SOURCE_CODE = "ComponentOptionsModal/SAVE_SOURCE_CODE";
export const SAVE_SOURCE_CODE_DONE =
  "ComponentOptionsModal/SAVE_SOURCE_CODE_DONE";
export const SAVE_SOURCE_CODE_TIMEOUT =
  "ComponentOptionsModal/SAVE_SOURCE_CODE_TIMEOUT";
export const HIDE_MODAL = "ComponentOptionsModal/HIDE_MODAL";
export const SHOW_MODAL = "ComponentOptionsModal/SHOW_MODAL";

export const loadOptionsAndShowModal = componentObject => ({
  type: LOAD_OPTIONS_AND_SHOW_MODAL,
  payload: componentObject
});
// 保存源码成功
export const saveSourceCodeDone = () => ({ type: SAVE_SOURCE_CODE_DONE });
// 保存源码超时
export const saveSourceCodeTimeout = () => ({ type: SAVE_SOURCE_CODE_TIMEOUT });
// 隐藏+显示弹窗
export const hideModal = () => ({ type: HIDE_MODAL });
export const showModal = () => ({ type: SHOW_MODAL });

/**
 * 设置选项
 */
export const setOptions = componentObject => (dispatch, getState) => {
  const {
    key,
    sourceFilePath,
    props,
    text,
    componentName,
    sourceCode,
    readmeText
  } = componentObject;
  dispatch({
    type: SET_OPTIONS,
    payload: {
      selectedKey: key,
      sourceCode: sourceCode,
      sourceFilePath: sourceFilePath,
      sourceProps: props ? JSON.stringify(props, null, 4) : JSON.stringify({}),
      sourceText: text,
      readmeText: readmeText
    }
  });
};

export const submitChanges = componentObject => (dispatch, getState) => {
  const { componentOptionsModal: { selectedKey, sourceFilePath } } = getState();
  const { sourceCode, sourceProps, sourceText } = componentObject;
  //   得到传递过来的数据
  let sourcePropsObj;
  try {
    sourcePropsObj = JSON.parse(sourceProps);
    // 如果没有style，那么删除配置数据的style项
    if (sourcePropsObj.style && isEmpty(sourcePropsObj.style)) {
      delete sourcePropsObj.style;
    }
  } catch (e) {
    dispatch(
      failed("Parsing properties error. Error: " + (e.message ? e.message : e))
    );
  }
  console.log("保存的数据为===", sourcePropsObj);
  //   保存源码的方法
  if (sourcePropsObj) {
    dispatch({
      type: SAVE_SOURCE_CODE,
      payload: {
        key: selectedKey,
        sourceFilePath: sourceFilePath,
        // 修改的文件地址
        sourcePropsObj: sourcePropsObj,
        // 配置项
        text: sourceText,
        sourceCode: sourceCode
        // 修改后的代码
      }
    });
  }
};

export const containerActions = dispatch =>
  bindActionCreators(
    {
      hideModal,
      submitChanges
    },
    dispatch
  );
