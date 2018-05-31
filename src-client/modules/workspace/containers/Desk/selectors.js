import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
    componentModel: state => state.desk,
    deskPageModel: state => state.deskPage
});
