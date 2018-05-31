import { forOwn, isObject, takeRight, last, initial } from "lodash";
import { Graph } from "graphlib";
// https://github.com/dagrejs/graphlib/wiki
import { fulex } from "../utils/utils.js";
import { getAvailableRoute } from "./reactRouterApi.js";
import {
  mapModel,
  mapModelForNode,
  makeNodeWrapper,
  traverseGraphBranch,
  adjustIndices
} from "./graphUtils.js";
import {
  detachGraphNode,
  detachGraphNodes,
  copyGraphNode,
  copyGraphNodes
} from "./graphUtils.js";

let bufferKey = undefined;

/**
 * 对象
 */
let graphObject = {
  graph: undefined,
  // 图
  model: undefined,
  // model.pages
  pageNodes: []
  // 页面节点
};

let history = [];
// 历史记录
export function pushHistory(pagePath) {
  if (history.length >= 50) {
    history = takeRight(history, 50);
  }
  // takeRight:建一个数组切片，从array数组的最后一个元素开始提取n个元素。
  history.push({
    model: fulex(graphObject.model),
    markedKeys: getAllMarkedKeys(),
    pagePath: pagePath
  });
  console.log("pushHistory为===", graphObject);
}

export function popHistory() {
  if (history.length > 0) {
    // last:获取array中的最后一个元素。
    const historyObject = last(history);
    initGraph(historyObject.model);
    // 初始化Graph对象
    history = initial(history);
    // 获取数组array中除了最后一个元素之外的所有元素
    return historyObject;
  }
  return undefined;
}

/**
 * 历史记录大小
 */
export function getHistorySize() {
  return history.length;
}

/**
 * 绑定特定的值
 * let graphObject = {
    graph: undefined,
    model: undefined,
    pageNodes: []
    };
 */
export function initGraph(initialModel) {
  if (graphObject.graph) {
    delete graphObject.graph;
  }
  if (graphObject.model) {
    delete graphObject.model;
  }
  if (graphObject.pageNodes) {
    delete graphObject.pageNodes;
  }
  graphObject.model = fulex(initialModel);
  //   重新设置model字段
  if (
    graphObject.model &&
    graphObject.model.pages &&
    graphObject.model.pages.length > 0
  ) {
    graphObject.graph = new Graph({ compound: true });
    // 设置默认的边的label
    // https://github.com/dagrejs/graphlib/wiki/API-Reference
    graphObject.graph.setDefaultEdgeLabel("link");
    // 设置graph
    graphObject.pageNodes = [];
    // 设置graphObject的graph/pageNodes选项，其中graph字段比较复杂
    let pageKey;
    graphObject.model.pages.forEach((page, index) => {
      pageKey = mapModel(graphObject.graph, page, index);
      //   设置parentNode，pageKey是通过Graph来产生的
      graphObject.pageNodes.push({
        pagePath: page.pagePath,
        pageName: page.pageName,
        pageKey: pageKey
      });
      // 有多少页面就会实例化多少个Node
    });
  }
}

/**
 * 客户端的Graph数据
 */
export function getGraph() {
  return graphObject.graph;
}

/**
 * 客户端的model数据
 */
export function getModel() {
  return graphObject.model;
}

/**
 * 客户端的pages数据
 */
export function getPages() {
  return graphObject.pageNodes;
}

/**
 * 得到Node
 */
export function getNode(key) {
  return graphObject.graph.node(key);
}

/**
 * 客户端传入的pathname为"/structor-deskpage/new-menu"
 * let graphObject = {
   graph: undefined,
   model: undefined,
   pageNodes: []
};
 @return:返回一个pathname，这个pathname为候选pathname
 */
export function getPagePath(pathname) {
  let paths = [];
  console.log("服务端接受的奥pathname===" + pathname);
  console.log("服务端接受的奥graphObject===", graphObject);
  graphObject.pageNodes.forEach(pageNode => {
    paths.push(pageNode.pagePath);
  });
  return getAvailableRoute(paths, pathname);
}

/**
 * 寻找特定pagePath的页面内容
 */
export function getPageModelByPagePath(pathname) {
  let found = undefined;
  if (graphObject.model && graphObject.model.pages) {
    found = graphObject.model.pages.find(page => page.pagePath === pathname);
  }
  return found;
}

/**
 * 通过pathname得到Model数据
 */
export function getWrappedModelByPagePath(pathname) {
  let wrappedModel = undefined;
  let paths = [];
  graphObject.pageNodes.forEach(pageNode => {
    paths.push(pageNode.pagePath);
  });
  const path = getAvailableRoute(paths, pathname);
  const pageNode = graphObject.pageNodes.find(pageNode => {
    return pageNode.pagePath === path;
  });

  // 通过pathname找到pageNode，然后根据这个pageNode的pageKey查找
  // 其中的Model数据
  if (pageNode) {
    wrappedModel = traverseGraph(pageNode.pageKey);
  }
  console.log("getWrappedModelByPagePath======", pageNode.pageKey);
  console.log(" wrappedModel======", wrappedModel);

  return wrappedModel;
}

/**
 * 通过pathname得到标记的key
 */
export function getMarkedKeysByPagePath(pathname) {
  let paths = [];
  graphObject.pageNodes.forEach(pageNode => {
    paths.push(pageNode.pagePath);
  });
  const path = getAvailableRoute(paths, pathname);
  const pageNode = graphObject.pageNodes.find(pageNode => {
    return pageNode.pagePath === path;
  });
  return getMarkedKeys(pageNode ? pageNode.pageKey : undefined);
}

/**
 * 得到graph的children
 */
export function getChildNodes(key) {
  let result = [];
  const children = graphObject.graph.children(key);
  if (children && children.length > 0) {
    children.forEach(child => {
      result.push(makeNodeWrapper(child, graphObject.graph.node(child)));
    });
    result.sort((a, b) => a.index - b.index);
  }
  return result;
}

export function hasNode(key) {
  return graphObject.graph.hasNode(key);
}

/**
 * 
 * @param {*} rootNodeKey 
 * @param {*} result 
 * 遍历graph
 * traverseGraph(pageNode.pageKey);
 */
