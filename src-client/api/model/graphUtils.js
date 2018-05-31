import { uniqueId, forOwn, isObject } from "lodash";
import { fulex } from "../utils/utils.js";

/**
 * 
 * @param {*} srcGraph 
 * @param {*} rootModelNode 
 * @param {*} rootIndex 
 * @param {*} isNew 
 * @param {*} prop 
 * 调用方法:  pageKey = mapModel(graphObject.graph, page, index);
 * 调用方法2: mapModel(graph, pageModel, pageNodes.length, true);
 * 调用方法3: mapModel(srcGraph, newModelNode, 0, true);
 *   let quickKey = mapModel(graph, newModel, 0);
 * 方法作用:在Graph中新添加一个节点,这个要添加节点的所有子级chilren的父级全部设置为新添加的这个节点
 *         如果新添加节点的prop不为空,同时含有type表示它是复杂类型，也将它父级设置为要新添加的节点
 */
export function mapModel(srcGraph, rootModelNode, rootIndex, isNew, prop) {
  const rootKey = uniqueId();
  // 在新的Graph上添加一个Node
  srcGraph.setNode(rootKey, {
    modelNode: rootModelNode,
    // rootModelNode为其中一个page对象
    index: rootIndex,
    // index新插入的，比如append它的值设置为0了...
    prop
    // 属性
  });
  //使用iteratee 遍历自身的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。
  //   如果返回 false，iteratee 会提前退出遍历。
  forOwn(rootModelNode.props, (value, prop) => {
    //   如果type表示是复杂类型的属性
    if (isObject(value) && value.type) {
      // 遍历其props属性，但是需要有type属性
      const childKey = mapModel(srcGraph, value, 0, isNew, prop);
      srcGraph.setParent(childKey, rootKey);
    }
  });
  const { children } = rootModelNode;
  //获取里面的children字段
  if (children && children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      const childKey = mapModel(srcGraph, children[i], i, isNew);
      //(1)rootModelNode的本身children的parent全部设置为新添加的那个节点。
      //(2)当前节点的所有children遍历产生新的childKey,但是childKey产生时候的index依然是从0开始，即所有的子级元素都是index从0开始编号
      // graph.setParent(v, parent)
      // Sets the parent for v to parent if it is defined or removes the parent for v if parent is undefined
      srcGraph.setParent(childKey, rootKey);
    }
  }
  return rootKey;
}

/**
 * 批量调用mapModel方法
 */
export function mapModelForNode(
  srcGraph,
  rootModelNode,
  rootIndex,
  isNew,
  prop,
  rootKey
) {
  srcGraph.setNode(rootKey, {
    modelNode: rootModelNode,
    index: rootIndex,
    prop
  });
  //   在Graph上设置一个新的节点
  forOwn(rootModelNode.props, (value, prop) => {
    //   如果含有type表示是复杂类型
    if (isObject(value) && value.type) {
      const childKey = mapModel(srcGraph, value, 0, isNew, prop);
      srcGraph.setParent(childKey, rootKey);
    }
  });
  const { children } = rootModelNode;
  //   查找其中的children
  if (children && children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      const childKey = mapModel(srcGraph, children[i], i, isNew);
      //   把childKey全部设置为rootKey
      srcGraph.setParent(childKey, rootKey);
    }
  }
  return rootKey;
}

/**
 * 
 * @param {*} key 
 * @param {*} graphNode 
 * let resultNode = makeNodeWrapper(rootNodeKey, rootNode);
 * 对node的格式进行一次包装，key设置为新的值，其他值都不变
 */
export function makeNodeWrapper(key, graphNode) {
  return {
    key: key,
    modelNode: graphNode.modelNode,
    index: graphNode.index,
    prop: graphNode.prop,
    selected: graphNode.selected,
    highlighted: graphNode.highlighted,
    isForCutting: graphNode.isForCutting,
    isForCuttingChild: graphNode.isForCuttingChild,
    isForCopying: graphNode.isForCopying
  };
}

/**
 * 
 * @param {*} srcGraph 
 * @param {*} rootKey 
 * @param {*} cbFunc 
 *    traverseGraphBranch(graph, pageNode.pageKey, nodeKey => {
      graph.removeNode(nodeKey);
    });
    graph.children(v)

    Returns all nodes that are children of node v or undefined if node 
    not in the graph. Always returns [] for graphs that are not
    compound. Takes O(|V|) time.
 */
export function traverseGraphBranch(srcGraph, rootKey, cbFunc) {
  const children = srcGraph.children(rootKey);
  //   获取所有的子元素
  if (children && children.length) {
    children.forEach(key => {
      traverseGraphBranch(srcGraph, key, cbFunc);
    });
  }
  //   删除它
  if (cbFunc) {
    cbFunc(rootKey);
  }
}

