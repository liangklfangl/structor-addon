import { forOwn, includes } from "lodash";
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { modelSelector } from "./selectors.js";
import { containerActions } from "./actions.js";
import { modeMap } from "../QuickAppendModal/actions.js";

import { graphApi } from "api";
import { CLIPBOARD_CUT } from "modules/workspace/containers/ClipboardControls/actions";

let lastWaitTimer = undefined;
const wait = (testFunc, launchFunc) => {
  if (lastWaitTimer) {
    clearTimeout(lastWaitTimer);
    lastWaitTimer = undefined;
  }
  if (!testFunc()) {
    lastWaitTimer = setTimeout(() => {
      wait(testFunc, launchFunc);
    }, 3000);
  } else {
    launchFunc();
  }
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.handleComponentClick = this.handleComponentClick.bind(this);
    this.handlePathnameChanged = this.handlePathnameChanged.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setupShortcuts = this.setupShortcuts.bind(this);
    this.removeShortcuts = this.removeShortcuts.bind(this);
  }
  /**
   * 组件挂载
   * currentPagePath:当前所在的页面路径
   */
  componentDidMount() {
    const domNode = ReactDOM.findDOMNode(this);
    const { componentModel: { pages, currentPagePath } } = this.props;
    if (currentPagePath) {
      domNode.src = "/structor-deskpage" + currentPagePath;
    }
    const { loadPage, pageLoaded } = this.props;
    const { setForCuttingKeys, setForCopyingKeys } = this.props;
    const {
      pasteBefore,
      pasteAfter,
      pasteFirst,
      pasteLast,
      pasteReplace
    } = this.props;
    // 发布某种action
    const { cloneSelected, deleteSelected } = this.props;
    const { showQuickAppend } = this.props;
    const { loadOptionsAndShowModal } = this.props;
    // 特定的action
    loadPage();
    // 加载页面
    this.contentDocument = domNode.contentDocument;
    this.contentWindow = domNode.contentWindow;
    this.setupShortcuts();
    // 监听iframe的onload事件
    domNode.onload = () => {
      this.contentWindow.__pages = pages;
      // 所有的页面记录在iframe的window对象上面
      this.contentWindow.onPageDidMount = page => {
        this.page = page;
        page.bindOnPathnameChanged(this.handlePathnameChanged);
        page.bindGetPagePath(pathname => graphApi.getPagePath(pathname));
        // 监听pathname改变，得到新的在服务端存在的pathname数据，然后给客户端重新加载新的路由
        page.bindGetPageModel(pathname =>
          graphApi.getWrappedModelByPagePath(pathname)
        );
        /**
         * 情况3:拖动的时候宽度和高度变化保存数据
         */
        page.bindDragSizeChange(position => {
          this.props.changeOptionDrag &&
            this.props.changeOptionDrag({ key: position.key }, position);
        });

        /**
         * 情况5:设置组件的复杂属性，Table.columns
         */
        page.settingArrayObjectProps((componentKey, key, props) => {
          this.handleRightMenuItemClickArrayObject(componentKey, key, props);
          console.log(
            "fuck fuck settingArrayObjectProps",
            componentKey,
            key,
            props
          );
        });

        /**
         * 情况6:直接设置属性，而不用弹窗
         */

        page.settingPropsDirectly((componentKey, key, props) => {
          this.settingPropsDirectly(componentKey, key, props);
          console.log(
            "fuck fuck settingPropsDirectly",
            componentKey,
            key,
            props
          );
        });
        /**
         * 情况4:枚举类型直接选择
         */
        page.bindEnumContextMenuSelect((componentKey, key, label) => {
          console.log("structor接受的值为===", componentKey, key, label);
          this.props.changeOption(
            {
              key: componentKey
            },
            {
              [key]: label
            }
          );
        });
        /**
          * 情况2:组件被点击的弹窗
          */
        page.bindOnComponentMouseDown(this.handleComponentClick);
        /**
         * 情况1:如果选中了右键面板的某一个非枚举类型时候触发:一般弹出弹窗+设置值
         */
        page.bindPropSelectChange((componentKey, key, label) => {
          this.handleRightMenuItemClick(componentKey, key, label);
        });

        page.bindGetMarked(pathname =>
          graphApi.getMarkedKeysByPagePath(pathname)
        );
        page.bindGetMode(() => {
          return this.props.componentModel.isEditModeOn;
        });

        /**
         * 选择一个行为组件+数据组件的弹窗
         */
        page.bindToState("dispatchAction", payload => {
          console.log("dispatchAction~~~~", payload);
          const { showActionDispatchModal } = this.props;
          showActionDispatchModal(true, payload);
        });
        //绑定各种事件到initialState中，然后从内部可以调用这些方法!
        page.bindToState("onLoadOptions", (key, isModifier) => {
          const { currentComponent } = this.props;
          loadOptionsAndShowModal(currentComponent);
        });
        page.bindToState("onCut", (key, isModifier) => {
          setForCuttingKeys([key]);
        });
        page.bindToState("onCopy", (key, isModifier) => {
          setForCopyingKeys([key]);
        });
        page.bindToState("onClone", (key, isModifier) => {
          cloneSelected();
        });
        page.bindToState("onDelete", (key, isModifier) => {
          deleteSelected();
        });
        page.bindToState("onBefore", (key, isModifier) => {
          const { clipboardIndicatorModel: { clipboardKeys } } = this.props;
          if (clipboardKeys && clipboardKeys.length > 0) {
            pasteBefore(key);
          } else {
            showQuickAppend(modeMap.addBefore);
          }
        });
        page.bindToState("onAfter", (key, isModifier) => {
          const { clipboardIndicatorModel: { clipboardKeys } } = this.props;
          if (clipboardKeys && clipboardKeys.length > 0) {
            pasteAfter(key);
          } else {
            showQuickAppend(modeMap.addAfter);
          }
        });
        page.bindToState("onFirst", (key, isModifier) => {
          const { clipboardIndicatorModel: { clipboardKeys } } = this.props;
          if (clipboardKeys && clipboardKeys.length > 0) {
            pasteFirst(key);
          } else {
            showQuickAppend(modeMap.insertFirst);
          }
        });
        page.bindToState("onLast", (key, isModifier) => {
          const { clipboardIndicatorModel: { clipboardKeys } } = this.props;
          if (clipboardKeys && clipboardKeys.length > 0) {
            pasteLast(key);
          } else {
            showQuickAppend(modeMap.insertLast);
          }
        });
        page.bindToState("onReplace", (key, isModifier) => {
          const { clipboardIndicatorModel: { clipboardKeys } } = this.props;
          if (clipboardKeys && clipboardKeys.length > 0) {
            pasteReplace(key);
          } else {
            showQuickAppend(modeMap.replace);
          }
        });
        page.bindToState("isMultipleSelection", () => {
          const { selectionBreadcrumbsModel: { selectedKeys } } = this.props;
          return selectedKeys && selectedKeys.length > 1;
        });

        page.bindToState("isAvailableToPaste", key => {
          const { clipboardIndicatorModel: { clipboardMode } } = this.props;
          return (
            clipboardMode !== CLIPBOARD_CUT || graphApi.isCutPasteAvailable(key)
          );
        });
        page.bindToState("isClipboardEmpty", () => {
          return false;
        });
      };

      const initPage = () => {
        this.contentWindow.__createPageDesk();
        wait(
          () => this.contentWindow.pageReadyState === "initialized",
          pageLoaded
        );
        //pageLoaded();
      };
      wait(() => this.contentWindow.pageReadyState === "ready", initPage);
    };
  }

  componentWillUnmount() {
    this.removeShortcuts();
    this.contentDocument = undefined;
    this.contentWindow = undefined;
    this.page = undefined;
  }

  componentWillReceiveProps(nextProps) {
    const { componentModel } = this.props;
    const { componentModel: newComponentModel } = nextProps;
    if (
      newComponentModel.reloadPageCounter != componentModel.reloadPageCounter
    ) {
      var domNode = ReactDOM.findDOMNode(this);
      domNode.src = "/structor-deskpage" + newComponentModel.currentPagePath;
    } else if (
      newComponentModel.pagePathToChange != null &&
      newComponentModel.pagePathToChange != componentModel.pagePathToChange
    ) {
      if (this.contentWindow) {
        // only when page is already loaded
        // console.log('Switching to path: ' + newComponentModel.pagePathToChange);
        this.contentWindow.__switchToPath(newComponentModel.pagePathToChange);
      }
    }
  }

  componentWillUpdate(nextProps, nextState) {
    this.removeShortcuts();
    this.doUpdatePageModel = false;
    this.doUpdateMarks = false;
    const { componentModel } = this.props;
    const { componentModel: newComponentModel } = nextProps;
    if (
      newComponentModel.modelUpdateCounter !== componentModel.modelUpdateCounter
    ) {
      this.doUpdatePageModel = true;
    } else if (
      newComponentModel.markedUpdateCounter !==
      componentModel.markedUpdateCounter
    ) {
      this.doUpdateMarks = true;
    }
  }

  /**
     * 保存数据更新
     */
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Deskpage的shouldComponentUpdate被调用~~~~",
      nextProps,
      nextState,
      componentModel
    );
    const { componentModel } = this.props;
    const { componentModel: newComponentModel } = nextProps;
    const shouldUpate =
      nextProps.style.width !== this.props.style.width ||
      newComponentModel.isEditModeOn !== componentModel.isEditModeOn ||
      newComponentModel.markedUpdateCounter !==
        componentModel.markedUpdateCounter ||
      newComponentModel.modelUpdateCounter !==
        componentModel.modelUpdateCounter;
    return shouldUpate;
  }
  componentDidUpdate() {
    this.setupShortcuts();
    console.log("更新了啦啦啦啦", this.page, this.doUpdatePageModel, this.props);
    if (this.page) {
      if (this.doUpdatePageModel) {
        const { componentModel } = this.props;
        //console.log('Updating page model: ' + componentModel.currentPagePath);
        this.page.updatePageModel({ pathname: componentModel.currentPagePath });
      }
      if (this.doUpdateMarks) {
        const { componentModel } = this.props;
        //console.log('Updating marked only');
        this.page.updateMarks({ pathname: componentModel.currentPagePath });
      }
    }
  }

  /**
   *组件被点击的时候要获取该组件的所有配置
   */
  handleComponentClick(key, isModifier) {
    console.log("组件被点击,,,,,", key, isModifier);
    const {
      selectionBreadcrumbsModel: { selectedKeys },
      setSelectedKey,
      loadOptionsAndShowModal,
      currentComponent
    } = this.props;
    console.log("处理组件被点击的逻辑---", key, isModifier, this.props);
    setSelectedKey(key, isModifier);
    // if (
    //   selectedKeys &&
    //   selectedKeys.length > 0 &&
    //   includes(selectedKeys, key)
    // ) {
    //   loadOptionsAndShowModal(currentComponent);
    // } else {
    //   setSelectedKey(key, isModifier);
    // }

    // if (
    //   selectedKeys &&
    //   selectedKeys.length > 0 &&
    //   includes(selectedKeys, key)
    // ) {
    //   // 如果选中的这个组件已经被添加过了，那么表示它有数据
    //   loadOptionsAndShowModal(currentComponent);
    // } else {
    //   // 否则要设置被选中的组件
    //   setSelectedKey(key, isModifier);
    // }
  }

  /**
   * 组件的右键要求设置组件的值
   */
  handleRightMenuItemClick(componentKey, key, label) {
    // 显示context menu
    this.props.showContextMenuModal(true, {
      componentKey,
      key,
      label
    });
  }

  /**
   * 
   * @param {*} componentKey 
   * @param {*} key 
   * @param {*} props 
   * 直接设置props而不用弹窗设置
   */
  settingPropsDirectly(componentKey, key, props) {
    this.props.changeOption(
      {
        key: componentKey
      },
      {
        [key]: props
      }
    );
  }
  /**
   * 
   * @param {*} componentKey 
   * @param {*} key 
   * @param {*} props 
   */
  handleRightMenuItemClickArrayObject(componentKey, key, props) {
    this.props.showContextMenuModal(true, {
      componentKey,
      key,
      props
    });
  }

  /**
   * pathname改变
   */
  handlePathnameChanged(pathname) {
    const { changePageRouteFeedback } = this.props;
    changePageRouteFeedback(pathname);
  }

  /**
   * 整个iframe会监听keydown事件
   */
  handleKeyDown(e) {
    let contentEditableElement = document.activeElement.attributes[
      "contenteditable"
    ]
      ? document.activeElement.attributes["contenteditable"].value
      : false;
    let elementNameUpperCase = document.activeElement.tagName.toUpperCase();
    // 处理非INPUT/TEXTAREA/SELECT/contentEditable==false，为这些元素添加按键事件监听
    if (
      elementNameUpperCase !== "INPUT" &&
      elementNameUpperCase !== "TEXTAREA" &&
      elementNameUpperCase !== "SELECT" &&
      !contentEditableElement &&
      !window.getSelection().toString()
    ) {
      if (e.which === 8 || e.which === 46) {
        // Del or Backspace key
        const { deleteSelected } = this.props;
        e.stopPropagation();
        e.preventDefault();
        deleteSelected();
      } else if (e.metaKey || e.ctrlKey) {
        const { selectionBreadcrumbsModel: { selectedKeys } } = this.props;
        const { clipboardIndicatorModel: { clipboardKeys } } = this.props;
        const { setForCuttingKeys, setForCopyingKeys } = this.props;
        const { pasteBefore, pasteAfter, pasteFirst } = this.props;
        const { cloneSelected, popHistory } = this.props;
        switch (e.which) {
          case 68: // D key
            e.stopPropagation();
            e.preventDefault();
            cloneSelected();
            break;
          case 67: // C key
            e.stopPropagation();
            e.preventDefault();
            if (selectedKeys && selectedKeys.length > 0) {
              setForCopyingKeys(selectedKeys);
            }
            break;
          case 65: // A key
            e.stopPropagation();
            e.preventDefault();
            if (
              selectedKeys &&
              selectedKeys.length === 1 &&
              clipboardKeys &&
              clipboardKeys.length > 0
            ) {
              pasteBefore(selectedKeys[0]);
            }
            break;
          case 73: // I key
            e.stopPropagation();
            e.preventDefault();
            if (
              selectedKeys &&
              selectedKeys.length === 1 &&
              clipboardKeys &&
              clipboardKeys.length > 0
            ) {
              pasteFirst(selectedKeys[0]);
            }
            break;
          case 86: // V key
            e.stopPropagation();
            e.preventDefault();
            if (
              selectedKeys &&
              selectedKeys.length === 1 &&
              clipboardKeys &&
              clipboardKeys.length > 0
            ) {
              pasteAfter(selectedKeys[0]);
            }
            break;
          case 88: // X key
            e.stopPropagation();
            e.preventDefault();
            if (selectedKeys && selectedKeys.length > 0) {
              setForCuttingKeys(selectedKeys);
            }
            break;
          case 90: // Z key
            popHistory();
            e.stopPropagation();
            e.preventDefault();
            break;
          default:
            break;
        }
      }
    }
  }

  /**
   * 设置热键
   */
  setupShortcuts() {
    const { componentModel: { isEditModeOn } } = this.props;
    // 是否处于编辑状态
    if (isEditModeOn) {
      if (this.contentWindow) {
        this.contentWindow.addEventListener(
          "keydown",
          this.handleKeyDown,
          false
        );
      }
      window.addEventListener("keydown", this.handleKeyDown, false);
    } else {
      // 移除热键
      this.removeShortcuts();
    }
  }

  /**
   * 移除keydown事件
   */
  removeShortcuts() {
    if (this.contentWindow) {
      this.contentWindow.removeEventListener(
        "keydown",
        this.handleKeyDown,
        false
      );
    }
    window.removeEventListener("keydown", this.handleKeyDown, false);
  }

  render() {
    const localStyle = {
      ...this.props.style
    };
    return <iframe style={localStyle} src="/structor-deskpage" />;
  }
}

export default connect(modelSelector, containerActions)(Container);
