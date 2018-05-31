import { bindActionCreators } from "redux";
import { graphApi } from "api";
import {
  updateMarked,
  updatePage
} from "modules/workspace/containers/DeskPage/actions";
import {
  removeSelectedKeys,
  setSelectedKeys
} from "modules/workspace/containers/SelectionBreadcrumbs/actions";
import {
  removeClipboardKeys,
  CLIPBOARD_COPY,
  CLIPBOARD_CUT,
  CLIPBOARD_NEW
} from "modules/workspace/containers/ClipboardIndicator/actions";
import { pushHistory } from "modules/workspace/containers/HistoryControls/actions";
import { showModal as showQuickAppend } from "modules/workspace/containers/QuickAppendModal/actions";
// export const showModal = (appendMode, targetKey) => (dispatch, getState) => {
//     if (targetKey) {
//       dispatch(setSelectedKeys([targetKey]));
//     }
//     dispatch({ type: SHOW_MODAL, payload: appendMode });
//   };
const setTargetKey = (targetKey, selectedKeys) => {
  let selectedNode;
  if (selectedKeys && selectedKeys.length > 0) {
    selectedKeys.forEach(key => {
      selectedNode = graphApi.getNode(key);
      if (selectedNode && selectedNode.selected) {
        selectedNode.selected = undefined;
      }
    });
  }
  let nextGraphNode = graphApi.getNode(targetKey);
  if (nextGraphNode) {
    nextGraphNode.selected = true;
  }
};

export const pasteBefore = targetKey => (dispatch, getState) => {
  const { clipboardIndicator: { clipboardMode } } = getState();
  let resultKeys;
  if (targetKey) {
    dispatch(setSelectedKeys([targetKey]));
  }
  dispatch(pushHistory());
  if (clipboardMode === CLIPBOARD_CUT) {
    resultKeys = graphApi.cutPasteBeforeOrAfter(false);
    dispatch(removeClipboardKeys());
  } else if (clipboardMode === CLIPBOARD_COPY) {
    resultKeys = graphApi.copyPasteBeforeOrAfter(false);
  } else if (clipboardMode === CLIPBOARD_NEW) {
    resultKeys = graphApi.fromBufferBeforeOrAfter(false);
  }
  if (resultKeys && resultKeys.length > 0) {
    dispatch(setSelectedKeys(resultKeys));
    dispatch(updatePage());
  }
};

/**
 * 
 * @param {*} targetKey 
 * 在后面添加元素，直接获取剪切板上的元素
 */
export const pasteAfter = targetKey => (dispatch, getState) => {
  const { clipboardIndicator: { clipboardMode } } = getState();
  //   当前剪切板的状态为clipboardMode字段表示的值
  let resultKeys;
  //   如果有targetKey，那么设置为setSelectedKeys
  if (targetKey) {
    dispatch(setSelectedKeys([targetKey]));
  }
  dispatch(pushHistory());
  //   保存数据，剪切板有几种类型CLIPBOARD_CUT/CLIPBOARD_COPY/CLIPBOARD_NEW
  if (clipboardMode === CLIPBOARD_CUT) {
    resultKeys = graphApi.cutPasteBeforeOrAfter(true);
    dispatch(removeClipboardKeys());
  } else if (clipboardMode === CLIPBOARD_COPY) {
    resultKeys = graphApi.copyPasteBeforeOrAfter(true);
  } else if (clipboardMode === CLIPBOARD_NEW) {
    resultKeys = graphApi.fromBufferBeforeOrAfter(true);
  }
  //   得到resultKeys,设置值
  if (resultKeys && resultKeys.length > 0) {
    dispatch(setSelectedKeys(resultKeys));
    dispatch(updatePage());
  }
};

/**
 * 
 * @param {*} targetKey 
 * 插入第一个子级元素
 */
export const pasteFirst = targetKey => (dispatch, getState) => {
  console.log('粘贴第一个pasteFirst');
  const { clipboardIndicator: { clipboardMode } } = getState();
  let resultKeys;
  // pasteFirst
  if (targetKey) {
    dispatch(setSelectedKeys([targetKey]));
  }
  dispatch(pushHistory());
  // CUT剪切
  if (clipboardMode === CLIPBOARD_CUT) {
    resultKeys = graphApi.cutPasteFirstOrLast(true);
    dispatch(removeClipboardKeys());
    // COPY复制
  } else if (clipboardMode === CLIPBOARD_COPY) {
    resultKeys = graphApi.copyPasteFirstOrLast(true);
    // 新建NEW
  } else if (clipboardMode === CLIPBOARD_NEW) {
    resultKeys = graphApi.fromBufferFirstOrLast(true);
  }
  if (resultKeys && resultKeys.length > 0) {
    dispatch(setSelectedKeys(resultKeys));
    dispatch(updatePage());
  }
};

export const pasteLast = targetKey => (dispatch, getState) => {
  const { clipboardIndicator: { clipboardMode } } = getState();
  let resultKeys;
  if (targetKey) {
    dispatch(setSelectedKeys([targetKey]));
  }
  dispatch(pushHistory());
  if (clipboardMode === CLIPBOARD_CUT) {
    resultKeys = graphApi.cutPasteFirstOrLast(false);
    dispatch(removeClipboardKeys());
  } else if (clipboardMode === CLIPBOARD_COPY) {
    resultKeys = graphApi.copyPasteFirstOrLast(false);
  } else if (clipboardMode === CLIPBOARD_NEW) {
    resultKeys = graphApi.fromBufferFirstOrLast(false);
  }
  if (resultKeys && resultKeys.length > 0) {
    dispatch(setSelectedKeys(resultKeys));
    dispatch(updatePage());
  }
};

export const pasteReplace = targetKey => (dispatch, getState) => {
  const { clipboardIndicator: { clipboardMode } } = getState();
  let resultKeys;
  if (targetKey) {
    dispatch(setSelectedKeys([targetKey]));
  }
  dispatch(pushHistory());
  if (clipboardMode === CLIPBOARD_CUT) {
    resultKeys = graphApi.cutPasteReplace();
    dispatch(removeClipboardKeys());
  } else if (clipboardMode === CLIPBOARD_COPY) {
    resultKeys = graphApi.copyPasteReplace();
  } else if (clipboardMode === CLIPBOARD_NEW) {
    resultKeys = graphApi.fromBufferReplace();
  }
  if (resultKeys && resultKeys.length > 0) {
    dispatch(setSelectedKeys(resultKeys));
    dispatch(updatePage());
  }
};

//export const pasteWrap = (key) => (dispatch, getState) => {
//    const { clipboardIndicator: {clipboardMode}} = getState();
//    let resultKeys;
//    dispatch(pushHistory());
//    if(clipboardMode === CLIPBOARD_CUT){
//        resultKeys = graphApi.cutPasteWrap();
//        dispatch(removeClipboardKeys());
//    } else if(clipboardMode === CLIPBOARD_COPY){
//        resultKeys = graphApi.copyPasteWrap();
//    } else if(clipboardMode === CLIPBOARD_NEW){
//        resultKeys = graphApi.fromBufferWrap();
//    }
//    if(resultKeys && resultKeys.length > 0){
//        dispatch(setSelectedKeys(resultKeys));
//        dispatch(updatePage());
//    }
//};

export const containerActions = dispatch =>
  bindActionCreators(
    {
      pasteBefore,
      pasteAfter,
      pasteFirst,
      pasteLast,
      pasteReplace,
      showQuickAppend
      //快捷键
    },
    dispatch
  );
