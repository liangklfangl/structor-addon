import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { modelSelector } from "./selectors.js";
import { containerActions } from "./actions.js";
import { InputComponentAutocomplete } from "components";

import { Modal, Button } from "react-bootstrap";

class Container extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      errors: []
    };
  }

  handleClose(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({
      errors: []
    });
    this.props.hideModal();
  }

  handleSubmit() {
    const {
      submit,
      componentModel: { appendMode },
      componentNames
    } = this.props;
    // 得到appendMode+submit回调函数+componentNames集合
    const tuple = this.input.getText();
    // 输入的组件名称
    if (tuple) {
      const parts = tuple.split(".");
      if (parts && parts.length > 0) {
        let errors = [];
        // 判断用户输入的组件有没有查到
        parts.forEach(part => {
          if (componentNames.findIndex(i => i === part) < 0) {
            errors.push(`"${part}" component was not found`);
          }
        });
        //错误消息是否存在
        if (errors.length > 0) {
          this.setState({
            errors: errors
          });
        } else {
          // 提交信息，组件名称+模式
          submit(tuple, appendMode);
        }
      } else {
        this.setState({
          errors: ["Empty value is now allowed"]
        });
      }
    } else {
      this.setState({
        errors: ["Empty value is now allowed"]
      });
    }
  }

  render() {
    const {
      componentModel: { show, appendMode },
      componentNames,
      hideModal
    } = this.props;
    const { errors } = this.state;
    return (
      <Modal
        show={show}
        onHide={hideModal}
        dialogClassName="umy-modal-overlay umy-modal-middlesize"
        backdrop={true}
        keyboard={false}
        bsSize="large"
        ref="dialog"
        animation={true}
      >
        <Modal.Header
          closeButton={false}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Title id="contained-modal-title">
            {appendMode.label}
          </Modal.Title>
        </Modal.Header>
        {/* 弹窗的错误消息 */}
        <Modal.Body>
          {errors &&
            errors.length > 0 && (
              <div style={{ padding: "0px 1em" }}>
                {errors.map((e, index) => {
                  return (
                    <p
                      key={"error_" + index}
                      style={{ margin: 0 }}
                      className="text-danger"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            )}
          {/* 这里是输入弹窗 */}
          <InputComponentAutocomplete
            ref={me => (this.input = me)}
            componentNames={componentNames}
            //默认的可选组件
            onSubmit={this.handleSubmit}
            //保存的时候调用
            onCancel={this.handleClose}
            //取消时候调用
          />
        </Modal.Body>
        {/* 弹窗的footer */}
        <Modal.Footer>
          <Button onClick={this.handleClose}>Cancel</Button>
          <Button onClick={this.handleSubmit} bsStyle="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(modelSelector, containerActions)(Container);
