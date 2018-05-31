import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import marked from "marked";
import { modelSelector } from "./selectors.js";
import { containerActions } from "./actions.js";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import { AceEditor } from "components";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 1
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSelectTab = this.handleSelectTab.bind(this);
    this.handleTextAreaKeyDown = this.handleTextAreaKeyDown.bind(this);
  }

  /**
   * 设置当前的tab的激活态
   */
  handleSelectTab(eventKey) {
    if (eventKey) {
      this.setState({
        activeTabKey: eventKey
      });
    }
  }

  handleClose(e) {
    e.stopPropagation();
    e.preventDefault();
    const { hideModal } = this.props;
    hideModal();
    this.setState({
      activeTabKey: 1
    });
  }

  /**
   * 
   *保存组件的配置数据,save Changes配置
   */
  handleSave(e) {
    e.stopPropagation();
    e.preventDefault();
    const { submitChanges } = this.props;
    const { sourceCodeEditor, sourcePropsEditor, sourceTextInput } = this.refs;
    const sourceCode = sourceCodeEditor
      ? sourceCodeEditor.getSourceCode()
      : undefined;
    // 源代码
    const sourceProps = sourcePropsEditor
      ? sourcePropsEditor.getSourceCode()
      : "{}";
    //   组件的配置信息
    const sourceText = sourceTextInput ? sourceTextInput.value : undefined;
    submitChanges({ sourceCode, sourceProps, sourceText });
    console.log("保存的sourceProps===" + JSON.stringify(sourceProps));
    // 保存数据
    this.setState({
      activeTabKey: 1
    });
  }

  /**
   * ENTERA按键直接保存
   */
  handleTextAreaKeyDown(e) {
    if (e.which === 13) {
      this.handleSave(e);
    }
  }

  render() {
    const {
      componentModel: {
        sourceCode,
        sourceFilePath,
        sourceProps,
        sourceText,
        readmeText,
        show
      },
      hideModal
    } = this.props;

    const containerStyle = {
      marginTop: "1em",
      width: "100%",
      padding: "1em"
    };
    var tabPanes = [];

    if (sourceText !== undefined) {
      tabPanes.push(
        <Tab key={"text"} eventKey={tabPanes.length + 1} title="Text">
          <div style={containerStyle}>
            <textarea
              placeholder="Enter text"
              defaultValue={sourceText ? sourceText : ""}
              ref="sourceTextInput"
              style={{
                width: "100%",
                height: "400px",
                margin: "0px",
                border: "2px solid red"
              }}
              onKeyDown={this.handleTextAreaKeyDown}
            />
          </div>
        </Tab>
      );
    }
    tabPanes.push(
      <Tab key={"properties"} eventKey={tabPanes.length + 1} title="添加props属性">
        <div style={containerStyle}>
          <AceEditor
            ref="sourcePropsEditor"
            sourceName="componentPropsScript"
            style={{ width: "100%", height: "400px" }}
            sourceCode={sourceProps}
          />
        </div>
      </Tab>
    );
    if (!!sourceCode) {
      tabPanes.push(
        <Tab key={"component"} eventKey={tabPanes.length + 1} title="源代码">
          <div style={containerStyle}>
            <p>
              <strong>File:&nbsp;</strong>
              <span>{sourceFilePath}</span>
            </p>
            <AceEditor
              ref="sourceCodeEditor"
              sourceName="componentSource"
              mode="ace/mode/jsx"
              style={{ width: "100%", height: "400px" }}
              sourceCode={sourceCode}
            />
          </div>
        </Tab>
      );
    }
    if (!!readmeText) {
      tabPanes.push(
        <Tab key={"readMe"} eventKey={tabPanes.length + 1} title="组件说明">
          <div
            style={{
              height: "400px",
              marginTop: "1em",
              width: "100%",
              padding: "1em",
              overflow: "auto"
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: marked(readmeText) }} />
          </div>
        </Tab>
      );
    }

    return (
      <Modal
        show={show}
        onHide={() => {
          hideModal();
        }}
        dialogClassName="umy-modal-overlay"
        backdrop={true}
        keyboard={true}
        bsSize="large"
        ref="dialog"
        animation={true}
      >
        {/* 弹窗的body */}
        <Modal.Body>
          <Tabs
            id="componentOptionsModal"
            onSelect={this.handleSelectTab}
            activeKey={this.state.activeTabKey}
          >
            {tabPanes}
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Cancel</Button>
          <Button onClick={this.handleSave} bsStyle="primary">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// export const containerActions = (dispatch) => bindActionCreators({
//     hideModal, submitChanges
// }, dispatch);
// connect获取到了属性
export default connect(modelSelector, containerActions)(Container);
