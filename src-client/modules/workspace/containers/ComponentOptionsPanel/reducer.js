import * as actions from './actions.js';
import {initialExpandedStyleGroups} from './constants';

const initialState = {
    activeTab: 1,
    expandedStyleSections: initialExpandedStyleGroups,
};

export default (state = initialState, action = {}) => {

    const {type, payload} = action;

    if(type === actions.SET_ACTIVE_TAB){
        return Object.assign({}, state, {
            activeTab: payload
        });
    }

    if(type === actions.TOGGLE_STYLE_SECTION){
        let newExpandedStyleSections = Object.assign({}, state.expandedStyleSections);
        newExpandedStyleSections[payload] = !newExpandedStyleSections[payload];
        return Object.assign({}, state, {
            expandedStyleSections: newExpandedStyleSections
        });
    }

    return state;
}

