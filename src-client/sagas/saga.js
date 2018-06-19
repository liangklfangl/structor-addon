import { fork } from "redux-saga/effects";
import appContainerSaga from "modules/app/containers/AppContainer/sagas";
import appMessageSaga from "modules/app/containers/AppMessage/sagas";
import deskPageSaga from "modules/workspace/containers/DeskPage/sagas";
import libraryPanelSaga from "modules/workspace/containers/LibraryPanel/sagas";
import componentOptionsSaga from "modules/workspace/containers/ComponentOptionsModal/sagas";
import actionDispatchSagas from "modules/workspace/containers/ActionDispatchModal/sagas";
import generatorSaga from "modules/generator/containers/Generator/sagas";
import proxySetupModalSaga from "modules/app/containers/ProxySetupModal/sagas";
import saveDefaultModelModalSaga from "modules/workspace/containers/SaveDefaultModelModal/sagas";
import pageExportControlsSaga from "modules/workspace/containers/PageExportControls/sagas";
import extractorSaga from "modules/extractor/containers/Extractor/sagas";
import installerSaga from "modules/installer/containers/Installer/sagas";

export default function* mainSaga() {
  yield fork(appContainerSaga);
  yield fork(appMessageSaga);
  yield fork(deskPageSaga);
  yield fork(libraryPanelSaga);
  yield fork(componentOptionsSaga);
  yield fork(generatorSaga);
  yield fork(proxySetupModalSaga);
  yield fork(saveDefaultModelModalSaga);
  yield fork(pageExportControlsSaga);
  yield fork(extractorSaga);
  yield fork(installerSaga);
//   数据+行为的saga
  yield fork(actionDispatchSagas);
}
