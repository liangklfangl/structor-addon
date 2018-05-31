import { createStructuredSelector } from 'reselect';
import { currentComponentSelector } from 'modules/workspace/containers/ComponentControls/selectors';

export const modelSelector = createStructuredSelector({
    componentModel: state => state.componentOptionsPanel,
    currentComponent: currentComponentSelector
    //deskPageModel: state => state.deskPage
});
