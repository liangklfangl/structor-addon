import { bindActionCreators } from "redux";

import { failed } from "modules/app/containers/AppMessage/actions";
import { pregenerate } from "modules/generator/containers/Generator/actions";

/**
 * 
 * @param {*} dispatch 
 * 调用pregenerate预处理
 */
export const containerActions = dispatch =>
  bindActionCreators(
    {
      pregenerate
    },
    dispatch
  );
