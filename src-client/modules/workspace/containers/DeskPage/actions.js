import { bindActionCreators } from "redux";
import { utils, utilsStore, graphApi } from "api";
import {
  success,
  failed,
  timeout,
  close
} from "modules/app/containers/AppMessage/actions";
import {
  setForCuttingKeys,
  setForCopyingKeys,
  resetClipboardKeys
} from "modules/workspace/containers/ClipboardIndicator/actions";
import {
  pasteBefore,
  pasteAfter,
  pasteFirst,
  pasteLast,
  pasteReplace
} from "modules/workspace/containers/ClipboardControls/actions";
import {
  setSelectedKey,
  resetSelectedKeys
} from "modules/workspace/containers/SelectionBreadcrumbs/actions";
import {
  cloneSelected,
  deleteSelected
} from "modules/workspace/containers/SelectionControls/actions";
import { loadOptionsAndShowModal } from "modules/workspace/containers/ComponentOptionsModal/actions";
// 加载数据，ComponentOptionsModal能够接受到这个action
import {
  pushHistory,
  popHistory
} from "modules/workspace/containers/HistoryControls/actions";
import { showModal as showQuickAppend } from "modules/workspace/containers/QuickAppendModal/actions";
import {
  changeOptionDragResize as changeOptionDrag,
  changeOption
} from "modules/workspace/containers/ComponentOptionsPanel/actions";
import { showContextMenuModal } from "modules/workspace/containers/ContextMenuModel/actions.js";
// context menu
export const SET_PAGES = "DeskPage/SET_PAGES";
export const RELOAD_PAGE = "DeskPage/RELOAD_PAGE";
export const LOAD_PAGE = "DeskPage/LOAD_PAGE";
export const PAGE_LOADED = "DeskPage/PAGE_LOADED";
export const PAGE_LOAD_TIMEOUT = "DeskPage/PAGE_LOAD_TIMEOUT";
export const CHANGE_PAGE_ROUTE = "DeskPage/CHANGE_PAGE_ROUTE";
export const SET_LIVE_PREVIEW_MODE_ON = "DeskPage/SET_LIVE_PREVIEW_MODE_ON";
export const SET_EDIT_MODE_ON = "DeskPage/SET_EDIT_MODE_ON";
export const SET_RELOAD_PAGE_REQUEST = "DeskPage/SET_RELOAD_PAGE_REQUEST";
export const EXECUTE_RELOAD_PAGE_REQUEST =
  "DeskPage/EXECUTE_RELOAD_PAGE_REQUEST";
export const CHANGE_PAGE_ROUTE_FEEDBACK = "DeskPage/CHANGE_PAGE_ROUTE_FEEDBACK";
export const UPDATE_PAGE = "DeskPage/UPDATE_PAGE";
export const UPDATE_MARKED = "DeskPage/UPDATE_MARKED";
export const SAVE_MODEL = "DeskPage/SAVE_MODEL";

// 重新设置页面的list
export const setPages = pages => ({ type: SET_PAGES, payload: pages });

export const reloadPage = () => ({ type: RELOAD_PAGE });
export const loadPage = () => ({ type: LOAD_PAGE });
// 只是发出一个action而已
export const pageLoaded = () => ({ type: PAGE_LOADED });
export const pageLoadTimeout = () => ({ type: PAGE_LOAD_TIMEOUT });
export const changePageRoute = pagePath => ({
  type: CHANGE_PAGE_ROUTE,
  payload: pagePath
});
// 预览效果
export const setLivePreviewModeOn = () => ({ type: SET_LIVE_PREVIEW_MODE_ON });
// 设置预览效果
export const setEditModeOn = () => ({ type: SET_EDIT_MODE_ON });
export const setReloadPageRequest = () => ({ type: SET_RELOAD_PAGE_REQUEST });
export const executeReloadPageRequest = () => ({
  type: EXECUTE_RELOAD_PAGE_REQUEST
});

/**
 * 显示context menu
 */
export const showContextMenuSetting = (isShow, addOn = {}) => (
  dispatch,
  getState
) => {
  dispatch(showContextMenuModal(isShow, addOn));
};
export const updatePage = () => ({ type: UPDATE_PAGE });
// 更新页面
export const updateMarked = () => ({ type: UPDATE_MARKED });
// 保存客户端数据到服务端
export const saveModel = () => ({ type: SAVE_MODEL });

//改变新路由
export const changePageRouteFeedback = pathname => (dispatch, getState) => {
  dispatch({ type: CHANGE_PAGE_ROUTE_FEEDBACK, payload: pathname });
};

/**
 * 
 * @param {*} model 
 * 加载页面数据
 * 1:根据model实例化服务端的Graph对象
 */
export const loadModel = model => (dispatch, getState) => {
  let { pages } = model;
  // force to have at least one page
  if (!pages || pages.length <= 0) {
    let pageModel = utilsStore.getTemplatePageModel();
    model.pages = [pageModel];
  }
  graphApi.initGraph(model);
  let pageList = graphApi.getPages();
  dispatch(setPages(pageList));
  // 设置pages列表
  dispatch(changePageRouteFeedback(pageList[0].pagePath));
};

