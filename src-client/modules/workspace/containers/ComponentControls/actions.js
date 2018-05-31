import { bindActionCreators } from "redux";
import { loadOptionsAndShowModal } from "modules/workspace/containers/ComponentOptionsModal/actions";
// 保存数据
import { loadGenerators } from "modules/generator/containers/Generator/actions";
// 所有的generators
import { showModal as showSaveDefaultModelModal } from "modules/workspace/containers/SaveDefaultModelModal/actions";
export const containerActions = dispatch =>
  bindActionCreators(
    {
      loadOptionsAndShowModal,
      loadGenerators,
      showSaveDefaultModelModal
    },
    dispatch
  );