function traverseGraph(rootNodeKey, result) {
  const { graph } = graphObject;
  let rootNode = graph.node(rootNodeKey);
  // Returns the label assigned to the node with the id v if it is in the graph.
  // 获取节点label，设置为一个对象
  if (rootNode) {
    let resultNode = makeNodeWrapper(rootNodeKey, rootNode);
    // return {
    //   key: key,
    //   modelNode: graphNode.modelNode,
    //   index: graphNode.index,
    //   prop: graphNode.prop,
    //   selected: graphNode.selected,
    //   highlighted: graphNode.highlighted,
    //   isForCutting: graphNode.isForCutting,
    //   isForCuttingChild: graphNode.isForCuttingChild,
    //   isForCopying: graphNode.isForCopying
    // };
    const parentKey = graph.parent(rootNodeKey);
    // rootNodeKey是这个页面的pageKey
    if (!parentKey) {
      resultNode.isRoot = true;
    }
    let children = graph.children(rootNodeKey);

    // 获取这个节点的children
    if (children && children.length > 0) {
      children.forEach(child => {
        traverseGraph(child, resultNode);
      });
      //对resultNode.children进行排序
      if (resultNode.children && resultNode.children.length > 0) {
        resultNode.children.sort((a, b) => a.index - b.index);
      }
    }

    // 如果result为空返回resultNode
    if (!result) {
      result = resultNode;
    } else if (rootNode.prop) {
      // 如果rootNode有prop,直接添加到props
      result.props = result.props || {};
      result.props[rootNode.prop] = resultNode;
    } else {
      // 否则直接添加到children里面
      result.children = result.children || [];
      result.children.push(resultNode);
    }
  }
  return result;
}

/**
 * 直接调用traverseGraph
 */
export function traverseAllGraph() {
  const { pageNodes } = graphObject;
  let result = [];
  pageNodes.forEach(pNode => {
    result = result.concat(traverseGraph(pNode.pageKey));
  });
  return result;
}

/**
 * 
 * @param {*} childNodeKey 
 * @param {*} result 
 * 得到当前Node的所有父级
 */
export function getParentsList(childNodeKey, result) {
  const { graph } = graphObject;
  let childNode = graph.node(childNodeKey);
  if (childNode) {
    let childModelNode = makeNodeWrapper(childNodeKey, childNode);
    result = result || [];
    result.push(childModelNode);
    const parentNodeKey = graph.parent(childNodeKey);
    if (parentNodeKey) {
      getParentsList(parentNodeKey, result);
    } else {
      childModelNode.isRoot = true;
    }
  }
  return result;
}

/**
 * 
 * @param {*} pagePath 
 * @param {*} nextPagePath 
 * @param {*} nextPageName 
 */
export function changePagePathAndName(pagePath, nextPagePath, nextPageName) {
  const { graph, pageNodes } = graphObject;
  const pageNode = pageNodes.find(pNode => {
    return pNode.pagePath === pagePath;
  });
  // 找到当前的页面
  if (!pageNode) {
    throw Error(
      "Change page path and name: specified path " +
        pagePath +
        " was not found."
    );
  }
  let rootNode = graph.node(pageNode.pageKey);
  // 根据pageKey在graph中找到这个节点并设置这个节点
  if (rootNode) {
    let modelNode = rootNode.modelNode;
    // 修改这个graph中节点的pageName,pagePath,
    modelNode.pageName = nextPageName;
    modelNode.pagePath = nextPagePath;
    pageNode.pageName = nextPageName;
    pageNode.pagePath = nextPagePath;
  }
  // 返回修改后的pageNodes
  return graphObject.pageNodes;
}

/**
 * 
 * @param {*} initialModel :当前的Model状态
 * @param {*} pagePath 
 * @param {*} pageName 
 * 添加新的页面
 */
export function addNewPage(initialModel, pagePath, pageName) {
  let { graph, model, pageNodes } = graphObject;
  let pageModel = fulex(initialModel);
  console.log("addNewPage新添加页面的数据为===", pageModel);
  pageModel.pagePath = pagePath;
  pageModel.pageName = pageName;
  model.pages.push(pageModel);
  // 在pages中添加一个新的页面，含有pagePath,pageName
  const pageKey = mapModel(graph, pageModel, pageNodes.length, true);
  // 新添加一个pageNodes，并设置为新的pageName,pagePath
  pageNodes.push({
    pagePath: pagePath,
    pageName: pageName,
    pageKey: pageKey
  });
  return pageNodes;
}

/**
 * 
 * @param {*} pagePath 
 * @param {*} nextPagePath 
 * @param {*} nextPageName 
 * 调用方法: let pageList = graphApi.duplicatePage(currentPagePath, pagePath, pageName);
 * 复制一个页面
 */
export function duplicatePage(pagePath, nextPagePath, nextPageName) {
  let { graph, model, pageNodes } = graphObject;
  const pageNode = pageNodes.find(pNode => {
    return pNode.pagePath === pagePath;
  });
  // 找到当前页面对应的Node
  if (!pageNode) {
    throw Error(
      "Duplicate page: specified path " + pagePath + " was not found."
    );
  }
  let rootNode = graph.node(pageNode.pageKey);
  // 根据pageKey找到Graph中的当前节点
  if (rootNode) {
    let pageModel = fulex(rootNode.modelNode);
    //复制一份它的modelNode字段
    pageModel.pagePath = nextPagePath;
    pageModel.pageName = nextPageName;
    model.pages.push(pageModel);
    // 在pages里面添加一个新的页面
    const pageKey = mapModel(graph, pageModel, pageNodes.length, true);
    //新得到一个pageKey
    pageNodes.push({
      pagePath: pageModel.pagePath,
      pageName: pageModel.pageName,
      pageKey: pageKey
    });
  }
  return pageNodes;
}

/**
 * 
 * @param {*} pagePath 
 * 设置主页面，即把特定的pagePath放到model.pages的第一个元素，并把所有后面的元素都更新index值
 */
