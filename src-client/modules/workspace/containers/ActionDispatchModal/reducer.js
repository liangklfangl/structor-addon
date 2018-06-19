import * as actions from "./actions.js";

/**
 * 默认右键弹窗不显示
 */
const initialState = {
  actionDispatchShow: false,
  addOn: {}
  // 附加属性
};

/**
 * 根据当前路由获取要保存的搜索值
 */
function filterFieldsByCurrentPath(pages, currentPath) {
  const fields = [];
  const currentPage = pages.filter(el => {
    return el.pageName == currentPath;
  })[0];
  const fiels = ((currentPage && currentPage.children) ||
    []
  ).filter((el, index) => {
    const props = el.props;
    const { fieldName, fieldDesc } = props.name || {};
    if (fieldName && fieldDesc) {
      fields.push({ fieldName, fieldDesc });
    }
  }, []);
  return fields;
}
/**
 * 处理右键点击的弹出窗
 */
export default (state = initialState, action = {}) => {
  const { type, payload, addOn } = action;
  if (type === actions.SHOW_ACTION_DISPATCH_MODEL) {
    console.log("SHOW_ACTION_DISPATCH_MODEL中的值为", action);
    // 行为组件+数据组件
    return Object.assign({}, state, {
      actionDispatchShow: payload,
      addOn
    });
  } else if (type === actions.GET_ACTION_DISPATCH_MODEL_DATA) {
    const payload = action.payload || {};
    const { pages } = payload.data;
    const { currentPath } = payload.addOn || {};
    console.log("SHOW_ACTION_DISPATCH_MODE中的值为2", action, pages, currentPath);
    const filteredFields = filterFieldsByCurrentPath(pages, currentPath);
    console.log("filteredFields===", filteredFields);
    return Object.assign({}, state, {
      fields: filteredFields
    });
  } else if (type === actions.MUTATION_ACTION_DISPATCH_MODEL_DATA) {
    // 修改state中的某个值
    const { payload } = action;
    return Object.assign({}, state, {
      ...payload
    });
  }

  return state;
};
