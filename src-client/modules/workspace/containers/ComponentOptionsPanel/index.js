import { set, has, get, forOwn, isObject } from "lodash";
import React, { Component, PropTypes } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { connect } from "react-redux";
import { modelSelector } from "./selectors.js";
import { containerActions } from "./actions.js";
import { styleGroups } from "./constants";

import {
  OptionInput,
  CollapsiblePlusOptionInput,
  StyleSizeInput,
  SelectOptionCnpt,
  StyleNumberInput,
  StyleOptionSelect,
  StyleSwatchesPicker
} from "components";

const style = {
  width: "100%",
  paddingTop: "5px",
  paddingRight: "5px",
  paddingLeft: "5px",
  paddingBottom: "10px",
  border: "1px solid #DBDBDB",
  borderRadius: "3px",
  height: "100%",
  overflowX: "hidden",
  overflowY: "auto"
};

const labelStyle = {
  backgroundColor: "rgb(227, 227, 227)",
  color: "rgb(107, 107, 107)",
  textShadow: "0 1px 0px rgba(255, 255, 255, 0.8)"
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.handleAddNewProp = this.handleAddNewProp.bind(this);
    this.handleChangeOption = this.handleChangeOption.bind(this);
    // handleChangeOption方法
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleSelectTab = this.handleSelectTab.bind(this);
    this.handleToggleStyleSection = this.handleToggleStyleSection.bind(this);
    this.handleAddNewProp = this.handleAddNewProp.bind(this);
    this.handleAddNewOptionProp = this.handleAddNewOptionProp.bind(this);
    this.handleChangeSelectOption = this.handleChangeSelectOption.bind(this);
  }

  /**
   * 添加Select下面的Option选项保存
   */
  handleAddNewOptionProp(options) {
    const { path, value } = options;
    this.handleChangeSelectOption({
      label: path,
      value
    });
  }

  /**
   * 
   * @param {*} options
   * 添加新属性 
   */
  handleAddNewProp(options) {
    if (options.path && /^[a-zA-Z0-9.]+$/.test(options.path)) {
      let valueObject = {};
      if (/^[0-9.]+$/.test(options.value)) {
        set(valueObject, options.path, parseFloat(options.value));
      } else if (options.value === "true") {
        set(valueObject, options.path, true);
      } else if (options.value === "false") {
        set(valueObject, options.path, false);
      } else {
        set(valueObject, options.path, "" + options.value);
      }
      this.handleChangeOption(valueObject);
    }
  }

  /**
   * 
   * @param {*} optionObject 
   * 比如设置新的属性值
   */
  handleChangeOption(optionObject) {
    console.log("handleChangeOption传入的参数为===", optionObject);
    const { currentComponent, changeOption } = this.props;
    changeOption(currentComponent, optionObject);
  }

  /**
   * 
   * 调用changeOption方法
   */
  handleChangeSelectOption(optionObject) {
    console.log("handleChangeSelectOption传入的参数为===", optionObject);
    const { currentComponent, changeOption, addChildren } = this.props;
    addChildren(currentComponent, optionObject);
  }

  handleDeleteOption(path) {
    const { currentComponent, deleteOption } = this.props;
    deleteOption(currentComponent, path);
  }

  handleToggleOption = valueObject => (path, checked) => {
    const { currentComponent, deleteOption, changeOption } = this.props;
    if (!checked) {
      deleteOption(currentComponent, path);
    } else {
      changeOption(currentComponent, valueObject);
    }
  };

  handleSelectTab(eventKey) {
    if (eventKey) {
      this.props.setActiveTab(eventKey);
    }
  }

  handleToggleStyleSection(e) {
    e.stopPropagation();
    e.preventDefault();
    const key = e.currentTarget.dataset.groupkey;
    this.props.toggleStyleSection(key);
  }

  render() {
    const {
      currentComponent,
      componentModel: { activeTab, expandedStyleSections }
    } = this.props;
    let panelContent = null;
    // 用户选择了一个组件了
    if (currentComponent) {
      const { key, props } = currentComponent;
      console.log("currentComponent====", currentComponent);
      let styleSections = [];
      let collapsed;
      //   所有自定义的style
      styleGroups.forEach((group, index) => {
        const { styleGroupKey, title, styles } = group;
        // 设置style配置项
        if (expandedStyleSections[styleGroupKey] === true) {
          collapsed = "in";
        } else {
          collapsed = "";
        }
        // expandedStyleSections[styleGroupKey]表示是否已经选择过了
        let styleOptionInputs = [];
        let valueObject;
        let setCount = 0;
        if (styles && styles.length > 0) {
          styles.forEach((style, index) => {
            let value = get(props, style.path);
            // 	{path: 'style.top', type: 'size', value: '0px'},
            let isSet = false;
            if (value === undefined) {
              valueObject = set({}, style.path, style.value);
            } else {
              valueObject = set({}, style.path, value);
              isSet = true;
              setCount++;
            }
            // 是否设置了
            if (style.type === "number") {
              styleOptionInputs.push(
                <div
                  key={style.path + styleGroupKey}
                  className="list-group-item"
                >
                  <StyleNumberInput
                    valueObject={valueObject}
                    path={style.path}
                    isSet={isSet}
                    onSet={this.handleToggleOption(valueObject)}
                    onChangeValue={this.handleChangeOption}
                  />
                </div>
              );
            } else if (style.type === "size") {
              // 如果是Size
              styleOptionInputs.push(
                <div
                  key={style.path + styleGroupKey}
                  className="list-group-item"
                >
                  <StyleSizeInput
                    valueObject={valueObject}
                    path={style.path}
                    isSet={isSet}
                    onSet={this.handleToggleOption(valueObject)}
                    onChangeValue={this.handleChangeOption}
                  />
                </div>
              );
            } else if (style.type === "select") {
              // 如果是select,那么选择是Select类型
              styleOptionInputs.push(
                <div
                  key={style.path + styleGroupKey}
                  className="list-group-item"
                >
                  <StyleOptionSelect
                    valueObject={valueObject}
                    path={style.path}
                    valueList={style.options}
                    //style.options就是自动添加的配置
                    isSet={isSet}
                    onSet={this.handleToggleOption(valueObject)}
                    //
                    onChangeValue={this.handleChangeOption}
                    //value的值改变
                  />
                </div>
              );
            } else if (style.type === "color") {
              // 如果是color
              styleOptionInputs.push(
                <div
                  key={style.path + styleGroupKey}
                  className="list-group-item"
                >
                  <StyleSwatchesPicker
                    valueObject={valueObject}
                    path={style.path}
                    isSet={isSet}
                    onSet={this.handleToggleOption(valueObject)}
                    onChangeValue={this.handleChangeOption}
                  />
                </div>
              );
            }
          });
          styleSections.push(
            <div key={styleGroupKey} className="panel panel-default">
              <div
                className="panel-heading"
                role="tab"
                id={"heading" + styleGroupKey}
              >
                <p style={{ margin: 0 }}>
                  <a
                    style={{ outline: "0" }}
                    role="button"
                    data-groupkey={styleGroupKey}
                    href={"#" + styleGroupKey}
                    onClick={this.handleToggleStyleSection}
                  >
                    {title}
                  </a>
                  {setCount > 0 && (
                    <span className="label pull-right" style={labelStyle}>
                      {setCount}
                    </span>
                  )}
                </p>
              </div>
              <div
                id={styleGroupKey}
                className={"panel-collapse collapse " + collapsed}
                role="tabpanel"
              >
                <div className="list-group">{styleOptionInputs}</div>
                <div style={{ height: "0" }} />
              </div>
            </div>
          );
        }
      });

      let optionInputs = [];

      forOwn(props, (value, prop) => {
        if (isObject(value)) {
          forOwn(value, (subValue, subProp) => {
            if (!isObject(subValue)) {
              let valueObject = {};
              let pathTo = prop + "." + subProp;
              set(valueObject, pathTo, subValue);
              optionInputs.push(
                <OptionInput
                  key={pathTo + key}
                  style={{ marginTop: "0.5em" }}
                  valueObject={valueObject}
                  path={pathTo}
                  onDeleteValue={this.handleDeleteOption}
                  onChangeValue={this.handleChangeOption}
                />
              );
            }
          });
        } else {
          let valueObject = {};
          let pathTo = prop;
          set(valueObject, pathTo, value);
          optionInputs.push(
            <OptionInput
              key={pathTo + key}
              style={{ marginTop: "0.5em" }}
              valueObject={valueObject}
              path={pathTo}
              onDeleteValue={this.handleDeleteOption}
              onChangeValue={this.handleChangeOption}
            />
          );
        }
      });

      let tabPanes = [];
      tabPanes.push(
        <Tab
          key="quickProperties"
          eventKey={tabPanes.length + 1}
          title="快速设置样式"
        >
          <div style={{ width: "100%", marginTop: "1em" }}>
            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              {styleSections}
            </div>
          </div>
        </Tab>
      );
      //   配置Properties
      tabPanes.push(
        <Tab key="properties" eventKey={tabPanes.length + 1} title="Properties">
          <div style={{ position: "relative", marginTop: "1em" }}>
            <CollapsiblePlusOptionInput
              style={{
                width: "100%",
                zIndex: "1030",
                marginBottom: "0.5em",
                border: "3px solid blue"
              }}
              onCommit={this.handleAddNewProp}
            />
          </div>
          {optionInputs}
        </Tab>
      );
      //   添加可选项的信息
      tabPanes.push(
        <Tab key="selectable" eventKey={tabPanes.length + 1} title="可选项">
          <div style={{ position: "relative", marginTop: "1em" }}>
            <SelectOptionCnpt
              style={{
                width: "100%",
                zIndex: "1030",
                marginBottom: "0.5em",
                border: "3px solid blue"
              }}
              onCommit={this.handleAddNewOptionProp}
            />
          </div>
          {optionInputs}
        </Tab>
      );
      //   这里就是右侧的配置项信息
      panelContent = (
        <div style={style}>
          <Tabs
            id="componentOptionsTabs"
            onSelect={this.handleSelectTab}
            activeKey={activeTab}
          >
            {tabPanes}
          </Tabs>
        </div>
      );
    } else {
      let localStyle = {
        ...style,
        border: "4px solid red"
      };
      panelContent = (
        <div style={localStyle}>
          <h4 className="text-center">Properties are not available</h4>
        </div>
      );
    }
    return panelContent;
  }
}

export default connect(modelSelector, containerActions)(Container);