export function setIndexPage(pagePath) {
  let { graph, model, pageNodes } = graphObject;
  const pageNode = pageNodes.find(pNode => {
    return pNode.pagePath === pagePath;
  });
  // 找到要设置为IndexRouter的节点
  if (!pageNode) {
    throw Error(
      "Set index page: specified path " + pagePath + " was not found."
    );
  }
  let rootNode = graph.node(pageNode.pageKey);
  // 根据pageKey
  if (rootNode) {
    const tempModel = model.pages.splice(rootNode.index, 1)[0];
    // 找到当前要设置为index的那个Node，并将它从pages里面删除
    if (tempModel) {
      model.pages.splice(0, 0, tempModel);
      // 在pages中最前面插入刚才pagePath指定的那个Node
    } else {
      console.error(
        "Page model was not found in pages model index: " + rootNode.index
      );
    }
    let newPageNodes = [];
    let newPageNode;
    let graphNode;
    // 遍历所有的pages,pageNodes为所有的页面对象，model.pages已经上面经过一次删除了
    model.pages.forEach((page, index) => {
      // 根据page到pageNodes里面查找
      newPageNode = pageNodes.find(pNode => {
        return pNode.pagePath === page.pagePath;
      });
      // 如果在pageNodes里面找到了，那么更新pageNodes里面的的index值
      // 这里其实是为了更新index的，让所有的index都保持一致
      if (newPageNode) {
        graphNode = graph.node(newPageNode.pageKey);
        graphNode.index = index;
        newPageNodes.push(newPageNode);
      }
    });
    graphObject.pageNodes = newPageNodes;
    //更新pageNodes数组
  }
  return graphObject.pageNodes;
}

/**
 * 删除页面
 * @param {*} pagePath 
 */
export function deletePage(pagePath) {
  let { graph, model, pageNodes } = graphObject;
  // 如果pages只有一个页面不能删除
  if (model.pages && model.pages.length === 1) {
    throw Error(
      "The current page is the only page in the project and can not be deleted."
    );
  }
  const pageNode = pageNodes.find(pNode => {
    return pNode.pagePath === pagePath;
  });
  if (!pageNode) {
    throw Error("Delete page: specified path " + pagePath + " was not found.");
  }
  let rootNode = graph.node(pageNode.pageKey);
  // 根据pageKey找到我们的节点
  if (rootNode) {
    model.pages.splice(rootNode.index, 1);
    // 根据index删除这个页面，然后还需要将所有的子级元素从graph中删除
    traverseGraphBranch(graph, pageNode.pageKey, nodeKey => {
      graph.removeNode(nodeKey);
    });
    let newPageNodes = [];
    let newPageNode;
    let graphNode;
    // 重新遍历所有的pages进行操作
    model.pages.forEach((page, index) => {
      // 遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用3个参数： (value, index|key, collection)。
      newPageNode = pageNodes.find(pNode => {
        return pNode.pagePath === page.pagePath;
      });
      // 每个page在pageNode里面根据pagePath找，如果找到了就要知道它最新的pageKey
      // 并更新
      if (newPageNode) {
        graphNode = graph.node(newPageNode.pageKey);
        // 在graph中找到它，然后更新他的index
        graphNode.index = index;
        newPageNodes.push(newPageNode);
      }
    });
    graphObject.pageNodes = newPageNodes;
  }
  // 更新pageNodes
  return graphObject.pageNodes;
}

/**
 * 获取已经detached的节点
 * 方法:遍历所有的页面，找到其中的节点的isForCutting为true的节点
 */
function getDetachedKeysForCutting() {
  const { graph, pageNodes } = graphObject;
  const testFunc = node => node.isForCutting;
  let detachedKeys = [];
  // 对所有的pageNode进行遍历
  pageNodes.forEach(pNode => {
    detachGraphNodes(graph, pNode.pageKey, testFunc, detachedKeys);
  });
  return detachedKeys;
}

/**
 * 获取detached的节点用于复制，判断节点有isForCopying字段
 */
function getDetachedKeysForCopying() {
  const { graph, pageNodes } = graphObject;
  const testFunc = node => node.isForCopying;
  let detachedKeys = [];
  // 每一个pageNode={pagePath:'',pageName:'',pageKey:''}
  pageNodes.forEach(pNode => {
    copyGraphNodes(graph, pNode.pageKey, testFunc, detachedKeys);
  });
  // detachedKeys
  return detachedKeys;
}
/**
 * 
 * @param {*} nodeKey
 * 是否允许复制+剪切 
 */
export function isCutPasteAvailable(nodeKey) {
  let childNode = graphObject.graph.node(nodeKey);
  return !!(
    childNode &&
    !childNode.isForCuttingChild &&
    !childNode.isForCutting
  );
}

/**
 * 
 * @param {*} isAfter 
 */
export function cutPasteBeforeOrAfter(isAfter) {
  console.log(
    "cutPasteBeforeOrAfter cutPasteBeforeOrAfter cutPasteBeforeOrAfter"
  );
  const { selected } = getAllMarkedKeys();
  // 得到所有的keys
  let resultKeys = [];
  if (selected && selected.length === 1 && isCutPasteAvailable(selected[0])) {
    // 如果选中的只有1个
    const { graph } = graphObject;
    const nodeKey = selected[0];
    // 获取选中的元素
    const node = graph.node(nodeKey);
    // 如果没有找到key的组件
    if (!node) {
      console.error(
        "Cut & paste before or after node: node with key " +
          nodeKey +
          " was not found."
      );
    } else if (!node.prop) {
      // detached的keys
      let detachedKeys = getDetachedKeysForCutting();
      if (detachedKeys.length > 0) {
        const parentKey = graph.parent(nodeKey);
        if (parentKey) {
          let detachedModelNodes = [];
          let detachedNode;
          // detachedKeys
          detachedKeys.forEach(detachedKey => {
            detachedNode = graph.node(detachedKey);
            if (detachedNode && detachedNode.modelNode) {
              graph.setParent(detachedKey, parentKey);
              detachedModelNodes.push(detachedNode.modelNode);
            }
          });
          let parentNode = graph.node(parentKey);
          let { modelNode } = parentNode;
          // 获取父级组件
          let modelNodesArgs = [node.index + (isAfter ? 1 : 0), 0].concat(
            detachedModelNodes
          );
          modelNode.children.splice.apply(modelNode.children, modelNodesArgs);
          adjustIndices(graph, parentKey);
        }
      }
      resultKeys = resultKeys.concat(detachedKeys);
    } else {
      // 如果组件有prop属性，那么直接push即可
      resultKeys.push(nodeKey);
    }
  } else {
    // 粘贴只能在一个元素上，不能再同一个组件上粘贴
    console.error(
      "Cut & paste before or after node: pasting can not be provided for the same component or its children, or a multiple selection"
    );
  }
  return resultKeys;
}

