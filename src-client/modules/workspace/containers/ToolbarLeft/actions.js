import { bindActionCreators } from "redux";
import { success } from "modules/app/containers/AppMessage/actions";
import {
  reloadPage,
  setEditModeOn,
  setLivePreviewModeOn,
  saveModel
} from "modules/workspace/containers/DeskPage/actions";
import {
  toggleLibraryPanel,
  togglePageListPanel,
  toggleQuickOptions,
  togglePageTreeview
} from "modules/workspace/containers/Desk/actions";
import { showModal as proxyShowModal } from "modules/app/containers/ProxySetupModal/actions";

export const saveProject = () => (dispatch, getState) => {
  dispatch(saveModel());
  dispatch(success("Project has been saved successfully."));
};

export const containerActions = dispatch =>
  bindActionCreators(
    {
      reloadPage,
      setEditModeOn,
      setLivePreviewModeOn,
      // 预览模式
      saveProject,
      toggleLibraryPanel,
      // 左侧的组件数据
      togglePageListPanel,
      toggleQuickOptions,
      togglePageTreeview,
      proxyShowModal
    },
    dispatch
  );
