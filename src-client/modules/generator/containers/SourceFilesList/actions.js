import { bindActionCreators } from "redux";
import { saveGenerated } from "modules/generator/containers/Generator/actions";
/**
 * 
 * @param {*} dispatch 
 * 保存已经注册的文件
 */
export const containerActions = dispatch =>
  bindActionCreators(
    {
      saveGenerated
    },
    dispatch
  );
