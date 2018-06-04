import { bindActionCreators } from 'redux';
import { failed } from 'modules/app/containers/AppMessage/actions';
import { setReloadPageRequest, executeReloadPageRequest } from 'modules/workspace/containers/DeskPage/actions';
import { loadComponents } from 'modules/workspace/containers/LibraryPanel/actions';

export const GET_PROJECT_STATUS = "AppContainer/GET_PROJECT_STATUS";
export const SET_PROJECT_INFO = "AppContainer/SET_PROJECT_INFO";
export const SET_PROJECT_PROXY_URL = "AppContainer/SET_PROJECT_PROXY_URL";
export const COMPILER_START = "AppContainer/COMPILER_START";
export const COMPILER_DONE = "AppContainer/COMPILER_DONE";
export const COMPILER_TIMEOUT = "AppContainer/COMPILER_TIMEOUT";

export const SHOW_DESK = "AppContainer/SHOW_DESK";
export const SHOW_GENERATOR = "AppContainer/SHOW_GENERATOR";
export const HIDE_GENERATOR = "AppContainer/HIDE_GENERATOR";
export const SHOW_INSTALLER = "AppContainer/SHOW_INSTALLER";
export const HIDE_INSTALLER = "AppContainer/HIDE_INSTALLER";
export const SHOW_EXTRACTOR = "AppContainer/SHOW_EXTRACTOR";
export const HIDE_EXTRACTOR = "AppContainer/HIDE_EXTRACTOR";

export const getProjectStatus = () => ({ type: GET_PROJECT_STATUS });
export const setProjectInfo = (info) => ({ type: SET_PROJECT_INFO, payload: info });
export const setProjectProxyURL = (proxyURL) => ({ type: SET_PROJECT_PROXY_URL, payload: proxyURL });
export const compilerStart = () => ({ type: COMPILER_START });
export const compilerDone = () => ({ type: COMPILER_DONE });
export const compilerTimeout = () => ({ type: COMPILER_TIMEOUT });

export const showDesk = () => ({type: SHOW_DESK});
export const showGenerator = () => ({type: SHOW_GENERATOR});
export const hideGenerator = () => ({type: HIDE_GENERATOR});
export const showInstaller = () => ({type: SHOW_INSTALLER});
export const hideInstaller = () => ({type: HIDE_INSTALLER});
export const showExtractor = () => ({type: SHOW_EXTRACTOR});
export const hideExtractor = () => ({type: HIDE_EXTRACTOR});

export const handleCompilerMessage = (message) => (dispatch, getState) => {
    if(message.status === 'start'){
        dispatch(compilerStart());
    } else if(message.status === 'done') {
        if(message.errors && message.errors.length > 0){
            message.errors.forEach( error => {
                dispatch(failed(error.message ? error.message : error));
            });
            dispatch(setReloadPageRequest());
        } else {
            dispatch(loadComponents());
            dispatch(executeReloadPageRequest());
        }
        dispatch(compilerDone());
    }
};

export const containerActions = (dispatch) => bindActionCreators({
    getProjectStatus
}, dispatch);