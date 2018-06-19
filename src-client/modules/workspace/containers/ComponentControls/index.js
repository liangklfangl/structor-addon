import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { modelSelector } from "./selectors.js";
import { containerActions } from "./actions.js";

const buttonLabelStyle = {
  margin: "0 0.5em"
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.onGenerate = this.onGenerate.bind(this);
    this.onSaveDefaultModel = this.onSaveDefaultModel.bind(this);
  }

  /**
   * 
   * @param {*} e
   * 编辑组件数据，弹出弹窗+修改props 
   */
  onEdit(e) {
    e.stopPropagation();
    e.preventDefault();
    const { currentComponent, loadOptionsAndShowModal } = this.props;
    console.log("编辑时候currentComponent=====", currentComponent);
    loadOptionsAndShowModal(currentComponent);
  }

  /**
   * 
   * @param {*} e 
   * loadGenerators用于展示应用提供的Generator用于选择
   */
  onGenerate(e) {
    e.stopPropagation();
    e.preventDefault();
    const { loadGenerators } = this.props;
    loadGenerators();
  }
  /**
   * 
   * @param {*} e
   * 保存数据 
   */
  onSaveDefaultModel(e) {
    e.stopPropagation();
    e.preventDefault();
    const { showSaveDefaultModelModal } = this.props;
    showSaveDefaultModelModal();
  }

  render() {
    const { currentComponent } = this.props;
    return (
      <div style={this.props.style} className="btn-group" role="group">
        {/* 编辑按钮 */}
        <button
          className="btn btn-default btn-xs"
          disabled={!currentComponent}
          onClick={this.onEdit}
          title="Show selected component options"
        >
          <span style={buttonLabelStyle}>
            <i className="fa fa-wrench" />
            <span style={{ marginLeft: "0.5em" }}>编辑</span>
          </span>
        </button>
        {/* 产生组件,抽取组件 */}
        <button
          className="btn btn-default btn-xs"
          disabled={!currentComponent}
          onClick={this.onGenerate}
          title="Generate the source code for a new component"
        >
          <span style={buttonLabelStyle}>
            <i className="fa fa-magic" />
            <span style={{ marginLeft: "0.5em" }}>Generate Component</span>
          </span>
        </button>
        {/* 保存Model数据 */}
        <button
          className="btn btn-default btn-xs"
          disabled={!currentComponent}
          onClick={this.onSaveDefaultModel}
          title="Save current component model as a variant"
        >
          <span style={buttonLabelStyle}>
            <i className="fa fa-bookmark-o" />
            <span style={{ marginLeft: "0.5em" }}>Save Model</span>
          </span>
        </button>
      </div>
    );
  }
}

export default connect(modelSelector, containerActions)(Container);
