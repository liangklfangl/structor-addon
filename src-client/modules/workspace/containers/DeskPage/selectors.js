import { createSelector, createStructuredSelector } from "reselect";
import { currentComponentSelector } from "modules/workspace/containers/ComponentControls/selectors";

export const pagesSelector = state => state.deskPage.pages;
export const deskPageSelector = state => state.deskPage;

export const currentPageSelector = createSelector(
  deskPageSelector,
  deskPage => {
    const { currentPageIndex, currentPageName, currentPagePath } = deskPage;
    return {
    //   componentModel,
      pageIndex: currentPageIndex,
      pageName: currentPageName,
      pagePath: currentPagePath
    };
  }
);

export const modelSelector = createStructuredSelector({
  componentModel: state => state.deskPage,
  clipboardIndicatorModel: state => state.clipboardIndicator,
  selectionBreadcrumbsModel: state => state.selectionBreadcrumbs,
  currentComponent: currentComponentSelector
});
