import { cloneDeep } from "lodash";

/**
 * 
 * @param {*} componentTree 
 * @param {*} componentName 
 * @param {*} namespace 
 * @param {*} defaultsIndex 
 * 调用方法
 *   componentDef = findComponentDef(
          componentTree,
          componentName,
          namespace
        );
 */
export function findComponentDef(
  componentTree,
  componentName,
  namespace,
  defaultsIndex = 0
) {
  let componentDef = undefined;
  if (componentName && namespace) {
    //   组件树有componentTree = {modules['namespace']['components'][componentName]}
    if (componentTree.modules) {
      let module = componentTree.modules[namespace];
      if (module && module.components) {
        componentDef = module.components[componentName];
      } else {
        throw Error(`Namespace module ${namespace} was not found.`);
      }
    }
  } else if (componentName) {
    //   html组件，如果没有namespace，直接根据componentTree.htmlComponents获取
    if (componentTree.htmlComponents) {
      componentDef = componentTree.htmlComponents[componentName];
    }
    // 直接从components里面获取
    if (!componentDef && componentTree.components) {
      componentDef = componentTree.components[componentName];
    }
  }
  //   组件定义
  if (componentDef) {
    const { defaults } = componentDef;
    if (defaults && defaults.length > defaultsIndex) {
      return componentDef;
    } else {
      throw Error(
        `Model definition for ${componentName} component is missing.`
      );
    }
  } else {
    if (namespace) {
      throw Error(
        `Component ${componentName} in namespace ${namespace} was not found.`
      );
    } else {
      throw Error(`Component ${componentName} was not found.`);
    }
  }
}

/**
 * 
 * @param {*} componentTree 
 * @param {*} componentNames 
 * 调用方式: const variantModel = utilsStore.getComponentTupleModel(
    componentTree,
    componentNames
  );
  componentNames是点分割的组件名称
 */
export function getComponentTupleModel(componentTree, componentNames) {
  let tupleModel = undefined;
  if (componentNames && componentNames.length > 0) {
    let componentName;
    let namespace;
    let firstBracePos;
    let secondBracePos;
    let componentDef;
    componentNames.forEach(name => {
      firstBracePos = name.indexOf("[");
      secondBracePos = name.indexOf("]");
      //   如果组件名称有[],如Button[RasiedButton]
      if (firstBracePos > 0 && secondBracePos > 0) {
        componentName = name.substr(0, firstBracePos).trim();
        // 前面是组件名称
        namespace = name.substr(
          firstBracePos + 1,
          secondBracePos - firstBracePos - 1
        );
        // 括号里面是命名空间
      } else {
        //   如果没有[]这样的名称，那么就是直接组件名称，否则是有namespace的
        componentName = name.trim();
        namespace = undefined;
      }
      try {
        //   从组件树里面根据namespace+componentName找到组件定义
        componentDef = findComponentDef(
          componentTree,
          componentName,
          namespace
        );
        const { defaults } = componentDef;
        if (tupleModel) {
          tupleModel.children = [cloneDeep(defaults[0])];
        } else {
          tupleModel = cloneDeep(defaults[0]);
        }
      } catch (e) {
        // do nothing;
        console.error("Error in searching the component: ", e);
      }
    });
  }
  return tupleModel;
}

/**
 * 新建页面的时候默认的内容
 */
export function getTemplatePageModel() {
  return {
    pageName: "UnnamedPage",
    pagePath: "/UnnamedPage",
    children: [
      {
        type: "div",
        // div的props
        props: {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1em"
          }
        },
        //   div的children中
        children: [
          {
            type: "div",
            children: [
              {
                type: "h3",
                props: {
                  style: {
                    padding: "1em",
                    textAlign: "center"
                  }
                },
                children: [
                  {
                    type: "span",
                    text: "Click on me and start creating a new cool component."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
}
