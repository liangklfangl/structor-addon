import { fork, take, call, put, race, cancel } from "redux-saga/effects";
import { SagaCancellationException } from "redux-saga";
import * as actions from "./actions.js";
import * as spinnerActions from "modules/app/containers/AppSpinner/actions";
import * as messageActions from "modules/app/containers/AppMessage/actions.js";
import { serverApi, graphApi } from "api";
// api是src-client下的代码
import { pushHistory } from "modules/workspace/containers/HistoryControls/actions";
import { updatePage } from "modules/workspace/containers/DeskPage/actions";
import { setSelectedKey } from "modules/workspace/containers/SelectionBreadcrumbs/actions";

const delay = ms =>
  new Promise(resolve => setTimeout(() => resolve("timed out"), ms));

/**
   * 延迟10s保存数据
   */
function* delaySaveComponentSourceCode() {
  try {
    yield call(delay, 10000);
    yield put(
      messageActions.timeout(
        "Saving source code is timed out. Check the console output for errors."
      )
    );
    yield put(actions.setReloadPageRequest());
    yield put(actions.saveSourceCodeTimeout());
  } catch (e) {
    if (e instanceof SagaCancellationException) {
      // do nothing
    }
  }
}

/**
 * 
 */
function* saveComponentSourceCode(options) {
  try {
    console.log("options====", options);
    const { key, sourcePropsObj, text, sourceCode, sourceFilePath } = options;
    let node = graphApi.getNode(key);
    // 在弹窗里面输入数据的时候数据就赢变化了，这里的数据只是为了更新组件
    if (node) {
      //把代码写到具体的文件夹
      console.log("node====", node);
      if (sourceCode && sourceFilePath) {
        // 写源码数据
        console.log("writeComponentSource===", sourceCode);
        yield call(serverApi.writeComponentSource, sourceFilePath, sourceCode);
      }
      yield put(pushHistory());
      node.modelNode.props = sourcePropsObj;
      node.modelNode.text = text;
      // 更新数据
      yield put(setSelectedKey(key));
      yield put(updatePage());
      //   更新页面
      yield put(actions.hideModal());
      // 隐藏弹窗
    } else {
      yield put(
        messageActions.failed(
          "Saving source code error. Error: component with key " +
            key +
            " was not found."
        )
      );
    }
    yield put(actions.saveSourceCodeDone());
  } catch (error) {
    console.error(error);
    if (error instanceof SagaCancellationException) {
      // do nothing
    } else {
      yield put(
        messageActions.failed(
          "Saving source code error. Error: " +
            (error.message ? error.message : error)
        )
      );
      yield put(actions.saveSourceCodeDone());
    }
  }
}

/**
 * 保存已经修改好的组件的代码
 */
function* saveSourceCode() {
  while (true) {
    const { payload } = yield take(actions.SAVE_SOURCE_CODE);
    console.log("payload----", payload);
    yield put(spinnerActions.started("Saving source code"));
    // 设置开始保存的标志
    const saveTask = yield fork(saveComponentSourceCode, payload);
    // 保存
    const delayTask = yield fork(delaySaveComponentSourceCode);
    // 获取最新
    yield take([
      actions.SAVE_SOURCE_CODE_DONE,
      actions.SAVE_SOURCE_CODE_TIMEOUT
    ]);
    yield cancel(saveTask);
    yield cancel(delayTask);
    yield put(spinnerActions.done("Saving source code"));
  }
}

/**
 * 
 *根据namespace等获取组件内容
 */
function* loadComponentOptions(componentName, namespace, sourceFilePath) {
  try {
    return yield call(
      serverApi.loadComponentOptions,
      componentName,
      namespace,
      sourceFilePath
    );
  } catch (error) {
    if (error instanceof SagaCancellationException) {
      yield put(
        messageActions.failed("Loading component options was canceled.")
      );
    } else {
      yield put(
        messageActions.failed(
          "Loading component options error. Error: " +
            (error.message ? error.message : error)
        )
      );
    }
  }
}
/**
 * LOAD_OPTIONS_AND_SHOW_MODAL获取配置信息
 * 传入的获取到sourceFilePath, componentName, namespace
 */
function* loadOptionsAndShowModal() {
  while (true) {
    const { payload } = yield take(actions.LOAD_OPTIONS_AND_SHOW_MODAL);
    yield put(spinnerActions.started("Loading component options"));
    try {
      const { sourceFilePath, componentName, namespace } = payload;
      const { timeout, response } = yield race({
        response: call(
          loadComponentOptions,
          componentName,
          namespace,
          sourceFilePath
        ),
        timeout: call(delay, 10000)
      });
      // 如果有配置信息，那么要
      if (response) {
        yield put(actions.setOptions({ ...payload, ...response }));
        yield put(actions.showModal());
      } else if (timeout) {
        yield put(
          messageActions.timeout("Loading component options is timed out.")
        );
      }
    } catch (error) {
      yield put(
        messageActions.failed(
          "Loading component options error. Error: " +
            (error.message ? error.message : error)
        )
      );
    }
    yield put(spinnerActions.done("Loading component options"));
  }
}

// main saga
// 谁都会被拦截，只要走接口
export default function* mainSaga() {
  console.log("选项弹窗的mainSaga被调用~~~");
  yield [fork(saveSourceCode), fork(loadOptionsAndShowModal)];
}
