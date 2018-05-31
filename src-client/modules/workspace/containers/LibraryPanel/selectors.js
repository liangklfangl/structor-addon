import { forOwn, uniq } from "lodash";
import { createStructuredSelector, createSelector } from "reselect";

const componentTreeSelector = state => state.libraryPanel.componentTree;

export const componentNamesSelector = createSelector(
  componentTreeSelector,
  tree => {
    let result = [];
    if (tree.htmlComponents) {
      result = result.concat(Object.keys(tree.htmlComponents));
    }
    if (tree.components) {
      result = result.concat(Object.keys(tree.components));
    }
    if (tree.modules) {
      let moduleKeys;
      forOwn(tree.modules, (value, prop) => {
        if (value.components) {
          moduleKeys = Object.keys(value.components);
          result = result.concat(moduleKeys.map(name => `${name} [${prop}]`));
        }
      });
    }
    return result;
  }
);

export const availableComponentNamesSelector = createSelector(
  componentTreeSelector,
  tree => {
    let result = [];
    if (tree.components) {
      result = result.concat(Object.keys(tree.components));
    }
    if (tree.modules) {
      let moduleKeys;
      forOwn(tree.modules, (value, prop) => {
        if (value.components) {
          moduleKeys = Object.keys(value.components);
          result = result.concat(moduleKeys);
        }
      });
    }
    return uniq(result);
  }
);

export const availableNamespacesSelector = createSelector(
  componentTreeSelector,
  tree => {
    let result = [];
    if (tree.modules) {
      result = result.concat(Object.keys(tree.modules));
    }
    return result;
  }
);

// 从libraryPanel获取左侧的值
export const modelSelector = createStructuredSelector({
  componentModel: state => state.libraryPanel
});
