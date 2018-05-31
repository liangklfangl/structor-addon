import _ from "lodash";
import React, { Component, PropTypes } from "react";
import { Collapse, Panel } from "react-bootstrap";
import { getStylePropList } from "api/utils/styleProps.js";

/**
 * 用于Select类似的添加Option等配置
 */
class SelectOptionCnpt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.styleProps = getStylePropList();
    this.handleToggle = this.handleToggle.bind(this);
    this.handleCommit = this.handleCommit.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  /**
   * 设置是否可见
   */
  handleToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.onToggle) {
      this.props.onToggle();
    }
    this.setState({ open: !this.state.open });
  }

  /**
   * 将选项值保存起来，调用submit方法
   */
  handleCommit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.handleToggle(e);
    // 设置为组件的值+属性
    if (this.props.onCommit) {
      this.props.onCommit({
        path: this.refs.inputPath.value,
        value: this.refs.inputValue.value
      });
    }
  }

  /**
   * 如果按了Enter按键，我需要把输入面板关闭
   */
  handleOnKeyDown(e) {
    if (e.keyCode == 27) {
      this.handleToggle(e);
    }
  }

  render() {
    let styleOptions = [];
    this.styleProps.forEach(style => {
      styleOptions.push(<option key={style}>{style}</option>);
    });
    return (
      <div style={this.props.style}>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <button
            role="button"
            style={{ margin: "0 1em" }}
            className="btn btn-default btn-xs"
            onClick={this.handleToggle}
          >
            <span className="fa fa-plus" />
            <span>添加可选项(Select/Option)</span>
          </button>
        </div>
        <Collapse
          in={this.state.open}
          onEntered={() => {
            this.refs.inputPath.focus();
          }}
        >
          <div style={{ position: "relative" }}>
            {/* 提交选项值保存 */}
            <form onSubmit={this.handleCommit}>
              <Panel>
                <label>显示值</label>
                <input
                  ref="inputPath"
                  placeholder="显示值..."
                  type="text"
                  autoComplete="on"
                  list="styleOptions"
                  className="form-control"
                  onKeyDown={this.handleOnKeyDown}
                />
                {/* 选项名 */}
                <label style={{ marginTop: "5px" }}>选项值</label>
                <input
                  ref="inputValue"
                  type="text"
                  className="form-control"
                  onKeyDown={this.handleOnKeyDown}
                />
                {/* 选项值 */}
                <button
                  role="button"
                  type="submit"
                  className="btn btn-default btn-xs btn-block"
                  style={{ marginTop: "10px" }}
                >
                  <span>添加</span>
                </button>
              </Panel>
              <datalist id="styleOptions">{styleOptions}</datalist>
            </form>
          </div>
        </Collapse>
      </div>
    );
  }
}

SelectOptionCnpt.defaultProps = {
  onToggle: null
};

export default SelectOptionCnpt;
