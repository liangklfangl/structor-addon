
import * as actions from './actions.js';

const initialState = {
    iframeWidth: '100%',
    isLibraryPanelActive: false,
    isPageTreeviewActive: false,
    isQuickOptionsActive: false,
    isPageListPanelActive: false,
};

export default (state = initialState, action = {}) => {

    const {type, payload} = action;

    if(type === actions.CHANGE_VIEWPORT_WIDTH){
        return Object.assign({}, state, {
            iframeWidth: payload
        });
    }

    if(type === actions.TOGGLE_LIBRARY_PANEL){
        return Object.assign({}, state, {
            isLibraryPanelActive: !state.isLibraryPanelActive,
            isPageListPanelActive: false,
        });
    }

    if(type === actions.TOGGLE_PAGELIST_PANEL){
        return Object.assign({}, state, {
            isPageListPanelActive: !state.isPageListPanelActive,
            isLibraryPanelActive: false,
        });
    }

    if(type === actions.TOGGLE_PAGE_TREEVIEW){
        return Object.assign({}, state, { isPageTreeviewActive: !state.isPageTreeviewActive });
    }

    if(type === actions.TOGGLE_QUICK_OPTIONS){
        return Object.assign({}, state, { isQuickOptionsActive: !state.isQuickOptionsActive });
    }

    return state;
}

