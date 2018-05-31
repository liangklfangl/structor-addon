import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { modelSelector } from "./selectors.js";
import { containerActions } from "./actions.js";
import { modeMap } from "modules/workspace/containers/QuickAppendModal/actions";

class Container extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  /**
   * 
   * @param {*} e
   * 点击了Before/First/Last/After按钮 
   * 
    modeMap = {
        addBefore: { type: "addBefore", label: "Add before selected component" },
        addAfter: { type: "addAfter", label: "Add after selected component" },
        insertFirst: {
            type: "insertAfter",
            label: "Insert as first child in selected component"
        },
        insertLast: {
            type: "insertLast",
            label: "Insert as last child in selected component"
        },
        replace: { type: "replace", label: "Replace selected component" }
    };
   */
  handleButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const { clipboardIndicatorModel: { clipboardKeys } } = this.props;
    // 剪切板的keys
    const { showQuickAppend } = this.props;
    const funcSignature = e.currentTarget.dataset.func;
    //通过data-func="pasteFirst"方式绑定到DOM上
    console.log("clipboardKeys.length===", clipboardKeys.length);
    if (clipboardKeys.length <= 0) {
      switch (funcSignature) {
        case "pasteBefore":
          showQuickAppend(modeMap.addBefore);
          break;
        case "pasteAfter":
          showQuickAppend(modeMap.addAfter);
          break;
        case "pasteFirst":
          showQuickAppend(modeMap.insertFirst);
          break;
        case "pasteLast":
          showQuickAppend(modeMap.insertLast);
          break;
        case "pasteReplace":
          showQuickAppend(modeMap.replace);
          break;
        default:
          break;
      }
    } else {
      // 如果剪切板上有元素，那么直接调用相应的dataset.func的函数
      const func = this.props[e.currentTarget.dataset.func];
      if (func) {
        func();
      }
    }
  }

  render() {
    const { selectionBreadcrumbsModel: { selectedKeys } } = this.props;

    const wideButtonLabelStyle = {
      margin: "0 0.5em",
      fontSize: "11px"
    };

    let controlGroup = (
      <div className="btn-group" role="group">
        {/* Before在之前添加.. */}
        <button
          className="btn btn-default btn-xs"
          data-func="pasteBefore"
          disabled={!selectedKeys || selectedKeys.length <= 0}
          onClick={this.handleButtonClick}
          title="Append components before selected component"
        >
          <span style={wideButtonLabelStyle}>
            <i className="umy-icon-arrow-plus-down" />
            <span style={{ marginLeft: "0.3em" }}>在选中元素前面插入</span>
          </span>
        </button>
        {/*First添加按钮 */}
        <button
          className="btn btn-default btn-xs"
          data-func="pasteFirst"
          disabled={!selectedKeys || selectedKeys.length <= 0}
          onClick={this.handleButtonClick}
          title="Insert components into selected component as the first child"
        >
          <span style={wideButtonLabelStyle}>
            <i className="umy-icon-arrow-plus-up" />
            <span style={{ marginLeft: "0.3em" }}>插入第一个子级元素</span>
          </span>
        </button>

        <button
          className="btn btn-default btn-xs"
          disabled={!selectedKeys || selectedKeys.length <= 0}
          data-func="pasteReplace"
          onClick={this.handleButtonClick}
          title="Replace selected component"
        >
          <span style={wideButtonLabelStyle}>
            <i className="umy-icon-replace" />
          </span>
        </button>
        {/*Last添加按钮 */}
        <button
          className="btn btn-default btn-xs"
          data-func="pasteLast"
          disabled={!selectedKeys || selectedKeys.length <= 0}
          onClick={this.handleButtonClick}
          title="Insert components into selected component as the last child"
        >
          <span style={wideButtonLabelStyle}>
            <i className="umy-icon-arrow-plus-down" />
            <span style={{ marginLeft: "0.3em" }}>Append子元素</span>
          </span>
        </button>
        {/*After添加按钮 */}
        <button
          className="btn btn-default btn-xs"
          data-func="pasteAfter"
          disabled={!selectedKeys || selectedKeys.length <= 0}
          onClick={this.handleButtonClick}
          title="Append components after selected component"
        >
          <span style={wideButtonLabelStyle}>
            <i className="umy-icon-arrow-plus-up" />
            <span style={{ marginLeft: "0.3em" }}>选中元素后面插入</span>
          </span>
        </button>
      </div>
    );
    return <div style={this.props.style}>{controlGroup}</div>;
  }
}

export default connect(modelSelector, containerActions)(Container);
