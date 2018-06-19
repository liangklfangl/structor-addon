import { fork, take, call, put, cancel } from "redux-saga/effects";
import { SagaCancellationException } from "redux-saga";
import * as actions from "./actions.js";
import * as spinnerActions from "modules/app/containers/AppSpinner/actions";
import * as messageActions from "modules/app/containers/AppMessage/actions";
import * as generatorListActions from "modules/generator/containers/GeneratorList/actions";
import * as appContainerActions from "modules/app/containers/AppContainer/actions";
import * as deskPageActions from "modules/workspace/containers/DeskPage/actions";
// deskPageActions页面的桌面行为
import * as clipboardIndicatorActions from "modules/workspace/containers/ClipboardIndicator/actions";
import * as libraryPanelActions from "modules/workspace/containers/LibraryPanel/actions";
// libraryPanelActions左侧显示组件
import * as selectionBreadcrumbsActions from "modules/workspace/containers/SelectionBreadcrumbs/actions";
import { serverApi, graphApi, coockiesApi } from "api";
import * as historyActions from "modules/workspace/containers/HistoryControls/actions";

/**
 * 预处理内容，通过serverApi.pregenerate的pregenerate完成，即是在structor内部调用.structor下的gengine来完成
 */
function* pregenerate() {
  while (true) {
    const {
      payload: {
        generatorName,
        generatorDirPath,
        namespace,
        componentName,
        modelNode
      }
    } = yield take(actions.PREGENERATE);
    yield put(spinnerActions.started("Retrieving metadata"));
    try {
      const pregeneratedData = yield call(
        serverApi.pregenerate,
        generatorName,
        generatorDirPath,
        namespace,
        componentName,
        modelNode
      );
      yield put(
        actions.setComponentMetadata(
          pregeneratedData.metaData,
          pregeneratedData.metaHelp
        )
      );
      yield put(actions.stepToStage(actions.STAGE3));
      let recentGenerators = coockiesApi.addToRecentGenerators(generatorName);
      yield put(generatorListActions.setRecentGenerators(recentGenerators));
    } catch (error) {
      yield put(
        messageActions.failed(
          "Metadata retrieving has an error. " +
            (error.message ? error.message : error)
        )
      );
    }
    yield put(spinnerActions.done("Retrieving metadata"));
  }
}

/**
 * 预处理内容，通过serverApi.generate的generate完成，即是在structor内部调用.structor下的gengine来完成
 */
function* generate() {
  while (true) {
    const {
      payload: {
        generatorName,
        generatorDirPath,
        namespace,
        componentName,
        modelNode,
        metaData
      }
    } = yield take(actions.GENERATE);
    yield put(spinnerActions.started("Generating the source code"));
    try {
      const generatedData = yield call(
        serverApi.generate,
        generatorName,
        generatorDirPath,
        namespace,
        componentName,
        modelNode,
        metaData
      );
      yield put(actions.setGeneratedData(generatedData));
      yield put(actions.stepToStage(actions.STAGE4));
    } catch (error) {
      yield put(
        messageActions.failed(
          "The source code generation has an error. " +
            (error.message ? error.message : error)
        )
      );
    }
    yield put(spinnerActions.done("Generating the source code"));
  }
}

/**
 * Install一个Redux组件的时候需要保存的内容
 */
function* saveGenerated() {
  while (true) {
    const {
      payload: { selectedKey, newModelNode, files, dependencies }
    } = yield take(actions.SAVE_GENERATED);
    yield put(spinnerActions.started("Installing & saving the source code"));
    try {
      yield call(serverApi.saveGenerated, files, dependencies);
      console.log("调用saveGenerated值为====", files, dependencies);
      graphApi.changeModelNodeType(selectedKey, newModelNode);
      console.log(
        "调用saveGenerated changeModelNodeType值为====",
        selectedKey,
        newModelNode
      );
      yield put(clipboardIndicatorActions.removeClipboardKeys());
      yield put(selectionBreadcrumbsActions.setSelectedKey(selectedKey));
      yield put(libraryPanelActions.loadComponents());
      //重新加载组件左侧的组件
      yield put(deskPageActions.setReloadPageRequest());
      //  重新加载页面
      yield put(actions.hide());
      yield put(historyActions.pushHistory());
    } catch (error) {
      yield put(
        messageActions.failed(
          "Source code installation has an error. " +
            (error.message ? error.message : error)
        )
      );
    }
    yield put(spinnerActions.done("Installing & saving the source code"));
  }
}

/**
 * 获取所有的generator
 */
function* loadGenerators() {
  while (true) {
    yield take(actions.LOAD_GENERATORS);
    yield put(spinnerActions.started("Loading generators"));
    try {
      let generatorsList = yield call(serverApi.getAvailableGeneratorsList);
      const recentGenerators = coockiesApi.getRecentGenerators();
      yield put(generatorListActions.setGenerators(generatorsList));
      yield put(generatorListActions.setRecentGenerators(recentGenerators));
      yield put(appContainerActions.showGenerator());
    } catch (error) {
      yield put(
        messageActions.failed(
          "Generators loading has an error. " +
            (error.message ? error.message : error)
        )
      );
    }
    yield put(spinnerActions.done("Loading generators"));
  }
}

// main saga
export default function* mainSaga() {
  yield fork(loadGenerators);
  // yield fork(loadAllGenerators);
  yield fork(pregenerate);
  yield fork(generate);
  // yield fork(remove);
  yield fork(saveGenerated);
  // 保存产生的文件内容
}
