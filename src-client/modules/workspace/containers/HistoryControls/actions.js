import { bindActionCreators } from "redux";
import { graphApi } from "api";
import { removeSelectedKeys } from "modules/workspace/containers/SelectionBreadcrumbs/actions";
import { removeClipboardKeys } from "modules/workspace/containers/ClipboardIndicator/actions";
import {
  updatePage,
  saveModel,
  changePageRoute,
  resetPages
} from "modules/workspace/containers/DeskPage/actions";

export const UPDATE_HISTORY_COUNTER = "HistoryControls/UPDATE_HISTORY_COUNTER";

/**
 * currentPagePath当前所处的pagePath,从store的deskPage字段上获取
 */
export const pushHistory = () => (dispatch, getState) => {
  const { deskPage: { currentPagePath } } = getState();
  graphApi.pushHistory(currentPagePath);
  // 要求服务器保存一个历史记录
  dispatch(saveModel());
  //保存页面的数据到服务端
  dispatch({ type: UPDATE_HISTORY_COUNTER });
};

export const popHistory = () => (dispatch, getState) => {
  let historyObject = graphApi.popHistory();
  if (historyObject) {
    dispatch(removeClipboardKeys());
    dispatch(removeSelectedKeys());
    dispatch(resetPages());
    dispatch(updatePage());
    const { pagePath } = historyObject;
    if (pagePath) {
      dispatch(changePageRoute(pagePath));
    }
    dispatch({ type: UPDATE_HISTORY_COUNTER });
  }
};

export const containerActions = dispatch =>
  bindActionCreators(
    {
      popHistory
    },
    dispatch
  );
