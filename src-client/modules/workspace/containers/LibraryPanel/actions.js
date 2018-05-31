import { cloneDeep } from "lodash";
import { bindActionCreators } from "redux";
import { graphApi, utils, utilsStore } from "api";
import { success, failed } from "modules/app/containers/AppMessage/actions";
import {
  updateMarked,
  updatePage
} from "modules/workspace/containers/DeskPage/actions";
import { setSelectedKey } from "modules/workspace/containers/SelectionBreadcrumbs/actions";
import { setForNew } from "modules/workspace/containers/ClipboardIndicator/actions";
import { pushHistory } from "modules/workspace/containers/HistoryControls/actions";
import { saveComponentDefaults } from "modules/workspace/containers/SaveDefaultModelModal/actions";
import { showModal as confirmModal } from "modules/app/containers/ConfirmationModal/actions";

export const LOAD_COMPONENTS = "LibraryPanel/LOAD_COMPONENTS";
export const SET_COMPONENTS = "LibraryPanel/SET_COMPONENTS";
export const TOGGLE_PANEL_GROUP = "LibraryPanel/TOGGLE_PANEL_GROUP";
export const TOGGLE_ITEM_GROUP = "LibraryPanel/TOGGLE_ITEM_GROUP";
export const ADD_RECENTLY_USED = "LibraryPanel/ADD_RECENTLY_USED";

export const loadComponents = () => ({ type: LOAD_COMPONENTS });
export const togglePanelGroup = key => ({
  type: TOGGLE_PANEL_GROUP,
  payload: key
});
export const toggleItemGroup = key => ({
  type: TOGGLE_ITEM_GROUP,
  payload: key
});
export const addRecentlyUsed = (componentName, namespace) => {
  return { type: ADD_RECENTLY_USED, payload: { componentName, namespace } };
};

export const deleteComponentDefault = (
  componentName,
  namespace,
  defaultsIndex
) => (dispatch, getState) => {
  dispatch(
    confirmModal(
      `#### Are you sure you want \n#### to delete ${componentName} model variant?`,
      () => {
        const { libraryPanel: { componentTree } } = getState();
        let componentDef = undefined;
        try {
          componentDef = utilsStore.findComponentDef(
            componentTree,
            componentName,
            namespace
          );
          const { defaults } = componentDef;
          if (defaults && defaults.length > defaultsIndex) {
            let newDefaults =
              defaults && defaults.length > 0 ? cloneDeep(defaults) : [];
            newDefaults.splice(defaultsIndex, 1);
            dispatch(
              saveComponentDefaults(componentName, namespace, newDefaults)
            );
          }
        } catch (e) {
          dispatch(failed(e.message));
        }
      }
    )
  );
};

export const setComponents = componentTree => (dispatch, getState) => {
  dispatch({ type: SET_COMPONENTS, payload: { componentTree } });
};

export const quickCopyToClipboard = (
  componentName,
  namespace,
  defaultsIndex
) => (dispatch, getState) => {
  const { libraryPanel: { componentTree } } = getState();
  let componentDef = undefined;
  try {
    componentDef = utilsStore.findComponentDef(
      componentTree,
      componentName,
      namespace,
      defaultsIndex
    );
    const { defaults } = componentDef;
    dispatch(setForNew(defaults[defaultsIndex]));
    dispatch(addRecentlyUsed(componentName, namespace));
    dispatch(success(componentName + " was copied to clipboard"));
  } catch (e) {
    dispatch(failed(e.message));
  }
};

export const quickBefore = componentNames => (dispatch, getState) => {
  const { libraryPanel: { componentTree } } = getState();
  const variantModel = utilsStore.getComponentTupleModel(
    componentTree,
    componentNames
  );
  if (variantModel) {
    dispatch(pushHistory());
    const newSelectedKey = graphApi.quickBeforeOrAfter(variantModel, false);
    dispatch(setSelectedKey(newSelectedKey));
    dispatch(updatePage());
  } else {
    console.error("Quick add before: model for variant key was not found");
  }
};

/**
 * 在后面添加一个组件，是同级组件
 * (1)得到组件树componentTree
 * (2)componentNames得到的是根据.操作符分割后的值  const componentNames = componentTuple.split(".");
 */