/**
 * @ 调整Graph下的所有的子级节点的Index
 * @param {*} srcGraph 
 * @param {*} nodeKey 
 * 调整Index: adjustIndices(srcGraph, parentNodeKey);
 */
export function adjustIndices(srcGraph, nodeKey) {
  const parentNode = srcGraph.node(nodeKey);
  //找到父级节点
  const parentChildren = srcGraph.children(nodeKey);
  //父级节点的所有子级节点
  if (parentNode && parentChildren && parentChildren.length > 0) {
    let childNode;
    parentChildren.forEach(childKey => {
      childNode = srcGraph.node(childKey);
      //   子级nodeKey进行遍历
      if (childNode) {
        //如果某一个子级元素含有prop，那么将它的index设置为0
        if (childNode.prop) {
          childNode.index = 0;
        } else if (
          parentNode.modelNode.children &&
          parentNode.modelNode.children.length > 0
        ) {
          //如果父级的modelNode的children有值
          //   "7": {
          //     "modelNode": {
          //         "pageName": "Page73",
          //         "pagePath": "/newMenu",
          //         "children": [{
          //             "type": "Counter",
          //             "props": {},
          //             "children": [],
          //             "namespace": "antd"
          //         },
          //         {
          //             "type": "Counter",
          //             "props": {},
          //             "children": [],
          //             "namespace": "antd",
          //             "variant": "default"
          //         }]
          //     },
          //     "index": 1
          // },
          childNode.index = parentNode.modelNode.children.indexOf(
            childNode.modelNode
          );
          // https://github.com/dagrejs/graphlib/wiki/API-Reference#children
          // 父级通过children.indexOf直接查看在其中的排序
          //   将childNode的index设置为在其中的值
        } else {
          // 没有children，那么设置为0
          childNode.index = 0;
        }
      }
    });
  }
}

/**
 * 
 * @param {*} srcGraph 
 * @param {*} nodeKey 
 * detach某一个Graph中的点~~~
 * 从nodeKey的父级中把它移除掉,同时nodeKey的父级为undefined即清除
 */
export function detachGraphNode(srcGraph, nodeKey) {
  let cutNode = srcGraph.node(nodeKey);
  if (!cutNode) {
    throw Error("Detach graph node: node key " + nodeKey + " was not found.");
  }
  const parentNodeKey = srcGraph.parent(nodeKey);
  //   获取节点的父级节点
  if (parentNodeKey) {
    let parentNode = srcGraph.node(parentNodeKey);
    // 父级节点存在并含有modelNode节点
    if (parentNode && parentNode.modelNode) {
      let { modelNode: parentModelNode } = parentNode;
      //   剪切的这个节点有pro属性
      if (cutNode.prop) {
        if (!parentModelNode.props[cutNode.prop]) {
          throw Error(
            "Detach graph node: model node with key " +
              parentNodeKey +
              " does not have prop " +
              cutNode.prop
          );
        }
        parentModelNode.props[cutNode.prop] = undefined;
        cutNode.prop = undefined;
      } else if (
        //   父级节点有子级节点
        parentModelNode.children &&
        parentModelNode.children.length > 0
      ) {
        // "45": {
        //     "modelNode": {
        //         "type": "Select",
        //         "variant": "default",
        //         "children": [{
        //             "type": "Option",
        //             "variant": "default",
        //             "props": {
        //                 "key": "option_1"
        //             },
        //             "children": [{
        //                 "key": 1,
        //                 "type": "span",
        //                 "text": "性别"
        //             }],
        //             "namespace": "antd"
        //         },
        //         {
        //             "type": "Option",
        //             "variant": "default",
        //             "props": {
        //                 "key": "option_2"
        //             },
        //             "children": [{
        //                 "key": 2,
        //                 "type": "span",
        //                 "text": "年龄"
        //             }],
        //             "namespace": "antd"
        //         }],
        //         "namespace": "antd",
        //         "props": {
        //             "placeholder": "please select",
        //             "style": {
        //                 "width": "400",
        //                 "height": "px",
        //                 "background": "red"
        //             }
        //         }
        //     },
        //     "index": 0
        // },
        const childIndex = parentModelNode.children.indexOf(cutNode.modelNode);
        // 知道选中的这个子级节点的具体坐标了~~
        if (childIndex < 0) {
          throw Error(
            "Detach graph node: child model node with key " +
              nodeKey +
              " does not belong to parent node with key " +
              parentNodeKey
          );
        }
        // 从父级节点中移除
        parentModelNode.children.splice(childIndex, 1);
      } else {
        throw Error(
          "Detach graph node: parent node " +
            parentNodeKey +
            " does not have children or needed prop."
        );
      }
      //当前节点的父节点调整index坐标
      adjustIndices(srcGraph, parentNodeKey);
    } else {
      throw Error(
        "Detach graph node: parent node " +
          parentNodeKey +
          " is missing or does not have linked modelNode."
      );
    }
    // 将当前的nodeKey设置为undefined
    srcGraph.setParent(nodeKey, undefined);
  }
  return nodeKey;
}

