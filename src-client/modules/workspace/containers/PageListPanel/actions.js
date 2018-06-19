
import { cloneDeep } from 'lodash';
import { bindActionCreators } from 'redux';
import { changePageRoute } from 'modules/workspace/containers/DeskPage/actions';

export const TOGGLE_ROUTE_SELECTION = "PageListPanel/TOGGLE_ROUTE_SELECTION";

export const toggleRouteSelection = (path) => ({type: TOGGLE_ROUTE_SELECTION, payload: {path}});

export const containerActions = (dispatch) => bindActionCreators({
	changePageRoute, toggleRouteSelection
}, dispatch);