/**
 * 
 * @param {*} isFirst
 * cutPasteFirstOrLast 
 */
export function cutPasteFirstOrLast(isFirst) {
  console.log("cutPasteFirstOrLast cutPasteFirstOrLast cutPasteFirstOrLast");
  const { selected } = getAllMarkedKeys();
  let resultKeys = [];
  if (selected && selected.length === 1 && isCutPasteAvailable(selected[0])) {
    const { graph } = graphObject;
    const nodeKey = selected[0];
    const node = graph.node(nodeKey);
    // 选择的节点
    if (!node) {
      console.error(
        "Cut & paste first or last node: node with key " +
          nodeKey +
          " was not found."
      );
    } else {
      let detachedKeys = getDetachedKeysForCutting();
      // detached的keys
      if (detachedKeys.length > 0) {
        let detachedModelNodes = [];
        let detachedNode;
        detachedKeys.forEach(detachedKey => {
          detachedNode = graph.node(detachedKey);
          if (detachedNode && detachedNode.modelNode) {
            graph.setParent(detachedKey, nodeKey);
            detachedModelNodes.push(detachedNode.modelNode);
          }
        });
        let { modelNode } = node;
        modelNode.children = modelNode.children || [];
        const lastIndex =
          modelNode.children.length > 0 ? modelNode.children.length : 0;
        let modelNodesArgs = [isFirst ? 0 : lastIndex, 0].concat(
          detachedModelNodes
        );
        modelNode.children.splice.apply(modelNode.children, modelNodesArgs);
        adjustIndices(graph, nodeKey);
      }
      resultKeys = resultKeys.concat(detachedKeys);
    }
  } else {
    console.error(
      "Cut & paste first or last node: pasting can not be provided for the same component or its children, or a multiple selection"
    );
  }
  return resultKeys;
}

/**
 * 替换他
 */
export function cutPasteReplace() {
  console.log("cutPasteReplace cutPasteReplace cutPasteReplace");
  const { selected } = getAllMarkedKeys();
  let resultKeys = [];
  if (selected && selected.length === 1 && isCutPasteAvailable(selected[0])) {
    const { graph } = graphObject;
    const nodeKey = selected[0];
    const node = graph.node(nodeKey);
    if (!node) {
      console.error(
        "Cut & paste replace: node with key " + nodeKey + " was not found."
      );
    } else if (!node.prop) {
      let detachedKeys = getDetachedKeysForCutting();
      if (detachedKeys.length > 0) {
        const parentKey = graph.parent(nodeKey);
        if (parentKey) {
          const nodeIndex = node.index;
          traverseGraphBranch(graph, nodeKey, key => {
            graph.removeNode(key);
          });
          delete node.modelNode;
          let detachedModelNodes = [];
          let detachedNode;
          detachedKeys.forEach(detachedKey => {
            detachedNode = graph.node(detachedKey);
            if (detachedNode && detachedNode.modelNode) {
              graph.setParent(detachedKey, parentKey);
              detachedModelNodes.push(detachedNode.modelNode);
            }
          });
          let parentNode = graph.node(parentKey);
          let { modelNode } = parentNode;
          modelNode.children = modelNode.children || [];
          let modelNodesArgs = [nodeIndex, 1].concat(detachedModelNodes);
          modelNode.children.splice.apply(modelNode.children, modelNodesArgs);
          adjustIndices(graph, parentKey);
        }
      }
      resultKeys = resultKeys.concat(detachedKeys);
    } else {
      resultKeys.push(nodeKey);
    }
  } else {
    console.error(
      "Cut & paste replace: replacing can not be provided for the same component or a multiple selection"
    );
  }
  return resultKeys;
}

/**
 * 
 * @param {*} isAfter
 * Before或者After 
 */
export function copyPasteBeforeOrAfter(isAfter) {
  console.log(
    "copyPasteBeforeOrAfter copyPasteBeforeOrAfter copyPasteBeforeOrAfter"
  );
  const { selected } = getAllMarkedKeys();
  const { graph } = graphObject;
  let resultKeys = [];
  if (selected && selected.length > 0) {
    selected.forEach(nodeKey => {
      const node = graph.node(nodeKey);
      if (!node) {
        console.error(
          "Copy & paste before or after node: node with key " +
            nodeKey +
            " was not found."
        );
      } else if (!node.prop) {
        let detachedKeys = getDetachedKeysForCopying();
        // 复制
        if (detachedKeys.length > 0) {
          const parentKey = graph.parent(nodeKey);
          if (parentKey) {
            let detachedModelNodes = [];
            let detachedNode;
            detachedKeys.forEach(detachedKey => {
              detachedNode = graph.node(detachedKey);
              if (detachedNode && detachedNode.modelNode) {
                graph.setParent(detachedKey, parentKey);
                detachedModelNodes.push(detachedNode.modelNode);
              }
            });
            let parentNode = graph.node(parentKey);
            let { modelNode } = parentNode;
            modelNode.children = modelNode.children || [];
            let modelNodesArgs = [node.index + (isAfter ? 1 : 0), 0].concat(
              detachedModelNodes
            );
            modelNode.children.splice.apply(modelNode.children, modelNodesArgs);
            adjustIndices(graph, parentKey);
          }
        }
        resultKeys = resultKeys.concat(detachedKeys);
      } else {
        resultKeys.push(nodeKey);
      }
    });
  }
  return resultKeys;
}

/**
 * 
 * @param {*} isFirst
 * 第一个或者最后一个 
 */
export function copyPasteFirstOrLast(isFirst) {
  console.log("copyPasteFirstOrLast copyPasteFirstOrLast copyPasteFirstOrLast");
  const { selected } = getAllMarkedKeys();
  const { graph } = graphObject;
  let resultKeys = [];
  // 所有选中的元素
  if (selected && selected.length > 0) {
    selected.forEach(nodeKey => {
      const node = graph.node(nodeKey);
      if (!node) {
        console.error(
          "Copy & paste first or last node: node with key " +
            nodeKey +
            " was not found."
        );
      } else {
        let detachedKeys = getDetachedKeysForCopying();
        if (detachedKeys.length > 0) {
          let detachedModelNodes = [];
          let detachedNode;
          detachedKeys.forEach(detachedKey => {
            detachedNode = graph.node(detachedKey);
            if (detachedNode && detachedNode.modelNode) {
              graph.setParent(detachedKey, nodeKey);
              detachedModelNodes.push(detachedNode.modelNode);
            }
          });
          let { modelNode } = node;
          modelNode.children = modelNode.children || [];
          const lastIndex =
            modelNode.children.length > 0 ? modelNode.children.length : 0;
          let modelNodesArgs = [isFirst ? 0 : lastIndex, 0].concat(
            detachedModelNodes
          );
          modelNode.children.splice.apply(modelNode.children, modelNodesArgs);
          adjustIndices(graph, nodeKey);
        }
        resultKeys = resultKeys.concat(detachedKeys);
      }
    });
  }
  return resultKeys;
}
/**
 * 替换掉
 */
