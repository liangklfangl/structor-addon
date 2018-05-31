import { bindActionCreators } from "redux";

export const CHANGE_VIEWPORT_WIDTH = "Desk/CHANGE_VIEWPORT_WIDTH";
export const TOGGLE_LIBRARY_PANEL = "Desk/TOGGLE_LIBRARY_PANEL";
export const TOGGLE_PAGELIST_PANEL = "Desk/TOGGLE_PAGELIST_PANEL";
export const TOGGLE_PAGE_TREEVIEW = "Desk/TOGGLE_PAGE_TREEVIEW";
export const TOGGLE_QUICK_OPTIONS = "Desk/TOGGLE_QUICK_OPTIONS";
//export const

export const togglePageTreeview = () => ({ type: TOGGLE_PAGE_TREEVIEW });
export const toggleQuickOptions = () => ({ type: TOGGLE_QUICK_OPTIONS });
export const togglePageListPanel = () => ({ type: TOGGLE_PAGELIST_PANEL });
export const changeViewportWidth = width => ({
  type: CHANGE_VIEWPORT_WIDTH,
  payload: width
});

/**
 * 显示左侧面板
 */
export const toggleLibraryPanel = () => (dispatch, getState) => {
  dispatch({ type: TOGGLE_LIBRARY_PANEL });
};

export const containerActions = dispatch =>
  bindActionCreators(
    {
      changeViewportWidth,
      togglePageTreeview
    },
    dispatch
  );
