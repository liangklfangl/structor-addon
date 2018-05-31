import { forOwn, isObject } from "lodash";
import { createSelector, createStructuredSelector } from "reselect";
import { graphApi, utilsStore } from "api";
const componentTreeSelector = state => state.libraryPanel.componentTree;
// componentTree
const selectedKeysSelector = state => state.selectionBreadcrumbs.selectedKeys;
// selectedKeys

/**
 * 获取当前的Component
 * https://github.com/reduxjs/reselect#reselect
 */
export const currentComponentSelector = createSelector(
  componentTreeSelector,
  selectedKeysSelector,
  (tree, keys) => {
    let result = undefined;
    if (keys && keys.length === 1) {
      // 通过Graph.node获取到节点
      const selectedNode = graphApi.getNode(keys[0]);
      // 获取选中的Node
      if (selectedNode) {
        const { modelNode } = selectedNode;
        // 获取到节点的mountNode
        let componentDef;
        try {
          componentDef = utilsStore.findComponentDef(
            tree,
            modelNode.type,
            modelNode.namespace
          );
          //   根据type+namespace获取到组件的定义，可以知道组件的absoluteIndexFilePath/defaults等属性
          result = result || {};
          result.key = keys[0];
          result.componentName = modelNode.type;
          result.namespace = modelNode.namespace;
          result.props = modelNode.props;
          result.text = modelNode.text;
          result.children = modelNode.children;
          result.sourceFilePath = componentDef.absoluteIndexFilePath;
          result.defaults = componentDef.defaults;
          //   将所有的对象封装到result里面
        } catch (e) {
          // do nothing;
        }
      }
    }
    return result;
  }
);

export const modelSelector = createStructuredSelector({
  componentModel: state => state.componentControls,
  //userAccountModel: state => state.appContainer.userAccount,
  currentComponent: currentComponentSelector
});
