import { combineReducers } from "redux";

import appContainerReducer from "modules/app/containers/AppContainer/reducer";
import appSpinnerReducer from "modules/app/containers/AppSpinner/reducer";
import appMessageReducer from "modules/app/containers/AppMessage/reducer";
import confirmationModalReducer from "modules/app/containers/ConfirmationModal/reducer";
import informationModalReducer from "modules/app/containers/InformationModal/reducer";
import deskReducer from "modules/workspace/containers/Desk/reducer";
import deskPageReducer from "modules/workspace/containers/DeskPage/reducer";
import toolbarLeftReducer from "modules/workspace/containers/ToolbarLeft/reducer";
import toolbarTopReducer from "modules/workspace/containers/ToolbarTop/reducer";
import pageExportControlsReducer from "modules/workspace/containers/PageExportControls/reducer";
import pageListControlsReducer from "modules/workspace/containers/PageListControls/reducer";
import pageListPanelReducer from "modules/workspace/containers/PageListPanel/reducer";
import pageViewControlsReducer from "modules/workspace/containers/PageViewControls/reducer";
import pageOptionsModalReducer from "modules/workspace/containers/PageOptionsModal/reducer";
import pageTreeViewPanelReducer from "modules/workspace/containers/PageTreeViewPanel/reducer";
import toolbarSelectionReducer from "modules/workspace/containers/ToolbarSelection/reducer";
import selectionBreadcrumbsReducer from "modules/workspace/containers/SelectionBreadcrumbs/reducer";
import selectionControlsReducer from "modules/workspace/containers/SelectionControls/reducer";
import clipboardControlsReducer from "modules/workspace/containers/ClipboardControls/reducer";
import clipboardIndicatorReducer from "modules/workspace/containers/ClipboardIndicator/reducer";
import historyControlsReducer from "modules/workspace/containers/HistoryControls/reducer";
import libraryControlsReducer from "modules/workspace/containers/LibraryControls/reducer";
import libraryPanelReducer from "modules/workspace/containers/LibraryPanel/reducer";
import componentOptionsModalReducer from "modules/workspace/containers/ComponentOptionsModal/reducer";
import componentContextMenuModalReducer from "modules/workspace/containers/ContextMenuModel/reducer";
// 行为
import componentActionDispatchModal from "modules/workspace/containers/ActionDispatchModal/reducer";
import componentControlsReducer from "modules/workspace/containers/ComponentControls/reducer";
import componentOptionsPanelReducer from "modules/workspace/containers/ComponentOptionsPanel/reducer";
import generatorReducer from "modules/generator/containers/Generator/reducer";
import generatorListReducer from "modules/generator/containers/GeneratorList/reducer";
import generatorBriefPanelReducer from "modules/generator/containers/GeneratorBriefPanel/reducer";
import metadataFormReducer from "modules/generator/containers/MetadataForm/reducer";
import sourceFilesListReducer from "modules/generator/containers/SourceFilesList/reducer";
import proxySetupModalReducer from "modules/app/containers/ProxySetupModal/reducer";
import pageTreeViewToolbarReducer from "modules/workspace/containers/PageTreeViewToolbar/reducer";
import quickAppendModalReducer from "modules/workspace/containers/QuickAppendModal/reducer";
import saveDefaultModelModalReducer from "modules/workspace/containers/SaveDefaultModelModal/reducer";
import installerReducer from "modules/installer/containers/Installer/reducer";
import extractorReducer from "modules/extractor/containers/Extractor/reducer";
import namespaceListReducer from "modules/extractor/containers/NamespaceList/reducer";
import extractListReducer from "modules/extractor/containers/ExtractList/reducer";
import selectDirectoryModalReducer from "modules/installer/containers/SelectDirectoryModal/reducer";

const reducer = combineReducers({
  appContainer: appContainerReducer,
  appSpinner: appSpinnerReducer,
  appMessage: appMessageReducer,
  confirmationModal: confirmationModalReducer,
  informationModal: informationModalReducer,
  desk: deskReducer,
  deskPage: deskPageReducer,
  toolbarLeft: toolbarLeftReducer,
  toolbarTop: toolbarTopReducer,
  pageExportControls: pageExportControlsReducer,
  pageListControls: pageListControlsReducer,
  pageListPanel: pageListPanelReducer,
  pageViewControls: pageViewControlsReducer,
  pageOptionsModal: pageOptionsModalReducer,
  pageTreeViewPanel: pageTreeViewPanelReducer,
  toolbarSelection: toolbarSelectionReducer,
  selectionBreadcrumbs: selectionBreadcrumbsReducer,
  selectionControls: selectionControlsReducer,
  clipboardControls: clipboardControlsReducer,
  clipboardIndicator: clipboardIndicatorReducer,
  historyControls: historyControlsReducer,
  libraryControls: libraryControlsReducer,
  libraryPanel: libraryPanelReducer,
  componentOptionsModal: componentOptionsModalReducer,
  contextMenuModal: componentContextMenuModalReducer,
  actionDispatchModal: componentActionDispatchModal,
  // 行为model
  componentControls: componentControlsReducer,
  componentOptionsPanel: componentOptionsPanelReducer,
  generator: generatorReducer,
  generatorList: generatorListReducer,
  generatorBriefPanel: generatorBriefPanelReducer,
  metadataForm: metadataFormReducer,
  sourceFilesList: sourceFilesListReducer,
  proxySetupModal: proxySetupModalReducer,
  pageTreeViewToolbar: pageTreeViewToolbarReducer,
  quickAppendModal: quickAppendModalReducer,
  saveDefaultModelModal: saveDefaultModelModalReducer,
  installer: installerReducer,
  extractor: extractorReducer,
  namespaceList: namespaceListReducer,
  extractList: extractListReducer,
  selectDirectoryModal: selectDirectoryModalReducer
});

export default reducer;
