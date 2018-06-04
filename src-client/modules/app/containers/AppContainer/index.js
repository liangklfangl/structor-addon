import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { modelSelector } from "./selectors.js";
import { containerActions } from "./actions.js";

import {
  Desk,
  PageOptionsModal,
  ComponentOptionsModal,
  ContextMenuModel,
  QuickAppendModal,
  SaveDefaultModelModal
} from "modules/workspace";
import { Generator } from "modules/generator";
import { Installer, SelectDirectoryModal } from "modules/installer";
import { Extractor } from "modules/extractor";
import ProxySetupModal from "modules/app/containers/ProxySetupModal";
import ConfirmationModal from "modules/app/containers/ConfirmationModal";
import InformationModal from "modules/app/containers/InformationModal";

class Container extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProjectStatus();
  }

  render() {
    const { componentModel: { packageConfig, workspaceMode } } = this.props;

    let content = null;
    if (workspaceMode === "desk") {
      content = (
        <div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
          <div
            ref="appBody"
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px"
            }}
          >
            <Desk />
            <PageOptionsModal />
            <ComponentOptionsModal />
            <ContextMenuModel />
            {/* Context menu内容 */}
            <ProxySetupModal />
            <QuickAppendModal />
            <SaveDefaultModelModal />
            <ConfirmationModal />
            <InformationModal />
          </div>
        </div>
      );
    } else if (workspaceMode === "generator") {
      content = (
        <div style={{ width: "100%", height: "100%" }}>
          <Generator />
          <ConfirmationModal />
          <InformationModal />
        </div>
      );
    } else if (workspaceMode === "installer") {
      content = (
        <div style={{ width: "100%", height: "100%" }}>
          <Installer />
          <ConfirmationModal />
          <InformationModal />
          <SelectDirectoryModal />
        </div>
      );
    } else if (workspaceMode === "extractor") {
      content = (
        <div style={{ width: "100%", height: "100%" }}>
          <Extractor />
          <ConfirmationModal />
          <InformationModal />
        </div>
      );
    } else {
      content = (
        <div
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%"
            }}
          >
            <div style={{ display: "block" }}>
              <div className="umy-logo" />
            </div>
          </div>
        </div>
      );
    }

    return content;
  }
}

export default connect(modelSelector, containerActions)(Container);
