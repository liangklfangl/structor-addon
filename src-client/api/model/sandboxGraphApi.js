import { Graph } from "graphlib";
import { fulex } from "../utils/utils.js";

import { mapModel, makeNodeWrapper } from "./graphUtils.js";

let sandboxGraph;
const rootNodeKey = "ROOT_KEY";

export function initGraph(initialModel) {
  if (initialModel && initialModel.length > 0) {
    sandboxGraph = new Graph({ compound: true });
    let variantKey;
    const model = fulex(initialModel);
    sandboxGraph.setNode(rootNodeKey, model);
    model.forEach((modelNode, index) => {
      variantKey = mapModel(sandboxGraph, modelNode, index);
      sandboxGraph.setParent(variantKey, rootNodeKey);
    });
  }
}

export function getVariantKeys() {
  const children = sandboxGraph.children(rootNodeKey);
  return children && children.length > 0 ? children : [];
}

export function getWrappedModelForVariant(variantKey) {
  return traverseGraph(variantKey);
}

export function getModelForVariant(variantKey) {
  let node = sandboxGraph.node(variantKey);
  if (node) {
    return node.modelNode;
  }
  return undefined;
}

function traverseGraph(rootNodeKey, result) {
  let rootNode = sandboxGraph.node(rootNodeKey);
  if (rootNode) {
    let resultNode = makeNodeWrapper(rootNodeKey, rootNode);
    let children = sandboxGraph.children(rootNodeKey);
    if (children && children.length > 0) {
      children.forEach(child => {
        traverseGraph(child, resultNode);
      });
      if (resultNode.children && resultNode.children.length > 0) {
        resultNode.children.sort((a, b) => a.index - b.index);
      }
    }
    if (!result) {
      result = resultNode;
    } else if (rootNode.prop) {
      result.props = result.props || {};
      result.props[rootNode.prop] = resultNode;
    } else {
      result.children = result.children || [];
      result.children.push(resultNode);
    }
  }
  return result;
}
