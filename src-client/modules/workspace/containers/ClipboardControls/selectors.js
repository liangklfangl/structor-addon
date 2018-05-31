import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
    componentModel: state => state.clipboardControls,
    clipboardIndicatorModel: state => state.clipboardIndicator,
    selectionBreadcrumbsModel: state => state.selectionBreadcrumbs
    //deskModel: state => state.desk
});