export function copyPasteReplace() {
  const { selected, forCopying } = getAllMarkedKeys();
  const { graph } = graphObject;
  let resultKeys = [];
  if (selected && selected.length > 0) {
    selected.forEach(nodeKey => {
      if (forCopying.indexOf(nodeKey) < 0) {
        const node = graph.node(nodeKey);
        if (!node) {
          throw Error(
            "Copy & paste replace: node with key " + nodeKey + " was not found."
          );
        } else if (!node.prop) {
          let detachedKeys = getDetachedKeysForCopying();
          if (detachedKeys.length > 0) {
            const parentKey = graph.parent(nodeKey);
            if (parentKey) {
              const nodeIndex = node.index;
              traverseGraphBranch(graph, nodeKey, key => {
                graph.removeNode(key);
                const removedIndex = resultKeys.indexOf(key);
                if (removedIndex >= 0) {
                  resultKeys.splice(removedIndex, 1);
                }
              });
              delete node.modelNode;
              let detachedModelNodes = [];
              let detachedNode;
              detachedKeys.forEach(detachedKey => {
                detachedNode = graph.node(detachedKey);
                if (detachedNode && detachedNode.modelNode) {
                  graph.setParent(detachedKey, parentKey);
                  detachedModelNodes.push(detachedNode.modelNode);
                }
              });
              let parentNode = graph.node(parentKey);
              let { modelNode } = parentNode;
              modelNode.children = modelNode.children || [];
              let modelNodesArgs = [nodeIndex, 1].concat(detachedModelNodes);
              modelNode.children.splice.apply(
                modelNode.children,
                modelNodesArgs
              );
              adjustIndices(graph, parentKey);
            }
          }
          resultKeys = resultKeys.concat(detachedKeys);
        } else {
          resultKeys.push(nodeKey);
        }
      } else {
        console.warn(
          "Copy & paste replace: replacing can not be provided for the same component."
        );
      }
    });
  }
  return resultKeys;
}

/**
 * 
 * @param {*} model 
 * 重新设置Buffer
 */
export function setBuffer(model) {
  const { graph } = graphObject;
  if (bufferKey) {
    removeBuffer();
  }
  const newModel = fulex(model);
  bufferKey = mapModel(graph, newModel, 0);
  return bufferKey;
}

/**
 * 移除buffer
 */
export function removeBuffer() {
  const { graph } = graphObject;
  let childNode;
  if (bufferKey) {
    traverseGraphBranch(graph, bufferKey, childKey => {
      childNode = graph.node(childKey);
      if (childNode) {
        delete childNode.modelNode;
        graph.removeNode(childKey);
      }
    });
    bufferKey = undefined;
  }
}

/**
 * 
 * @param {*} isAfter 
 * @param {*} quickKey 
 * fromBufferBeforeOrAfter(isAfter, quickKey);quickKey为新添加的那个节点
 */
export function fromBufferBeforeOrAfter(isAfter, quickKey) {
  const { selected } = getAllMarkedKeys();
  // 得到所有选择的节点
  const { graph } = graphObject;
  let resultKeys = [];
  if (selected && selected.length > 0) {
    selected.forEach(nodeKey => {
      const node = graph.node(nodeKey);
      // 得到选中的节点
      if (!node) {
        console.error(
          "From buffer to before or after node: node with key " +
            nodeKey +
            " was not found."
        );
      } else if (!node.prop) {
        // 如果节点没有prop
        let detachedKey = copyGraphNode(graph, quickKey ? quickKey : bufferKey);
        // 复制节点并得到某一个key
        if (detachedKey) {
          const parentKey = graph.parent(nodeKey);
          // 选中的这个节点的父级节点
          if (parentKey) {
            let detachedModelNodes = [];
            let detachedNode = graph.node(detachedKey);
            //得到复制的这个节点
            if (detachedNode && detachedNode.modelNode) {
              graph.setParent(detachedKey, parentKey);
              // 复制的这个节点的父级设置为选中的这个节点的父级节点，即在选中节点的父级下进行操作，类似于DOM
              detachedModelNodes.push(detachedNode.modelNode);
            }
            let parentNode = graph.node(parentKey);
            // 得到要被插入的节点的父级节点本身
            let { modelNode } = parentNode;
            // 得到要被插入的节点的父级节点的modelNode
            modelNode.children = modelNode.children || [];
            // 得到要被插入的节点的父级节点的modelNode.children
            let modelNodesArgs = [node.index + (isAfter ? 1 : 0), 0].concat(
              detachedModelNodes
            );
            // 如果isAfter为true,那么在node.index(选中节点的index)+1
            modelNode.children.splice.apply(modelNode.children, modelNodesArgs);
            // 这个splice的第一个参数用于指定的是this。假如node.index为1,isAfter为true,传入的参数为[2,0].concat(detachedModelNodes);
            // 这就是插入操作啊，如果isAfter为false,那么就是node.index插入，也就前面插入
            adjustIndices(graph, parentKey);
          }
        }
        resultKeys.push(detachedKey);
      } else {
        // 如果节点有prop，那么直接push
        resultKeys.push(nodeKey);
      }
    });
  }
  return resultKeys;
}

/**
 * 
 * @param {*} model 
 * @param {*} isAfter 
 * 界面点击在后面插入的时候调用: const newSelectedKey = graphApi.quickBeforeOrAfter(variantModel, true);
 */
