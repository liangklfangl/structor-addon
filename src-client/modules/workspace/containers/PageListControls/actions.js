import { bindActionCreators } from 'redux';
import { changePageRoute, deletePage as deleteDeskPage } from 'modules/workspace/containers/DeskPage/actions';
// 路由切换
import { showModal } from 'modules/workspace/containers/PageOptionsModal/actions';
import { showModal as confirmModal } from 'modules/app/containers/ConfirmationModal/actions';

export const deletePage = () => (dispatch, getState) => {
	dispatch(confirmModal(
		'#### Are you sure you want to delete the current page?',
		() => {
            dispatch(deleteDeskPage());
		}
	));
};

export const containerActions = (dispatch) => bindActionCreators({
    changePageRoute, showModal, deletePage
}, dispatch);