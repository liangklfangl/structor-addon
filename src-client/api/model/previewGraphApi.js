import { Graph } from "graphlib";
import { fulex } from "../utils/utils.js";

import { mapModel, makeNodeWrapper } from "./graphUtils.js";

let previewGraph;

/**
 * 
 * @param {*} initialModelsMap 
 * compound: true表示两个节点之间可以多个边
 */
export function initGraph(initialModelsMap) {
  if (initialModelsMap) {
    previewGraph = new Graph({ compound: true });
    let variantKey;
    initialModelsMap.forEach((value, key) => {
      const model = fulex(value);
      if (model && model.length > 0) {
        // 如果有key,value那么设置一个节点
        previewGraph.setNode(key, model);
        // model设置key
        model.forEach((modelNode, index) => {
          variantKey = mapModel(previewGraph, modelNode, index);
          previewGraph.setParent(variantKey, key);
        });
      }
    });
  }
}

/**
 * 
 * @param {*} componentKey 
 * 获取所有的子节点
 */
export function getVariantKeys(componentKey) {
  const children = previewGraph.children(componentKey);
  return children && children.length > 0 ? children : [];
}

export function getWrappedModelForVariant(variantKey) {
  return traverseGraph(variantKey);
}

export function getModelForVariant(variantKey) {
  let node = previewGraph.node(variantKey);
  if (node) {
    return node.modelNode;
  }
  return undefined;
}

/**
 * 
 * @param {*} rootNodeKey 
 * @param {*} result 
 * 遍历grap
 */
function traverseGraph(rootNodeKey, result) {
  let rootNode = previewGraph.node(rootNodeKey);
  // 获取节点
  if (rootNode) {
    let resultNode = makeNodeWrapper(rootNodeKey, rootNode);
    // return {
    //     key: key,
    //     modelNode: graphNode.modelNode,
    //     index: graphNode.index,
    //     prop: graphNode.prop,
    //     selected: graphNode.selected,
    //     highlighted: graphNode.highlighted,
    //     isForCutting: graphNode.isForCutting,
    //     isForCuttingChild: graphNode.isForCuttingChild,
    //     isForCopying: graphNode.isForCopying
    //   };
    let children = previewGraph.children(rootNodeKey);
    // 所有children
    if (children && children.length > 0) {
      children.forEach(child => {
        traverseGraph(child, resultNode);
      });
      //   根据index排序
      if (resultNode.children && resultNode.children.length > 0) {
        resultNode.children.sort((a, b) => a.index - b.index);
      }
    }
    if (!result) {
      result = resultNode;
    } else if (rootNode.prop) {
      // 含有prop的处理方式会直接封装到result.props[rootNode.prop]
      result.props = result.props || {};
      result.props[rootNode.prop] = resultNode;
    } else {
      // 如果没有prop那么直接封装到children里面
      result.children = result.children || [];
      result.children.push(resultNode);
    }
  }
  return result;
}
