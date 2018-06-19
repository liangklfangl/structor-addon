import { modelSelector } from "./selectors.js";
import { containerActions } from "./actions.js";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Table from "./Table";

class ContextMenuModel extends React.Component {
  state = { value: "" };
  localeProps = {};
  /**
   * 得到props内容
   */
  getProps = props => {
    this.localeProps = props;
    console.log("上层组件得到的值为==", props);
  };
  /**
   * 保存将数据,根据文本框的值进行输入
   * 字段有fieldName,fieldDesc两个字段
   */
  handleOk = e => {
    const { addOn = {}, showContextMenu = false } = this.props.contextMenuModal;
    const { label, key, componentKey, props } = addOn;
    console.log("弹窗设置的值为====", key, {
      key: this.state.value,
      desc: this.state.desc
    });
    this.props.changeOption &&
      this.props.changeOption(
        { key: componentKey },
        {
          [key]: props
            ? this.localeProps
            : {
                fieldName: this.state.value,
                fieldDesc: this.state.desc
              }
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
   * 描述改变
   */
  descChange = e => {
    this.setState({
      desc: e.target.value
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
    const { addOn = {}, showContextMenu = false } = this.props.contextMenuModal;
    const { label, key, componentKey, props } = addOn;
    console.log("附加的props的值为: ", props);
    // 有props表示是复杂类型，没有props表示是简单类型
    return (
      <div>
        {!props ? (
          <Modal show={showContextMenu}>
            <Modal.Header>
              <Modal.Title>设置组件数据</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <span>
                  请输入<span style={{ color: "pink" }}>{label}</span>的值:
                </span>
                <input value={this.state.value} onChange={this.valueChange} />
              </div>
              <div>
                <span>请输入字段描述:</span>
                <input value={this.state.desc} onChange={this.descChange} />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleCancel}>取消</Button>
              <Button bsStyle="primary" onClick={this.handleOk}>
                保存设置
              </Button>
            </Modal.Footer>
          </Modal>
        ) : (
          <Modal show={showContextMenu}>
            <Modal.Header>
              <Modal.Title>设置组件复杂数据</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table getProps={this.getProps} supportProps={{ props: props }} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleCancel}>取消</Button>
              <Button bsStyle="primary" onClick={this.handleOk}>
                保存设置
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  }
}
export default connect(modelSelector, containerActions)(ContextMenuModel);
