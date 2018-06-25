import { modelSelector } from "./selectors.js";
import { containerActions, showPageFieldsDispatch } from "./actions.js";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Table from "./Table";

class ContextMenuModel extends React.Component {
  state = { value: "", mockFields: [] };
  localeProps = {};
  /**
   * 得到props内容
   */
  receiveNew = props => {
    this.localeProps = props;
    console.log("上层组件得到的值为==", props);
  };

  getStyle = () => {
    return `.filter--condition__box {
        padding: 20px;
        position: relative;
      }
      .filter--condition__box .arrow {
        display: inline-block;
        position: absolute;
        top: 200px;
        margin-left: 15px;
      }
      .filter--condition__box .notice {
        text-align: center;
        margin-bottom: 23px;
      }
      .filter--condition__box .left--box {
        width: 50%;
        padding: 20px;
        border: 1px dashed #ECECEC;
        display: inline-block;
      }
      .filter--condition__box .right--box {
        position: absolute;
        height: 455px;
        width: 45%;
        padding: 20px;
        display: inline-block;
        border: 1px dashed #ECECEC;
        margin-left: 5%;
      }
      .filter--condition__box .effect__on--select {
        width: 400px;
        margin-top: 10px;
      }
      .filter--condition__box .filter-text {
        display: inline-block;
        width: 20%;
        font-weight: bold;
      }
      .filter--condition__box .filter-transfer {
        display: inline-block;
        width: 80%;
      }
      .filter--condition__box .event-type-select {
        width: 300px;
        margin-top: 20px;
      }
      .filter--condition__box .url--filter-box {
        margin-top: 10px;
      }
      `;
  };
  /**
   * 修改行为组件+数据组件的events+eventsSettings配置
   */
  handleOk = e => {
    const {
      addOn = {},
      showContextMenu = false
    } = this.props.actionDispatchModal;
    const { pageName, behaviorKey, dataKey } = addOn;
    const { behavior, data } = this.localeProps;

    const fields =
      this.props.actionDispatchModal && this.props.actionDispatchModal.fields;
    // 对象集合
    const stateQueryParams = this.localeProps.behavior.targetKeys;
    const queryFields = fields.filter((el, idx) => {
      return this.localeProps.behavior.targetKeys.indexOf(el.fieldName) != -1;
    });

    // 设置行为组件+数据组件的props
    const event = `${pageName}` + "_" + behaviorKey;
    const localePropsCpy = JSON.parse(JSON.stringify(this.localeProps));
    localePropsCpy.behavior.targetKeys = queryFields;
    console.log("弹窗设置的值为====", localePropsCpy);
    this.props.changeOptions(
      {
        key1: dataKey,
        key2: behaviorKey
      },
      [
        {
          events: [event],
          eventsSettings: localePropsCpy["data"]
        },
        {
          events: [event],
          eventsSettings: localePropsCpy["behavior"]
        }
      ]
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
    this.props.mutationActionState({ actionDispatchShow: false });
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
    const {
      addOn = {},
      showContextMenu = false
    } = this.props.actionDispatchModal;
    const { label, key, componentKey } = addOn || {};
    this.hideContextModel();
  };

  /**
   * 产生搜索字段
   */
  generateSearchKeys = fields => {
    const els = [];
    for (let t = 0, len = fields.length; t < len; t++) {
      const { fieldName, fieldDesc } = fields[t];
      els.push({
        description: fieldDesc,
        key: fieldName
      });
    }
    console.log("generateSearchKeys的值为===", els, fields);
    return els;
  };

  render() {
    const { actionDispatchModal } = this.props;
    const { addOn } = actionDispatchModal;
    const { behaviorKey, dataKey, pageName } = addOn;
    const { actionDispatchShow, fields = [] } = actionDispatchModal;
    console.log("组件传入定位", behaviorKey, dataKey, this.props);
    return (
      <div className="action__dispatch--modal">
        <style dangerouslySetInnerHTML={{ __html: this.getStyle() }} />
        <Modal
          show={actionDispatchShow}
          key={actionDispatchShow}
          bsSize="large"
        >
          <Modal.Header>
            <Modal.Title>设置组件数据</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table
              mockData={this.generateSearchKeys(fields)}
              targetKeys={[]}
              dataKey={dataKey}
              behaviorKey={behaviorKey}
              receiveNew={this.receiveNew}
            />
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
