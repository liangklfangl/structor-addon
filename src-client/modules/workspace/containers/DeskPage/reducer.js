import * as actions from "./actions.js";

const initialState = {
  pages: [],
  currentPageIndex: -1,
  currentPageName: null,
  currentPagePath: null,
  pagePathToChange: undefined,
  reloadPageRequest: false,
  isEditModeOn: true,
  isLivePreviewModeOn: false,

  reloadPageCounter: 0,
  markedUpdateCounter: 0,
  modelUpdateCounter: 0
};
/**
 * 页面优化
 */
export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  /**
   * 重置state的reloadPageCounter值要求重新渲染页面
   */
  if (type === actions.RELOAD_PAGE) {
    return Object.assign({}, state, {
      reloadPageCounter: state.reloadPageCounter + 1
    });
  }

  if (type === actions.CHANGE_PAGE_ROUTE) {
    console.log('CHANGE_PAGE_ROUTE===',payload);
    return Object.assign({}, state, {
      pagePathToChange: payload
    });
  }

  /**
   * 改变路由了:比如切换页面，payload为切换后的页面地址
   * 操作:更新currentPagePath,currentPageName,currentPageIndex,pagePathToChange
   */
  if (type === actions.CHANGE_PAGE_ROUTE_FEEDBACK) {
    let pageIndex = -1;
    for (let i = 0; i < state.pages.length; i++) {
      if (state.pages[i].pagePath === payload) {
        pageIndex = i;
        break;
      }
    }
    if (pageIndex >= 0) {
      return Object.assign({}, state, {
        currentPagePath: state.pages[pageIndex].pagePath,
        currentPageName: state.pages[pageIndex].pageName,
        currentPageIndex: pageIndex,
        pagePathToChange: null
      });
    }
  }

  /**
   * 1.重新设置页面列表，state.currentPagePath表示当前的页面
   * 2.pages重新设置为payload,payload为更新后的页面列表了
   */
  if (type === actions.SET_PAGES) {
    if (payload && payload.length > 0) {
      let pageIndex = -1;
      for (let i = 0; i < payload.length; i++) {
        if (payload[i].pagePath === state.currentPagePath) {
          pageIndex = i;
          break;
        }
      }
      return Object.assign({}, state, {
        pages: payload,
        currentPageIndex: pageIndex
      });
    }
  }

  if (type === actions.SET_EDIT_MODE_ON) {
    return Object.assign({}, state, {
      isEditModeOn: true,
      isLivePreviewModeOn: false,
      modelUpdateCounter: state.modelUpdateCounter + 1
    });
  }

  if (type === actions.SET_LIVE_PREVIEW_MODE_ON) {
    console.log("预览效果的值为==", state);
    return Object.assign({}, state, {
      isEditModeOn: false,
      isLivePreviewModeOn: true,
      modelUpdateCounter: state.modelUpdateCounter + 1
    });
  }

  // 重新加载页面
  if (type === actions.SET_RELOAD_PAGE_REQUEST) {
    return Object.assign({}, state, {
      reloadPageRequest: true
    });
  }

  if (type === actions.EXECUTE_RELOAD_PAGE_REQUEST) {
    if (state.reloadPageRequest) {
      return Object.assign({}, state, {
        reloadPageCounter: state.reloadPageCounter + 1,
        reloadPageRequest: false
      });
    }
  }

  if (type === actions.UPDATE_MARKED) {
    return Object.assign({}, state, {
      markedUpdateCounter: state.markedUpdateCounter + 1
    });
  }

  /**
   * 页面更新
   */
  if (type === actions.UPDATE_PAGE) {
    console.log("更新页面的值为====", state);
    return Object.assign({}, state, {
      modelUpdateCounter: state.modelUpdateCounter + 1
    });
  }
  return state;
};
