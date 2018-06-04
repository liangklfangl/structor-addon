import { modelSelector } from "./selectors.js";
import { containerActions } from "./actions.js";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

class ContextMenuModel extends React.Component {
  state = { value: "" };

  /**
   * 保存将数据,根据文本框的值进行输入
   */
  handleOk = e => {
    const { addOn = {}, showContextMenu = false } = this.props.contextMenuModal;
    const { label, key, componentKey } = addOn;
    console.log("弹窗设置的值为====", key, this.state.value);
    this.props.changeOption &&
      this.props.changeOption(
        { key: componentKey },
        {
          [key]: this.state.value
        }
      );
    setTimeout(() => {
      this.hideContextModel();
      this.setState({
        value: ""
      });
    }, 0);
  };
  /**
   * 隐藏context的弹窗
   */
  hideContextModel = () => {
    const { addOn = {}, showContextMenu = false } = this.props.contextMenuModal;
    this.props.showContextMenuModal &&
      this.props.showContextMenuModal(false, {
        ...addOn
      });
    setTimeout(() => {
      this.setState({
        value: ""
      });
    }, 0);
  };
  /**
   * 输入的值变化
   */
  valueChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  /**
   * 取消保存
   */
  handleCancel = e => {
    const { addOn = {}, showContextMenu = false } = this.props.contextMenuModal;
    const { label, key, componentKey } = addOn;
    this.hideContextModel();
  };
  render() {
    console.log("contextMenu中的组件设置为的wei ", this.props);
    const { addOn = {}, showContextMenu = false } = this.props.contextMenuModal;
    const { label, key, componentKey } = addOn;
    return (
      <div>
        <Modal show={showContextMenu}>
          <Modal.Header>
            <Modal.Title>设置组件数据</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>
              请输入<span style={{ color: "pink" }}>{label}</span>的值:
            </span>
            <input value={this.state.value} onChange={this.valueChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCancel}>取消</Button>
            <Button bsStyle="primary" onClick={this.handleOk}>
              保存设置
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default connect(modelSelector, containerActions)(ContextMenuModel);
