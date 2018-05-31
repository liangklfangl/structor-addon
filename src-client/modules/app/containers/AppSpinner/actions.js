
import { bindActionCreators } from 'redux';

export const STARTED = "AppSpinner/STARTED";
export const DONE = "AppSpinner/DONE";

export const started = (payload) => ({ type: STARTED, payload });
export const done = (payload) => ({ type: DONE, payload });

export const containerActions = (dispatch) => bindActionCreators({
    started, done
}, dispatch);