export function quickBeforeOrAfter(model, isAfter) {
  const { graph } = graphObject;
  // 原来的Graph
  let newModel = fulex(model);
  // 新的model
  let quickKey = mapModel(graph, newModel, 0);
  // 返回插入的新的key，先插入用于复制节点，在fromBufferBeforeOrAfter有调用~~~
  const resultKeys = fromBufferBeforeOrAfter(isAfter, quickKey);
  //已经在需要被插入的节点selected的父级层面做了节点插入操作...
  //这里返回的是所有进行插入的selected态的自己节点
  let childNode;
  // 对graph中的所有的quickKey(即新插入的节点的key)的children做同样的操作
  traverseGraphBranch(graph, quickKey, childKey => {
    childNode = graph.node(childKey);
    // 如果子级节点存在并移除
    if (childNode) {
      delete childNode.modelNode;
      graph.removeNode(childKey);
    }
  });
  newModel = undefined;
  quickKey = undefined;
  return resultKeys;
}
/**
 * 
 * @param {*} isFirst 
 * @param {*} quickKey  新添加的那个节点的key
 * fromBufferFirstOrLast:首先复制节点+将复制的节点父级节点设置为已经选中的节点+children中插入+矫正所有已经选中的节点的子级节点index
 */
export function fromBufferFirstOrLast(isFirst, quickKey) {
  const { selected } = getAllMarkedKeys();
  const { graph } = graphObject;
  let resultKeys = [];
  if (selected && selected.length > 0) {
    // 有选中的keys，即选中一个节点后才能插入~~~
    selected.forEach(nodeKey => {
      const node = graph.node(nodeKey);
      // 得到选中的Node
      if (!node) {
        console.error(
          "From buffer to first or last node: node with key " +
            nodeKey +
            " was not found."
        );
      } else {
        let detachedKey = copyGraphNode(graph, quickKey ? quickKey : bufferKey);
        // 得到刚才新添加的那个节点的复制版本
        if (detachedKey) {
          let detachedModelNodes = [];
          let detachedNode = graph.node(detachedKey);
          // 复制的节点的父级节点
          if (detachedNode && detachedNode.modelNode) {
            // 将这个复制的版本的Node的父级节点设置为选中的节点，这就是往选中的元素上面append
            graph.setParent(detachedKey, nodeKey);
            detachedModelNodes.push(detachedNode.modelNode);
            // 并插入detachedModelNodes
          }
          let { modelNode } = node;
          // 设置复制节点的父级为选中节点后，重新得到选中的那个节点
          modelNode.children = modelNode.children || [];
          // 选中节点的children
          const lastIndex =
            modelNode.children.length > 0 ? modelNode.children.length : 0;
          let modelNodesArgs = [isFirst ? 0 : lastIndex, 0].concat(
            detachedModelNodes
          );
          // 如果是isFirst=[0，0]
          // 如果不是isFirst=[length,0];
          modelNode.children.splice.apply(modelNode.children, modelNodesArgs);
          // 矫正节点，这里是插入节点
          adjustIndices(graph, nodeKey);
          // 矫正选中节点下的所有的子级节点位置
        }
        resultKeys.push(detachedKey);
        // 得到复制的那个节点
      }
    });
  }
  return resultKeys;
}

/**
 * 
 * @param {*} model 默认的数据模型对象，比如默认的Select对象定义
 * @param {*} isFirst 是否是在父组件的最前面
 *  const newSelectedKey = graphApi.quickFirstOrLast(variantModel, false);
 */
export function quickFirstOrLast(model, isFirst) {
  const { graph } = graphObject;
  let newModel = fulex(model);
  let quickKey = mapModel(graph, newModel, 0);
  // 返回新的key,
  const resultKeys = fromBufferFirstOrLast(isFirst, quickKey);
  // 拷贝刚才插入到图中的点
  let childNode;
  traverseGraphBranch(graph, quickKey, childKey => {
    // 删除quickKey下的所有的子级元素
    childNode = graph.node(childKey);
    if (childNode) {
      delete childNode.modelNode;
      graph.removeNode(childKey);
    }
  });
  newModel = undefined;
  quickKey = undefined;
  return resultKeys;
}

/**
 * 
 * @param {*} quickKey 为新创建的那个Node的key
 * 返回：复制的所有节点的index
 */
export function fromBufferReplace(quickKey) {
  const { selected } = getAllMarkedKeys();
  const { graph } = graphObject;
  let resultKeys = [];
  if (selected && selected.length > 0) {
    selected.forEach(nodeKey => {
      const node = graph.node(nodeKey);
      if (!node) {
        console.error(
          "From buffer replace: node with key " + nodeKey + " was not found."
        );
      } else if (!node.prop) {
        let detachedKey = copyGraphNode(graph, quickKey ? quickKey : bufferKey);
        // 得到复制的Node
        if (detachedKey) {
          const parentKey = graph.parent(nodeKey);
          // 选中元素的父级元素，用它来移除所有的子级元素
          if (parentKey) {
            const nodeIndex = node.index;
            traverseGraphBranch(graph, nodeKey, key => {
              graph.removeNode(key);
            });
            delete node.modelNode;
            let detachedModelNodes = [];
            let detachedNode = graph.node(detachedKey);
            // 将复制的元素的父级元素设置为原来的选中的父级元素(原来的父级元素的子级元素已经全部移除)
            if (detachedNode && detachedNode.modelNode) {
              graph.setParent(detachedKey, parentKey);
              detachedModelNodes.push(detachedNode.modelNode);
            }
            let parentNode = graph.node(parentKey);
            let { modelNode } = parentNode;
            modelNode.children = modelNode.children || [];
            let modelNodesArgs = [nodeIndex, 1].concat(detachedModelNodes);
            // nodeIndex为当前元素的index值(index为节点在父级中的位置)，这里的splice的1表示替换
            modelNode.children.splice.apply(modelNode.children, modelNodesArgs);
            adjustIndices(graph, parentKey);
          }
        }
        resultKeys.push(detachedKey);
      } else {
        resultKeys.push(nodeKey);
      }
    });
  }
  return resultKeys;
}

/**
 * 使用新的model替换
 */
export function quickReplace(model) {
  const { graph } = graphObject;
  let newModel = fulex(model);
  let quickKey = mapModel(graph, newModel, 0);
  const resultKeys = fromBufferReplace(quickKey);
  // 得到复制的所有的节点的数据
  let childNode;
  // 将原来的复制的节点从grap中移除
  traverseGraphBranch(graph, quickKey, childKey => {
    childNode = graph.node(childKey);
    if (childNode) {
      delete childNode.modelNode;
      graph.removeNode(childKey);
    }
  });
  newModel = undefined;
  quickKey = undefined;
  return resultKeys;
}