/**
 * 
 * @param {*} srcGraph 
 * @param {*} rootNodeKey: 其值为pageNodes里面的每一个元素
 * @param {*} testFunc: isForCutting为true
 * @param {*} detachedKeys 
 * 调用方法: detachGraphNodes(graph, pNode.pageKey, testFunc, detachedKeys);
 */
export function detachGraphNodes(
  srcGraph,
  rootNodeKey,
  testFunc,
  detachedKeys
) {
  detachedKeys = detachedKeys || [];
  const parentNode = srcGraph.node(rootNodeKey);
  // 获取当前pageNode的pathname对应的节点
  if (parentNode) {
    let childKeys = srcGraph.children(rootNodeKey);
    // 获取所有的子节点
    if (testFunc(parentNode)) {
      // isForCutting属性为true,那么detachedKeys数组中就含有parentNode元素
      detachedKeys.push(detachGraphNode(srcGraph, rootNodeKey));
    }
    if (childKeys && childKeys.length > 0) {
      // 遍历所有的子级元素
      let sortedChildrenNodes = [];
      let propChildrenNodes = [];
      let childNode;
      childKeys.forEach(childKey => {
        childNode = srcGraph.node(childKey);
        // 获取子元素
        if (childNode) {
          // 如果有prop属性，那么放入到propChildrenNodes，否则放到sortedChildrenNodes
          if (childNode.prop) {
            propChildrenNodes.push({
              key: childKey,
              node: childNode
            });
          } else {
            sortedChildrenNodes.push({
              key: childKey,
              node: childNode
            });
          }
        }
      });
      if (sortedChildrenNodes.length > 0) {
        sortedChildrenNodes.sort((a, b) => a.node.index - b.node.index);
      }
      //childNode的key也移除掉
      propChildrenNodes.forEach(childNode => {
        detachGraphNodes(srcGraph, childNode.key, testFunc, detachedKeys);
      });
      //   sortedChildrenNodes
      sortedChildrenNodes.forEach(childNode => {
        detachGraphNodes(srcGraph, childNode.key, testFunc, detachedKeys);
      });
    }
  }
}

/**
 * 
 * @param {*} srcGraph 
 * @param {*} nodeKey 
 * 复制某一个Node的值并返回
 */
export function copyGraphNode(srcGraph, nodeKey) {
  let copyNode = srcGraph.node(nodeKey);
  // 找到需要复制的那个节点
  if (!copyNode) {
    throw Error("Copy graph node: node key " + nodeKey + " was not found.");
  }
  let newModelNode = fulex(copyNode.modelNode);
  // 找到需要复制的那个节点的modelNode属性(服务端数据格式)
  return mapModel(srcGraph, newModelNode, 0, true);
}

/**
 * 
 * @param {*} srcGraph 
 * @param {*} rootNodeKey 
 * @param {*} testFunc 
 * @param {*} detachedKeys 
 * 复制
 *   copyGraphNodes(graph, pNode.pageKey, testFunc, detachedKeys);
 */
export function copyGraphNodes(srcGraph, rootNodeKey, testFunc, detachedKeys) {
  detachedKeys = detachedKeys || [];
  const parentNode = srcGraph.node(rootNodeKey);
  //   得到根节点
  if (parentNode) {
    let childKeys = srcGraph.children(rootNodeKey);
    // 得到根节点的所有子节点，如果节点含有isForCopying那么表示满足条件
    if (testFunc(parentNode)) {
      detachedKeys.push(copyGraphNode(srcGraph, rootNodeKey));
    }
    // 表示有子节点
    if (childKeys && childKeys.length > 0) {
      let sortedChildrenNodes = [];
      let propChildrenNodes = [];
      let childNode;
      //   遍历子节点
      childKeys.forEach(childKey => {
        childNode = srcGraph.node(childKey);
        // 获取子节点的元素
        if (childNode) {
          // 含有pro与不含有pro做区别对待
          if (childNode.prop) {
            propChildrenNodes.push({
              key: childKey,
              node: childNode
            });
          } else {
            sortedChildrenNodes.push({
              key: childKey,
              node: childNode
            });
          }
        }
      });
      //   sortedChildrenNodes根据index排序
      if (sortedChildrenNodes.length > 0) {
        sortedChildrenNodes.sort((a, b) => a.node.index - b.node.index);
      }
      //   含有props做递归操作
      propChildrenNodes.forEach(childNode => {
        copyGraphNodes(srcGraph, childNode.key, testFunc, detachedKeys);
      });
      //   sortedChildrenNodes也做递归操作
      sortedChildrenNodes.forEach(childNode => {
        copyGraphNodes(srcGraph, childNode.key, testFunc, detachedKeys);
      });
    }
  }
}
