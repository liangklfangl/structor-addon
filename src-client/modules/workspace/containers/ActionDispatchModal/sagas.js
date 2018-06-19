import { fork, take, call, put, cancel } from "redux-saga/effects";
import { SagaCancellationException } from "redux-saga";
import { serverApi, graphApi, utils } from "api";
import * as actions from "./actions.js";
import * as spinnerActions from "modules/app/containers/AppSpinner/actions";
import * as messageActions from "modules/app/containers/AppMessage/actions";
import { pushHistory } from "modules/workspace/containers/HistoryControls/actions";

// main saga
// 所有DeskPage的接口都会被拦截
export default function* mainSaga() {
}