//export function fromBufferWrap(nodeKey, quickKey){
//    const {graph} = graphObject;
//    const node = graph.node(nodeKey);
//    if(!node){
//        throw Error('From buffer wrap: node with key ' + nodeKey + ' was not found.');
//    }
//    if(!node.prop){
//        const pastedKeys = fromBufferBeforeOrAfter(nodeKey, false, quickKey);
//        setForCutting(nodeKey);
//        cutPasteFirstOrLast(pastedKeys[0], false);
//        removeForCutting(nodeKey);
//        return pastedKeys;
//    } else {
//        return [nodeKey];
//    }
//}

//export function quickWrap(model, nodeKey){
//    const {graph} = graphObject;
//    let newModel = fulex(model);
//    let quickKey = mapModel(graph, newModel, 0);
//    const resultKeys = fromBufferWrap(nodeKey, quickKey);
//    let childNode;
//    traverseGraphBranch(graph, quickKey, childKey => {
//        childNode = graph.node(childKey);
//        if(childNode){
//            delete childNode.modelNode;
//            graph.removeNode(childKey);
//        }
//    });
//    newModel = undefined;
//    quickKey = undefined;
//    return resultKeys;
//}

/**
 * 复制选中的~~~
 */
export function cloneSelected() {
  const { graph } = graphObject;
  const { selected } = getAllMarkedKeys();
  let pastedKeys = [];
  if (selected && selected.length > 0) {
    let clonedMap = new Map();
    let newNodeKey;
    selected.forEach(selectedKey => {
      const selectedNode = graph.node(selectedKey);
      // 选中的Node
      if (selectedNode && !selectedNode.prop) {
        newNodeKey = copyGraphNode(graph, selectedKey);
        clonedMap.set(selectedKey, newNodeKey);
        // 根据selectedKey重新设置一个新的newSelectedkey
      }
    });
    // Map的key为选中的selectedKey，值为新的key
    // @newKey:新的对象，元素的值
    // @targetKey:老的对象，元素的键
    clonedMap.forEach((newKey, targetKey) => {
      const parentKey = graph.parent(targetKey);
      // 父级元素的key
      let parentNode = graph.node(parentKey);
      // 父级节点
      const selectedNode = graph.node(targetKey);
      // 新的Node
      if (parentNode && selectedNode) {
        let detachedModelNodes = [];
        let detachedNode = graph.node(newKey);
        // 获取新的对象
        if (detachedNode && detachedNode.modelNode) {
          // 将新克隆的newKey的父级设置为parentKey
          graph.setParent(newKey, parentKey);
          detachedModelNodes.push(detachedNode.modelNode);
          // 新的Node
          let { modelNode } = parentNode;
          modelNode.children = modelNode.children || [];
          // selectedNode就是选中的这个元素
          let modelNodesArgs = [selectedNode.index + 1, 0].concat(
            detachedModelNodes
          );
          //父级的children
          modelNode.children.splice.apply(modelNode.children, modelNodesArgs);
          //
          adjustIndices(graph, parentKey);
          // 重新矫正index
          pastedKeys.push(newKey);
          // 新的keys列表
        }
      }
    });
  }
  return pastedKeys;
}

/**
 * 
 * @param {*} isUp
 * 移动选中的元素 
 */
export function moveSelected(isUp) {
  const { graph } = graphObject;
  const { selected } = getAllMarkedKeys();
  // 那些选中了的元素
  if (selected && selected.length > 0) {
    let parentMap = new Map();
    let parentKey;
    let childrenGroup;
    let child;
    selected.forEach(selectedKey => {
      child = graph.node(selectedKey);
      // 获取当前元素，遍历每一个选中元素~~~
      if (child) {
        parentKey = graph.parent(selectedKey);
        if (parentKey) {
          // 获取当前元素父级元素
          childrenGroup = parentMap.get(parentKey);
          // 如果parentMap里有就push，否则就是新设置
          if (!childrenGroup) {
            childrenGroup = [];
            parentMap.set(parentKey, childrenGroup);
          }
          childrenGroup.push(child);
          // 每一个selected的元素都有一个根据parentKey命名的数组childrenGroup
        }
      }
    });
    let parentNode;
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
    // 回调函数参数为(value,key)
    parentMap.forEach((group, parentKey) => {
      parentNode = graph.node(parentKey);
      // 找到父级元素了~~~
      let { modelNode } = parentNode;
      // 找到父级元素的modelNode
      if (modelNode.children && modelNode.children.length !== 1) {
        // isUp移动
        if (isUp) {
          group.sort((a, b) => a.index - b.index);
          // 某一个select下的所有的子元素进行排序操作~~
          for (let u = 0; u < group.length; u++) {
            // 如果是第一个，那么一开始的index就是0
            if (group[u].index <= 0) {
              break;
            }
            modelNode.children.splice(group[u].index, 1);
            // 删除这个元素，group为所有selected对应的值~~
            modelNode.children.splice(
              group[u].index - 1,
              0,
              group[u].modelNode
            );
            //重新插入 group[u].modelNode，这样就是所有元素都往前移动了
          }
        } else {
          // 不是往上移动
          group.sort((a, b) => b.index - a.index);
          for (let d = 0; d < group.length; d++) {
            if (group[d].index >= modelNode.children.length - 1) {
              break;
            }
            modelNode.children.splice(group[d].index, 1);
            modelNode.children.splice(
              group[d].index + 1,
              0,
              group[d].modelNode
            );
          }
        }
        adjustIndices(graph, parentKey);
      }
    });
  }
}

/**
 * 判断哪个被选中并要求删除了~~~
 */