export const quickAfter = componentNames => (dispatch, getState) => {
  const { libraryPanel: { componentTree } } = getState();
  // 默认的组件定义
  const variantModel = utilsStore.getComponentTupleModel(
    componentTree,
    componentNames
  );
  console.log("quickAfter variantModel中的值为===", variantModel);
  //   {
  //     "type": "Button",
  //     "variant": "default",
  //     "children": []
  //   }
  // variantModel格式为Button的值
  if (variantModel) {
    dispatch(pushHistory());
    // 添加history，其实就是调用action，它会调用saveModel将数据保存到服务端
    const newSelectedKey = graphApi.quickBeforeOrAfter(variantModel, true);
    // 那些Node已经被插入完成，然后更新数据，这是在src-client李曼完成的
    dispatch(setSelectedKey(newSelectedKey));
    // 设置新的selectedkey和更新页面
    dispatch(updatePage());
  } else {
    console.error("Quick add after: model for variant key was not found");
  }
};

/**
 * 
 * @param {*} componentNames 
 * 插入第一个子级元素
 */
export const quickFirst = componentNames => (dispatch, getState) => {
  const { libraryPanel: { componentTree } } = getState();
  const variantModel = utilsStore.getComponentTupleModel(
    componentTree,
    componentNames
  );
  if (variantModel) {
    dispatch(pushHistory());
    const newSelectedKey = graphApi.quickFirstOrLast(variantModel, true);
    dispatch(setSelectedKey(newSelectedKey));
    dispatch(updatePage());
  } else {
    console.error("Quick add as first: model for variant key was not found");
  }
};

/**
 * 
 * @param {*} componentNames 
 * 在Select最后添加一个Option子元素，由覃亮添加，用于配置选项，和子元素添加不一样
 */
export const quickLastSelectOption = (componentNames, props, children) => (
  dispatch,
  getState
) => {
  const { libraryPanel: { componentTree } } = getState();
  const variantModel = utilsStore.getComponentTupleModel(
    componentTree,
    componentNames
  );
  // 得到组件的默认定义并更新props和children值
  variantModel.children = children || [];
  variantModel.props = props || {};
  // 重新设置children子元素
  console.log("quickLastSelectOption  variantModel===", variantModel);
  console.log("\n\n\n");
  if (variantModel) {
    dispatch(pushHistory());
    const newSelectedKey = graphApi.quickFirstOrLast(variantModel, false);
    dispatch(setSelectedKey(newSelectedKey));
    dispatch(updatePage());
  } else {
    console.error("Quick add as first: model for variant key was not found");
  }
};

/**
 * 
 * @param {*} componentNames 
 * 在最后添加一个子元素
 */
export const quickLast = componentNames => (dispatch, getState) => {
  const { libraryPanel: { componentTree } } = getState();
  console.log("quickLast  componentNames===", componentNames);
  console.log("quickLast  componentTree===", componentTree);
  const variantModel = utilsStore.getComponentTupleModel(
    componentTree,
    componentNames
  );
  console.log("quickLast  variantModel===", variantModel);
  console.log("\n\n\n");
  if (variantModel) {
    dispatch(pushHistory());
    const newSelectedKey = graphApi.quickFirstOrLast(variantModel, false);
    dispatch(setSelectedKey(newSelectedKey));
    dispatch(updatePage());
  } else {
    console.error("Quick add as first: model for variant key was not found");
  }
};

/**
 * 
 * @param {*} componentNames 
 * 使用心得元素替换选中的元素
 */
export const quickReplace = componentNames => (dispatch, getState) => {
  const { libraryPanel: { componentTree } } = getState();
  const variantModel = utilsStore.getComponentTupleModel(
    componentTree,
    componentNames
  );
  if (variantModel) {
    dispatch(pushHistory());
    const newSelectedKey = graphApi.quickReplace(variantModel);
    dispatch(setSelectedKey(newSelectedKey));
    dispatch(updatePage());
  } else {
    console.error("Quick replace: model for variant key was not found");
  }
};

//export const quickWrap = (componentName, selectedKey) => (dispatch, getState) => {
//    const { libraryPanel: {defaultVariantMap, componentsList} } = getState();
//    if(componentsList && componentsList.indexOf(componentName) >= 0){
//        const variantModel = getVariantModel(defaultVariantMap, componentName);
//        if(variantModel){
//            dispatch(pushHistory());
//            const newSelectedKey = graphApi.quickWrap(variantModel, selectedKey);
//            dispatch(setSelectedKey(newSelectedKey));
//            dispatch(updatePage());
//        } else {
//            console.error('Quick wrap: model for variant key was not found');
//        }
//    } else {
//        dispatch(failed('Component ' + componentName + ' was not found.'))
//    }
//};

export const containerActions = dispatch =>
  bindActionCreators(
    {
      quickCopyToClipboard,
      togglePanelGroup,
      toggleItemGroup,
      deleteComponentDefault,
      quickLastSelectOption
      // 快速为Select等添加子元素
    },
    dispatch
  );
