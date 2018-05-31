import { createStructuredSelector } from 'reselect';
import { componentNamesSelector } from 'modules/workspace/containers/LibraryPanel/selectors';

export const modelSelector = createStructuredSelector({
    componentModel: state => state.quickAppendModal,
    componentNames: componentNamesSelector,
});