export function deleteSelected() {
  const { graph, pageNodes } = graphObject;
  // pageNodes为页面的所有节点
  const testFunc = node => node.selected;
  let detachedKeys = [];
  let resultKeys = [];
  pageNodes.forEach(pNode => {
    // 遍历页面的所有节点，对节点和节点下所有的子元素做同样的操作
    traverseGraphBranch(graph, pNode.pageKey, key => {
      let childNode = graph.node(key);
      // 每一个子级节点+父节点都会被调用这个回调函数
      if (childNode.selected) {
        // 如果已经选中
        const parentKey = graph.parent(key);
        // 获取父级元素
        if (parentKey) {
          //const parentNode = graph.node(parentKey);
          const childKeys = graph.children(parentKey);
          // 获取父级节点下的所有的子级节点~
          if (childKeys && childKeys.length > 1) {
            let children = [];
            childKeys.forEach(childKey => {
              children.push({ key: childKey, node: graph.node(childKey) });
            });
            children.sort((a, b) => a.node.index - b.node.index);
            // 至少2个子级元素
            if (childNode.index === 0) {
              resultKeys.push(children[1].key);
            } else {
              resultKeys.push(children[childNode.index - 1].key);
            }
          } else {
            // 子级元素<=1,那么直接push我们的parentKey
            resultKeys.push(parentKey);
          }
        }
      }
    });
    detachGraphNodes(graph, pNode.pageKey, testFunc, detachedKeys);
  });
  let newResultKeys = [];
  if (detachedKeys.length > 0) {
    resultKeys.forEach(key => {
      if (detachedKeys.indexOf(key) < 0) {
        newResultKeys.push(key);
      }
    });
    let childNode;
    detachedKeys.forEach(key => {
      traverseGraphBranch(graph, key, childKey => {
        // 删除Node
        childNode = graph.node(childKey);
        if (childNode) {
          delete childNode.modelNode;
          graph.removeNode(childKey);
        }
      });
    });
  }
  return newResultKeys;
}
/**
 * 
 * @param {*} nodeKey 
 * @param {*} newModel 
 * 根据nodeKey查找一个元素
 */
export function changeModelNodeType(nodeKey, newModel) {
  const { graph } = graphObject;
  let node = graph.node(nodeKey);
  // 获取当前元素
  const parentKey = graph.parent(nodeKey);
  // 获取父级元素
  const detachedModel = fulex(newModel);
  // 新的Model
  if (node && parentKey) {
    traverseGraphBranch(graph, nodeKey, childKey => {
      // 所有的子级Node全部做移除操作~~~
      if (childKey !== nodeKey) {
        let childNode = graph.node(childKey);
        if (childNode) {
          delete childNode.modelNode;
          graph.removeNode(childKey);
        }
      }
    });
    mapModelForNode(
      graph,
      detachedModel,
      node.index,
      undefined,
      undefined,
      nodeKey
    );
    let parentNode = graph.node(parentKey);
    let { modelNode } = parentNode;
    modelNode.children = modelNode.children || [];
    let modelNodesArgs = [node.index, 1].concat([detachedModel]);
    modelNode.children.splice.apply(modelNode.children, modelNodesArgs);
    adjustIndices(graph, parentKey);
  }
}

/**
 * 
 * @param {*} nodeKey 
 * 设置元素的isForCutting为true，子元素的isForCuttingChild也为true
 */
export function setForCutting(nodeKey) {
  const { graph } = graphObject;
  let node = graph.node(nodeKey);
  if (node) {
    node.isForCutting = true;
    traverseGraphBranch(graph, nodeKey, key => {
      let childNode = graph.node(key);
      childNode.isForCuttingChild = true;
    });
  }
}

/**
 * 
 * @param {*} nodeKey 
 * isForCutting设置为false同时将子元素的isForCuttingChild设置为false
 */
export function removeForCutting(nodeKey) {
  const { graph } = graphObject;
  let node = graph.node(nodeKey);
  if (node) {
    node.isForCutting = undefined;
    traverseGraphBranch(graph, nodeKey, key => {
      let childNode = graph.node(key);
      childNode.isForCuttingChild = undefined;
    });
  }
}

/**
 * 
 * @param {*} nodeKey
 * 设置isForCopying为true 
 */
export function setForCopying(nodeKey) {
  const { graph } = graphObject;
  let node = graph.node(nodeKey);
  if (node) {
    node.isForCopying = true;
  }
}

/**
 * 
 * @param {*} nodeKey 
 * 移除isForCopying配置
 */
export function removeForCopying(nodeKey) {
  const { graph } = graphObject;
  let node = graph.node(nodeKey);
  if (node) {
    node.isForCopying = undefined;
  }
}
/**
 * 
 * @param {*} nodeKey 
 * 移除剪切板
 */
export function removeClipboardMarks(nodeKey) {
  removeForCutting(nodeKey);
  removeForCopying(nodeKey);
}

/**
 * 
 * @param {*} rootKey 
 * 根据highlighted/selected/isForCutting/isForCopying来获得元素
 *   result = getMarkedKeys(pNode.pageKey);
 */
export function getMarkedKeys(rootKey) {
  let selected = [];
  let highlighted = [];
  let forCutting = [];
  let forCopying = [];
  const { graph } = graphObject;
  traverseGraphBranch(graph, rootKey, key => {
    // 对当前key和其所有的自己元素进行遍历操作
    let childNode = graph.node(key);
    if (childNode) {
      if (childNode.highlighted) {
        highlighted.push(key);
      }
      if (childNode.selected) {
        selected.push(key);
      }
      if (childNode.isForCutting) {
        forCutting.push(key);
      }
      if (childNode.isForCopying) {
        forCopying.push(key);
      }
    }
  });
  //console.log('Get marked keys, root: ' + rootKey +
  //    ', selected: ' + selected.length +
  //    ', highlighted: ' + highlighted.length +
  //    ', forCutting: ' + forCutting.length +
  //    ', forCopying: ' + forCopying.length);
  return { selected, highlighted, forCutting, forCopying };
}

/**
 * 
 * 得到所有的keys
 */
export function getAllMarkedKeys() {
  const { graph, pageNodes } = graphObject;
  let result = undefined;
  pageNodes.forEach(pNode => {
    if (!result) {
      result = getMarkedKeys(pNode.pageKey);
      // result初始化一次即可，后续的pageNode都直接替换即可
    } else {
      const { selected, highlighted, forCutting, forCopying } = getMarkedKeys(
        pNode.pageKey
      );
      // 直接push即可，每一个字段都是一个数组
      result.selected = result.selected.concat(selected);
      result.highlighted = result.highlighted.concat(highlighted);
      result.forCutting = result.forCutting.concat(forCutting);
      result.forCopying = result.forCopying.concat(forCopying);
    }
  });
  return result;
}