/**
 * 
 * @param {*} pageName 
 * @param {*} pagePath 
 */
export const addNewPage = (pageName, pagePath) => (dispatch, getState) => {
  try {
    dispatch(pushHistory());
    // 保存数据到服务端
    let pageModel = utilsStore.getTemplatePageModel();
    // 得到模板添加页面的数据对象
    let pageList = graphApi.addNewPage(pageModel, pagePath, pageName);
    // 调用服务端新添加页面
    dispatch(setPages(pageList));
    // 更新页面
    dispatch(changePageRouteFeedback(pageList[pageList.length - 1].pagePath));
    // 设置为新的路由页面
    dispatch(reloadPage());
    // 重新加载页面
    dispatch(saveModel());
    // 重新加载页面+保存页面数据
    dispatch(success("New page was added successfully"));
  } catch (e) {
    dispatch(failed(e.message ? e.message : e));
  }
};

/**
 * 
 * @param {*} pageName 
 * @param {*} pagePath 
 * 复制一个页面
 */
export const clonePage = (pageName, pagePath) => (dispatch, getState) => {
  try {
    dispatch(pushHistory());
    const { deskPage: { currentPagePath } } = getState();
    let pageList = graphApi.duplicatePage(currentPagePath, pagePath, pageName);
    dispatch(setPages(pageList));
    dispatch(changePageRouteFeedback(pageList[pageList.length - 1].pagePath));
    dispatch(reloadPage());
    dispatch(saveModel());
    dispatch(success("Page was cloned successfully"));
  } catch (e) {
    dispatch(failed(e.message ? e.message : e));
  }
};

/**
 * 
 * @param {*} pageName 
 * @param {*} pagePath 
 */
export const changePageOptions = (pageName, pagePath) => (
  dispatch,
  getState
) => {
  const { deskPage: { currentPagePath, currentPageName } } = getState();
  try {
    if (pagePath !== currentPagePath || pageName !== currentPageName) {
      dispatch(pushHistory());
      let pageList;
      var firstChar = pageName.charAt(0).toUpperCase();
      pageName = firstChar + pageName.substr(1);
      pageList = graphApi.changePagePathAndName(
        currentPagePath,
        pagePath,
        pageName
      );
      if (pageList) {
        dispatch(setPages(pageList));
        dispatch(changePageRouteFeedback(pagePath));
        dispatch(reloadPage());
        dispatch(saveModel());
        dispatch(success("Page options were changed successfully."));
      }
    }
  } catch (e) {
    dispatch(failed(e.message ? e.message : e));
  }
};

export const setIndexPage = () => (dispatch, getState) => {
  try {
    dispatch(pushHistory());
    const { deskPage: { currentPagePath } } = getState();
    let pageList = graphApi.setIndexPage(currentPagePath);
    if (pageList) {
      dispatch(setPages(pageList));
      dispatch(reloadPage());
      dispatch(saveModel());
      dispatch(
        success("Route " + currentPagePath + " now is the index route.")
      );
    }
  } catch (e) {
    dispatch(failed(e.message ? e.message : e));
  }
};

export const deletePage = () => (dispatch, getState) => {
  try {
    dispatch(pushHistory());
    const { deskPage: { currentPagePath, currentPageIndex } } = getState();
    let pageList = graphApi.deletePage(currentPagePath);
    if (pageList) {
      dispatch(setPages(pageList));
      if (currentPageIndex === 0) {
        dispatch(changePageRouteFeedback(pageList[0].pagePath));
      } else if (currentPageIndex > 0) {
        dispatch(
          changePageRouteFeedback(pageList[currentPageIndex - 1].pagePath)
        );
      }
      dispatch(resetClipboardKeys());
      dispatch(resetSelectedKeys());
      dispatch(reloadPage());
      dispatch(saveModel());
      dispatch(
        success("Route path " + currentPagePath + " were deleted successfully")
      );
    }
  } catch (e) {
    dispatch(failed(e.message ? e.message : e));
  }
};

export const resetPages = () => (dispatch, getState) => {
  let pageList = graphApi.getPages();
  dispatch(setPages(pageList));
};

export const containerActions = dispatch =>
  bindActionCreators(
    {
      loadPage,
      pageLoaded,
      // 页面加载是否完成
      setSelectedKey,
      loadOptionsAndShowModal,
      // 加载组件的数据
      changePageRouteFeedback,
      setForCuttingKeys,
      setForCopyingKeys,
      pasteBefore,
      pasteAfter,
      pasteFirst,
      pasteLast,
      pasteReplace,
      showContextMenuModal: showContextMenuSetting,
      cloneSelected,
      deleteSelected,
      showQuickAppend,
      popHistory,
      changeOptionDrag,
      // 因为拖动导致元素的props值发送变化
      changeOption
      // 修改prop并让组件重新渲染
    },
    dispatch
  );
