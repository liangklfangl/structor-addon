import { fork, take, call, put, cancel } from "redux-saga/effects";
import { SagaCancellationException } from "redux-saga";
import { serverApi, graphApi, utils } from "api";
import * as actions from "./actions.js";
import * as spinnerActions from "modules/app/containers/AppSpinner/actions";
import * as messageActions from "modules/app/containers/AppMessage/actions";
import { pushHistory } from "modules/workspace/containers/HistoryControls/actions";

/**
 * 保存模块信息,DeskPage下所有都会调用得到模块数据然后保存
 */
function* preserveModel() {
  while (true) {
    yield take(actions.SAVE_MODEL);
    const model = graphApi.getModel();
    // 得到客户端数据并保存到服务器
    console.log("preserveModel===preserveModel被调用~~~", model);
    yield fork(serverApi.saveProjectModel, model);
  }
}

/**
 * 延迟加载时间
 */
const delay = ms =>
  new Promise(resolve => setTimeout(() => resolve("timed out"), ms));

/**
 * 页面延迟加载
 */
function* delayForPageLoaded() {
  try {
    yield call(delay, 120000);
    yield put(
      messageActions.timeout(
        "Page loading is timed out. Look at the console output and try to fix error. " +
          "Page will be reloaded automatically after successful compiling."
      )
    );
    yield put(actions.setReloadPageRequest());
    yield put(actions.pageLoadTimeout());
  } catch (e) {
    if (e instanceof SagaCancellationException) {
      // do nothing
    }
  }
}

/**
 * 桌面的componentDidMount时候会触发要求加载页面
 */
function* waitForPageLoaded() {
  while (true) {
    yield take([actions.LOAD_PAGE, actions.RELOAD_PAGE]);
    yield put(spinnerActions.started("Loading page"));
    const delayTask = yield fork(delayForPageLoaded);
    // https://redux-saga-in-chinese.js.org/docs/advanced/NonBlockingCalls.html
    yield take([actions.PAGE_LOADED, actions.PAGE_LOAD_TIMEOUT]);
    yield cancel(delayTask);
    yield put(spinnerActions.done("Loading page"));
  }
}

// main saga
// 所有DeskPage的接口都会被拦截
export default function* mainSaga() {
  console.log("mainSaga被调用~~~");
  yield [fork(waitForPageLoaded), fork(preserveModel)];
}
