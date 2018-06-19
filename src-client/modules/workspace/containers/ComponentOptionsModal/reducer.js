import * as actions from './actions.js';

const initialState = {
    selectedKey: undefined,
    sourceCode: undefined,
    sourceFilePath: undefined,
    sourceProps: undefined,
    sourceText: undefined,
    readmeText: undefined,
    show: false
};

export default (state = initialState, action = {}) => {

    const {type, payload} = action;

    if(type === actions.HIDE_MODAL){
        return Object.assign({}, state, {
            selectedKey: undefined,
            sourceCode: undefined,
            sourceFilePath: undefined,
            sourceProps: undefined,
            sourceText: undefined,
            readmeText: undefined,
            show: false
        });
    }

    if(type === actions.SHOW_MODAL){
        return Object.assign({}, state, {show: true});
    }

    if(type === actions.SET_OPTIONS){
        return Object.assign({}, state, { ...payload });
    }

    return state;
}

