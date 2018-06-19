import { Transfer, Select, Input } from "antd";
import Arrow from "react-arrow";
import React from "react";
const Option = Select.Option;
const EVENT_TYPES = [
  {
    des: "查询",
    type: "QUERY"
  },
  {
    des: "删除",
    type: "DELETE"
  },
  {
    des: "编辑",
    type: "EDIT"
  },
  {
    des: "添加",
    type: "ADD"
  }
];
/**
 * 展示左右选择的框
 */
export default class App extends React.Component {
  state = {
    targetKeys: this.props.targetKeys,
    selectedKeys: [],
    eventType: EVENT_TYPES[0].type,
    modals: []
  };

  /**
   * 事件类型
   */
  eventTypeChange = value => {
    this.setState({
      eventType: value
    });
  };

  getStyle = () => {
    return `
    .anticon-left:before {
      content: "\E620";
  }
  .anticon:before {
      display: block;
      font-family: "anticon" !important;
  }
    .anticon-right:before {
      content: "\E61F";
  }
  .anticon:before {
      display: block;
      font-family: "anticon" !important;
  }
    .modal-content{
      width:1024px;
    }
    .filter--condition__box {
      padding: 20px;
      position: relative;
    }
    .filter--condition__box .arrow {
      display: inline-block;
      position: absolute;
      top: 200px;
      margin-left: 6px;
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
      width: 90%;
      position: relative;
    }
    .filter--condition__box .event-type-select {
      width: 300px;
      margin-top: 20px;
    }
    .filter--condition__box .url--filter-box {
      margin-top: 10px;
    }
    
    .ant-transfer {
      position: relative;
      line-height: 1.5;
    }
    .ant-transfer-list {
      font-size: 12px;
      border: 1px solid #d9d9d9;
      display: inline-block;
      border-radius: 4px;
      vertical-align: middle;
      position: relative;
      width: 180px;
      height: 200px;
      padding-top: 33px;
    }
    .ant-transfer-list-with-footer {
      padding-bottom: 33px;
    }
    .ant-transfer-list-search-action {
      color: rgba(0, 0, 0, 0.25);
      position: absolute;
      top: 4px;
      right: 4px;
      bottom: 4px;
      width: 28px;
      line-height: 26px;
      text-align: center;
      font-size: 14px;
    }
    .ant-transfer-list-search-action .anticon {
      -webkit-transition: all .3s;
      transition: all .3s;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-transfer-list-search-action .anticon:hover {
      color: rgba(0, 0, 0, 0.43);
    }
    span.ant-transfer-list-search-action {
      pointer-events: none;
    }
    .ant-transfer-list-header {
      padding: 6px 12px;
      border-radius: 4px 4px 0 0;
      background: #fff;
      color: rgba(0, 0, 0, 0.65);
      border-bottom: 1px solid #e8e8e8;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    .ant-transfer-list-header-title {
      position: absolute;
      right: 15px;
    }
    .ant-transfer-list-body {
      font-size: 12px;
      position: relative;
      height: 100%;
    }
    .ant-transfer-list-body-search-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      padding: 4px;
      width: 100%;
    }
    .ant-transfer-list-body-with-search {
      padding-top: 34px;
    }
    .ant-transfer-list-content {
      height: 100%;
      overflow: auto;
    }
    .ant-transfer-list-content-item {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 7px 15px;
      min-height: 32px;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
    .ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled):hover {
      cursor: pointer;
      background-color: #ecf6fd;
    }
    .ant-transfer-list-content-item-disabled {
      cursor: not-allowed;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-transfer-list-content-item-highlight-enter {
      -webkit-animation: transferHighlightIn 1s ease;
              animation: transferHighlightIn 1s ease;
      -webkit-transition: none;
      transition: none;
    }
    .ant-transfer-list-body-not-found {
      padding-top: 0;
      color: rgba(0, 0, 0, 0.25);
      text-align: center;
      display: none;
      position: absolute;
      top: 50%;
      width: 100%;
      margin-top: -10px;
    }
    .ant-transfer-list-content:empty + .ant-transfer-list-body-not-found {
      display: block;
    }
    .ant-transfer-list-footer {
      border-top: 1px solid #e9e9e9;
      border-radius: 0 0 4px 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    .ant-transfer-operation {
      display: inline-block;
      overflow: hidden;
      margin: 0 8px;
      vertical-align: middle;
    }
    .ant-transfer-operation .ant-btn {
      display: block;
    }
    .ant-transfer-operation .ant-btn:first-child {
      margin-bottom: 4px;
    }
    .ant-transfer-operation .ant-btn .anticon {
      display: inline-block;
      font-size: 12px;
      font-size: 10px \9;
      -webkit-transform: scale(0.83333333) rotate(0deg);
          -ms-transform: scale(0.83333333) rotate(0deg);
              transform: scale(0.83333333) rotate(0deg);
      /* IE6-IE8 */
      -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)";
      zoom: 1;
    }
    :root .ant-transfer-operation .ant-btn .anticon {
      -webkit-filter: none;
              filter: none;
    }
    :root .ant-transfer-operation .ant-btn .anticon {
      font-size: 12px;
    }
    @-webkit-keyframes transferHighlightIn {
      0% {
        background: #d2eafb;
      }
      100% {
        background: transparent;
      }
    }
    @keyframes transferHighlightIn {
      0% {
        background: #d2eafb;
      }
      100% {
        background: transparent;
      }
    }
    
    .ant-input-search-icon {
      cursor: pointer;
      -webkit-transition: all .3s;
      transition: all .3s;
      font-size: 14px;
    }
    .ant-input-search-icon:hover {
      color: #108ee9;
    }
    .ant-search-input-wrapper {
      display: inline-block;
      vertical-align: middle;
    }
    .ant-search-input.ant-input-group .ant-input:first-child,
    .ant-search-input.ant-input-group .ant-select:first-child {
      border-radius: 4px;
      position: absolute;
      top: -1px;
      width: 100%;
    }
    .ant-search-input.ant-input-group .ant-input:first-child {
      padding-right: 36px;
    }
    .ant-search-input .ant-search-btn {
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      border-color: #d9d9d9;
      border-radius: 0 3px 3px 0;
      left: -1px;
      position: relative;
      border-width: 0 0 0 1px;
      z-index: 2;
      padding-left: 8px;
      padding-right: 8px;
    }
    .ant-search-input .ant-search-btn > a:only-child {
      color: currentColor;
    }
    .ant-search-input .ant-search-btn > a:only-child:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-search-input .ant-search-btn:hover,
    .ant-search-input .ant-search-btn:focus {
      color: #49a9ee;
      background-color: #fff;
      border-color: #49a9ee;
    }
    .ant-search-input .ant-search-btn:hover > a:only-child,
    .ant-search-input .ant-search-btn:focus > a:only-child {
      color: currentColor;
    }
    .ant-search-input .ant-search-btn:hover > a:only-child:after,
    .ant-search-input .ant-search-btn:focus > a:only-child:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-search-input .ant-search-btn:active,
    .ant-search-input .ant-search-btn.active {
      color: #0e77ca;
      background-color: #fff;
      border-color: #0e77ca;
    }
    .ant-search-input .ant-search-btn:active > a:only-child,
    .ant-search-input .ant-search-btn.active > a:only-child {
      color: currentColor;
    }
    .ant-search-input .ant-search-btn:active > a:only-child:after,
    .ant-search-input .ant-search-btn.active > a:only-child:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-search-input .ant-search-btn.disabled,
    .ant-search-input .ant-search-btn[disabled],
    .ant-search-input .ant-search-btn.disabled:hover,
    .ant-search-input .ant-search-btn[disabled]:hover,
    .ant-search-input .ant-search-btn.disabled:focus,
    .ant-search-input .ant-search-btn[disabled]:focus,
    .ant-search-input .ant-search-btn.disabled:active,
    .ant-search-input .ant-search-btn[disabled]:active,
    .ant-search-input .ant-search-btn.disabled.active,
    .ant-search-input .ant-search-btn[disabled].active {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f7f7f7;
      border-color: #d9d9d9;
    }
    .ant-search-input .ant-search-btn.disabled > a:only-child,
    .ant-search-input .ant-search-btn[disabled] > a:only-child,
    .ant-search-input .ant-search-btn.disabled:hover > a:only-child,
    .ant-search-input .ant-search-btn[disabled]:hover > a:only-child,
    .ant-search-input .ant-search-btn.disabled:focus > a:only-child,
    .ant-search-input .ant-search-btn[disabled]:focus > a:only-child,
    .ant-search-input .ant-search-btn.disabled:active > a:only-child,
    .ant-search-input .ant-search-btn[disabled]:active > a:only-child,
    .ant-search-input .ant-search-btn.disabled.active > a:only-child,
    .ant-search-input .ant-search-btn[disabled].active > a:only-child {
      color: currentColor;
    }
    .ant-search-input .ant-search-btn.disabled > a:only-child:after,
    .ant-search-input .ant-search-btn[disabled] > a:only-child:after,
    .ant-search-input .ant-search-btn.disabled:hover > a:only-child:after,
    .ant-search-input .ant-search-btn[disabled]:hover > a:only-child:after,
    .ant-search-input .ant-search-btn.disabled:focus > a:only-child:after,
    .ant-search-input .ant-search-btn[disabled]:focus > a:only-child:after,
    .ant-search-input .ant-search-btn.disabled:active > a:only-child:after,
    .ant-search-input .ant-search-btn[disabled]:active > a:only-child:after,
    .ant-search-input .ant-search-btn.disabled.active > a:only-child:after,
    .ant-search-input .ant-search-btn[disabled].active > a:only-child:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-search-input .ant-search-btn:hover,
    .ant-search-input .ant-search-btn:focus,
    .ant-search-input .ant-search-btn:active,
    .ant-search-input .ant-search-btn.active {
      background: #fff;
    }
    .ant-search-input .ant-search-btn:hover {
      border-color: #d9d9d9;
    }
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty,
    .ant-search-input:hover .ant-search-btn-noempty {
      color: #fff;
      background-color: #108ee9;
      border-color: #108ee9;
    }
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty > a:only-child {
      color: currentColor;
    }
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty > a:only-child:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:hover,
    .ant-search-input:hover .ant-search-btn-noempty:hover,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:focus,
    .ant-search-input:hover .ant-search-btn-noempty:focus {
      color: #fff;
      background-color: #49a9ee;
      border-color: #49a9ee;
    }
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:hover > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty:hover > a:only-child,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:focus > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty:focus > a:only-child {
      color: currentColor;
    }
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:hover > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty:hover > a:only-child:after,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:focus > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty:focus > a:only-child:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:active,
    .ant-search-input:hover .ant-search-btn-noempty:active,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.active,
    .ant-search-input:hover .ant-search-btn-noempty.active {
      color: #fff;
      background-color: #0e77ca;
      border-color: #0e77ca;
    }
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:active > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty:active > a:only-child,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.active > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty.active > a:only-child {
      color: currentColor;
    }
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:active > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty:active > a:only-child:after,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.active > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty.active > a:only-child:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled,
    .ant-search-input:hover .ant-search-btn-noempty.disabled,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled],
    .ant-search-input:hover .ant-search-btn-noempty[disabled],
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:hover,
    .ant-search-input:hover .ant-search-btn-noempty.disabled:hover,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:hover,
    .ant-search-input:hover .ant-search-btn-noempty[disabled]:hover,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:focus,
    .ant-search-input:hover .ant-search-btn-noempty.disabled:focus,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:focus,
    .ant-search-input:hover .ant-search-btn-noempty[disabled]:focus,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:active,
    .ant-search-input:hover .ant-search-btn-noempty.disabled:active,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:active,
    .ant-search-input:hover .ant-search-btn-noempty[disabled]:active,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled.active,
    .ant-search-input:hover .ant-search-btn-noempty.disabled.active,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled].active,
    .ant-search-input:hover .ant-search-btn-noempty[disabled].active {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f7f7f7;
      border-color: #d9d9d9;
    }
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty.disabled > a:only-child,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled] > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty[disabled] > a:only-child,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:hover > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty.disabled:hover > a:only-child,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:hover > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty[disabled]:hover > a:only-child,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:focus > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty.disabled:focus > a:only-child,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:focus > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty[disabled]:focus > a:only-child,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:active > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty.disabled:active > a:only-child,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:active > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty[disabled]:active > a:only-child,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled.active > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty.disabled.active > a:only-child,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled].active > a:only-child,
    .ant-search-input:hover .ant-search-btn-noempty[disabled].active > a:only-child {
      color: currentColor;
    }
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty.disabled > a:only-child:after,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled] > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty[disabled] > a:only-child:after,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:hover > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty.disabled:hover > a:only-child:after,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:hover > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty[disabled]:hover > a:only-child:after,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:focus > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty.disabled:focus > a:only-child:after,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:focus > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty[disabled]:focus > a:only-child:after,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:active > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty.disabled:active > a:only-child:after,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:active > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty[disabled]:active > a:only-child:after,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled.active > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty.disabled.active > a:only-child:after,
    .ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled].active > a:only-child:after,
    .ant-search-input:hover .ant-search-btn-noempty[disabled].active > a:only-child:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-search-input .ant-select-combobox .ant-select-selection__rendered {
      margin-right: 29px;
    }
    .ant-input {
      position: relative;
      display: inline-block;
      padding: 4px 7px;
      width: 100%;
      height: 28px;
      cursor: text;
      font-size: 12px;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      -webkit-transition: all .3s;
      transition: all .3s;
    }
    .ant-input::-moz-placeholder {
      color: #ccc;
      opacity: 1;
    }
    .ant-input:-ms-input-placeholder {
      color: #ccc;
    }
    .ant-input::-webkit-input-placeholder {
      color: #ccc;
    }
    .ant-input:hover {
      border-color: #49a9ee;
    }
    .ant-input:focus {
      border-color: #49a9ee;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(16, 142, 233, 0.2);
    }
    .ant-input[disabled] {
      background-color: #f7f7f7;
      opacity: 1;
      cursor: not-allowed;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-input[disabled]:hover {
      border-color: #e2e2e2;
    }
    textarea.ant-input {
      max-width: 100%;
      height: auto;
      vertical-align: bottom;
    }
    .ant-input-lg {
      padding: 6px 7px;
      height: 32px;
    }
    .ant-input-sm {
      padding: 1px 7px;
      height: 22px;
    }
    .ant-input-group {
      position: relative;
      display: table;
      border-collapse: separate;
      border-spacing: 0;
      width: 100%;
    }
    .ant-input-group[class*="col-"] {
      float: none;
      padding-left: 0;
      padding-right: 0;
    }
    .ant-input-group > [class*="col-"] {
      padding-right: 8px;
    }
    .ant-input-group-addon,
    .ant-input-group-wrap,
    .ant-input-group > .ant-input {
      display: table-cell;
    }
    .ant-input-group-addon:not(:first-child):not(:last-child),
    .ant-input-group-wrap:not(:first-child):not(:last-child),
    .ant-input-group > .ant-input:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    .ant-input-group-addon,
    .ant-input-group-wrap {
      width: 1px;
      white-space: nowrap;
      vertical-align: middle;
    }
    .ant-input-group-wrap > * {
      display: block !important;
    }
    .ant-input-group .ant-input {
      float: left;
      width: 100%;
      margin-bottom: 0;
    }
    .ant-input-group-addon {
      padding: 4px 7px;
      font-size: 12px;
      font-weight: normal;
      line-height: 1;
      color: rgba(0, 0, 0, 0.65);
      text-align: center;
      background-color: #eee;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      position: relative;
      -webkit-transition: all .3s;
      transition: all .3s;
    }
    .ant-input-group-addon .ant-select {
      margin: -5px -7px;
    }
    .ant-input-group-addon .ant-select .ant-select-selection {
      background-color: inherit;
      margin: -1px;
      border: 1px solid transparent;
      box-shadow: none;
    }
    .ant-input-group-addon .ant-select-open .ant-select-selection,
    .ant-input-group-addon .ant-select-focused .ant-select-selection {
      color: #108ee9;
    }
    .ant-input-group-addon > i:only-child:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .ant-input-group > span > .ant-input:first-child,
    .ant-input-group > .ant-input:first-child,
    .ant-input-group-addon:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .ant-input-group > span > .ant-input:first-child .ant-select .ant-select-selection,
    .ant-input-group > .ant-input:first-child .ant-select .ant-select-selection,
    .ant-input-group-addon:first-child .ant-select .ant-select-selection {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .ant-input-group > .ant-input-preSuffix-wrapper:not(:first-child) .ant-input {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .ant-input-group > .ant-input-preSuffix-wrapper:not(:last-child) .ant-input {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .ant-input-group-addon:first-child {
      border-right: 0;
    }
    .ant-input-group-addon:last-child {
      border-left: 0;
    }
    .ant-input-group > .ant-input:last-child,
    .ant-input-group-addon:last-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .ant-input-group > .ant-input:last-child .ant-select .ant-select-selection,
    .ant-input-group-addon:last-child .ant-select .ant-select-selection {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .ant-input-group-lg .ant-input,
    .ant-input-group-lg > .ant-input-group-addon {
      padding: 6px 7px;
      height: 32px;
    }
    .ant-input-group-sm .ant-input,
    .ant-input-group-sm > .ant-input-group-addon {
      padding: 1px 7px;
      height: 22px;
    }
    .ant-input-group .ant-input-preSuffix-wrapper {
      display: table-cell;
      width: 100%;
      float: left;
    }
    .ant-input-group.ant-input-group-compact > * {
      border-radius: 0;
      border-right-width: 0;
      vertical-align: middle;
    }
    .ant-input-group.ant-input-group-compact .ant-input {
      float: none;
      z-index: auto;
    }
    .ant-input-group.ant-input-group-compact > .ant-select > .ant-select-selection,
    .ant-input-group.ant-input-group-compact > .ant-calendar-picker .ant-input {
      border-radius: 0;
      border-right-width: 0;
    }
    .ant-input-group.ant-input-group-compact > *:first-child,
    .ant-input-group.ant-input-group-compact > .ant-select:first-child > .ant-select-selection,
    .ant-input-group.ant-input-group-compact > .ant-calendar-picker:first-child .ant-input {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .ant-input-group.ant-input-group-compact > *:last-child,
    .ant-input-group.ant-input-group-compact > .ant-select:last-child > .ant-select-selection,
    .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-right-width: 1px;
    }
    .ant-input-preSuffix-wrapper {
      position: relative;
      display: inline-block;
      width: 100%;
    }
    .ant-input-preSuffix-wrapper .ant-input {
      z-index: 1;
    }
    .ant-input-preSuffix-wrapper:hover .ant-input {
      border-color: #49a9ee;
    }
    .ant-input-preSuffix-wrapper .ant-input-prefix,
    .ant-input-preSuffix-wrapper .ant-input-suffix {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
              transform: translateY(-50%);
      z-index: 2;
      line-height: 0;
    }
    .ant-input-preSuffix-wrapper .ant-input-prefix {
      left: 7px;
    }
    .ant-checkbox-wrapper + span, .ant-checkbox + span {
      padding-left: 8px;
      padding-right: 8px;
  }
  .ant-checkbox {
    font-family: "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    top: -0.09em;
}
.ant-transfer-list-header-title {
  position: absolute;
  right: 12px;
}
    .ant-checkbox-wrapper {
      font-family: "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.65);
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style: none;
      line-height: unset;
      cursor: pointer;
      display: inline-block;
  }
    .ant-input-preSuffix-wrapper .ant-input-suffix {
      right: 7px;
    }
    .ant-input-preSuffix-wrapper .ant-input:not(:first-child) {
      padding-left: 24px;
    }
    .ant-input-preSuffix-wrapper .ant-input:not(:last-child) {
      padding-right: 24px;
    }
    .ant-select {
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      color: rgba(0, 0, 0, 0.65);
      font-size: 12px;
    }
    .ant-select > ul > li > a {
      padding: 0;
      background-color: #fff;
    }
    .ant-select-arrow {
      font-style: normal;
      vertical-align: baseline;
      text-align: center;
      text-transform: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      position: absolute;
      top: 50%;
      right: 8px;
      line-height: 1;
      margin-top: -6px;
      display: inline-block;
      font-size: 12px;
      font-size: 9px \9;
      -webkit-transform: scale(0.75) rotate(0deg);
          -ms-transform: scale(0.75) rotate(0deg);
              transform: scale(0.75) rotate(0deg);
      /* IE6-IE8 */
      -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)";
      zoom: 1;
    }
    .ant-select-arrow:before {
      display: block;
      font-family: "anticon" !important;
    }
    :root .ant-select-arrow {
      -webkit-filter: none;
              filter: none;
    }
    :root .ant-select-arrow {
      font-size: 12px;
    }
    .ant-select-arrow * {
      display: none;
    }
    .ant-select-arrow:before {
      content: '\e61d';
      -webkit-transition: -webkit-transform 0.2s ease;
      transition: -webkit-transform 0.2s ease;
      transition: transform 0.2s ease;
      transition: transform 0.2s ease, -webkit-transform 0.2s ease;
    }
    .ant-select-selection {
      outline: none;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      box-sizing: border-box;
      display: block;
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #d9d9d9;
      -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .ant-select-selection:hover {
      border-color: #49a9ee;
    }
    .ant-select-focused .ant-select-selection,
    .ant-select-selection:focus,
    .ant-select-selection:active {
      border-color: #49a9ee;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(16, 142, 233, 0.2);
    }
    .ant-select-selection__clear {
      display: inline-block;
      font-style: normal;
      vertical-align: baseline;
      text-align: center;
      text-transform: none;
      text-rendering: auto;
      opacity: 0;
      position: absolute;
      right: 8px;
      z-index: 1;
      background: #fff;
      top: 50%;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.25);
      width: 12px;
      height: 12px;
      margin-top: -6px;
      line-height: 12px;
      cursor: pointer;
      -webkit-transition: color 0.3s ease, opacity 0.15s ease;
      transition: color 0.3s ease, opacity 0.15s ease;
    }
    .ant-select-selection__clear:before {
      display: block;
      font-family: 'anticon';
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      content: "\e62e";
    }
    .ant-select-selection__clear:hover {
      color: rgba(0, 0, 0, 0.43);
    }
    .ant-select-selection:hover .ant-select-selection__clear {
      opacity: 1;
    }
    .ant-select-selection-selected-value {
      float: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      padding-right: 14px;
    }
    .ant-select-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-select-disabled .ant-select-selection {
      background: #f7f7f7;
      cursor: not-allowed;
    }
    .ant-select-disabled .ant-select-selection:hover,
    .ant-select-disabled .ant-select-selection:focus,
    .ant-select-disabled .ant-select-selection:active {
      border-color: #d9d9d9;
      box-shadow: none;
    }
    .ant-select-disabled .ant-select-selection__clear {
      display: none;
      visibility: hidden;
      pointer-events: none;
    }
    .ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice {
      background: #e9e9e9;
      color: #aaa;
      padding-right: 10px;
    }
    .ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice__remove {
      display: none;
    }
    .ant-select-selection--single {
      height: 28px;
      position: relative;
      cursor: pointer;
    }
    .ant-select-selection__rendered {
      display: block;
      margin-left: 7px;
      margin-right: 7px;
      position: relative;
      line-height: 26px;
    }
    .ant-select-selection__rendered:after {
      content: '.';
      visibility: hidden;
      pointer-events: none;
      display: inline-block;
      width: 0;
    }
    .ant-select-lg .ant-select-selection--single {
      height: 32px;
    }
    .ant-select-lg .ant-select-selection__rendered {
      line-height: 30px;
    }
    .ant-select-lg .ant-select-selection--multiple {
      min-height: 32px;
    }
    .ant-select-lg .ant-select-selection--multiple .ant-select-selection__rendered li {
      height: 24px;
      line-height: 24px;
    }
    .ant-select-sm .ant-select-selection--single {
      height: 22px;
    }
    .ant-select-sm .ant-select-selection__rendered {
      line-height: 20px;
    }
    .ant-select-sm .ant-select-selection--multiple {
      min-height: 22px;
    }
    .ant-select-sm .ant-select-selection--multiple .ant-select-selection__rendered li {
      height: 14px;
      line-height: 14px;
    }
    .ant-select-disabled .ant-select-selection__choice__remove {
      color: rgba(0, 0, 0, 0.25);
      cursor: default;
    }
    .ant-select-disabled .ant-select-selection__choice__remove:hover {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-select-search__field__wrap {
      display: inline-block;
      position: relative;
    }
    .ant-select-selection__placeholder,
    .ant-select-search__field__placeholder {
      position: absolute;
      top: 50%;
      left: 0;
      right: 9px;
      color: #ccc;
      line-height: 20px;
      height: 20px;
      max-width: 100%;
      margin-top: -10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ant-select-search__field__placeholder {
      left: 8px;
    }
    .ant-select-search--inline {
      position: absolute;
      height: 100%;
    }
    .ant-select-selection--multiple .ant-select-search--inline {
      float: left;
      position: static;
    }
    .ant-select-search--inline .ant-select-search__field__wrap {
      width: 100%;
      height: 100%;
    }
    .ant-select-search--inline .ant-select-search__field {
      border: 0;
      font-size: 100%;
      height: 100%;
      width: 100%;
      background: transparent;
      outline: 0;
      border-radius: 4px;
    }
    .ant-select-search--inline .ant-select-search__field__mirror {
      position: absolute;
      top: 0;
      left: -9999px;
      white-space: pre;
      pointer-events: none;
    }
    .ant-select-search--inline > i {
      float: right;
    }
    .ant-select-selection--multiple {
      min-height: 28px;
      cursor: text;
      padding-bottom: 3px;
      zoom: 1;
    }
    .ant-select-selection--multiple:before,
    .ant-select-selection--multiple:after {
      content: " ";
      display: table;
    }
    .ant-select-selection--multiple:after {
      clear: both;
      visibility: hidden;
      font-size: 0;
      height: 0;
    }
    .ant-select-selection--multiple .ant-select-search--inline {
      width: auto;
      padding: 0;
    }
    .ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field {
      width: 0.75em;
    }
    .ant-select-selection--multiple .ant-select-selection__rendered {
      margin-left: 5px;
      margin-bottom: -3px;
      height: auto;
    }
    .ant-select-selection--multiple > ul > li,
    .ant-select-selection--multiple .ant-select-selection__rendered > ul > li {
      margin-top: 3px;
      height: 20px;
      line-height: 20px;
    }
    .ant-select-selection--multiple .ant-select-selection__choice {
      background-color: #f3f3f3;
      border-radius: 4px;
      cursor: default;
      float: left;
      margin-right: 4px;
      max-width: 99%;
      position: relative;
      overflow: hidden;
      -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      padding: 0 20px 0 10px;
    }
    .ant-select-selection--multiple .ant-select-selection__choice__disabled {
      padding: 0 10px;
    }
    .ant-select-selection--multiple .ant-select-selection__choice__content {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      -webkit-transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .ant-select-selection--multiple .ant-select-selection__choice__remove {
      font-style: normal;
      vertical-align: baseline;
      text-align: center;
      text-transform: none;
      line-height: 1;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: rgba(0, 0, 0, 0.43);
      line-height: inherit;
      cursor: pointer;
      font-weight: bold;
      -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      display: inline-block;
      font-size: 12px;
      font-size: 8px \9;
      -webkit-transform: scale(0.66666667) rotate(0deg);
          -ms-transform: scale(0.66666667) rotate(0deg);
              transform: scale(0.66666667) rotate(0deg);
      /* IE6-IE8 */
      -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)";
      zoom: 1;
      position: absolute;
      right: 4px;
      padding: 0 0 0 8px;
    }
    .ant-select-selection--multiple .ant-select-selection__choice__remove:before {
      display: block;
      font-family: "anticon" !important;
    }
    :root .ant-select-selection--multiple .ant-select-selection__choice__remove {
      -webkit-filter: none;
              filter: none;
    }
    :root .ant-select-selection--multiple .ant-select-selection__choice__remove {
      font-size: 12px;
    }
    .ant-select-selection--multiple .ant-select-selection__choice__remove:hover {
      color: #404040;
    }
    .ant-select-selection--multiple .ant-select-selection__choice__remove:before {
      content: "\e633";
    }
    .ant-select-open .ant-select-arrow {
      -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
      -ms-transform: rotate(180deg);
    }
    .ant-select-open .ant-select-arrow:before {
      -webkit-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
              transform: rotate(180deg);
    }
    .ant-select-open .ant-select-selection {
      border-color: #49a9ee;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(16, 142, 233, 0.2);
    }
    .ant-select-combobox .ant-select-arrow {
      display: none;
    }
    .ant-select-combobox .ant-select-search--inline {
      height: 100%;
      width: 100%;
      float: none;
    }
    .ant-select-combobox .ant-select-search__field__wrap {
      width: 100%;
      height: 100%;
    }
    .ant-select-combobox .ant-select-search__field {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 1;
      -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      box-shadow: none;
    }
    .ant-select-dropdown {
      background-color: #fff;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      box-sizing: border-box;
      z-index: 1050;
      left: -9999px;
      top: -9999px;
      position: absolute;
      outline: none;
      overflow: hidden;
      font-size: 12px;
    }
    .ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-bottomLeft,
    .ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-bottomLeft {
      -webkit-animation-name: antSlideUpIn;
              animation-name: antSlideUpIn;
    }
    .ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-topLeft,
    .ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-topLeft {
      -webkit-animation-name: antSlideDownIn;
              animation-name: antSlideDownIn;
    }
    .ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-bottomLeft {
      -webkit-animation-name: antSlideUpOut;
              animation-name: antSlideUpOut;
    }
    .ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-topLeft {
      -webkit-animation-name: antSlideDownOut;
              animation-name: antSlideDownOut;
    }
    .ant-select-dropdown-hidden {
      display: none;
    }
    .ant-select-dropdown-menu {
      outline: none;
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
      max-height: 250px;
      overflow: auto;
    }
    .ant-select-dropdown-menu-item-group-list {
      margin: 0;
      padding: 0;
    }
    .ant-select-dropdown-menu-item-group-list > .ant-select-dropdown-menu-item {
      padding-left: 24px;
    }
    .ant-select-dropdown-menu-item-group-title {
      color: rgba(0, 0, 0, 0.43);
      line-height: 1.5;
      padding: 8px 16px;
    }
    .ant-select-dropdown-menu-item {
      position: relative;
      display: block;
      padding: 7px 16px;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.65);
      white-space: nowrap;
      cursor: pointer;
      overflow: hidden;
      -webkit-transition: background 0.3s ease;
      transition: background 0.3s ease;
    }
    .ant-select-dropdown-menu-item:hover,
    .ant-select-dropdown-menu-item-active {
      background-color: #ecf6fd;
    }
    .ant-select-dropdown-menu-item-disabled {
      color: rgba(0, 0, 0, 0.25);
      cursor: not-allowed;
    }
    .ant-select-dropdown-menu-item-disabled:hover {
      color: rgba(0, 0, 0, 0.25);
      background-color: #fff;
      cursor: not-allowed;
    }
    .ant-select-dropdown-menu-item-selected,
    .ant-select-dropdown-menu-item-selected:hover {
      background-color: #f7f7f7;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-select-dropdown-menu-item-divider {
      height: 1px;
      margin: 1px 0;
      overflow: hidden;
      background-color: #e5e5e5;
      line-height: 0;
    }
    .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:after {
      font-family: 'anticon';
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      content: "\e632";
      color: transparent;
      display: inline-block;
      font-size: 12px;
      font-size: 10px \9;
      -webkit-transform: scale(0.83333333) rotate(0deg);
          -ms-transform: scale(0.83333333) rotate(0deg);
              transform: scale(0.83333333) rotate(0deg);
      /* IE6-IE8 */
      -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)";
      zoom: 1;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
              transform: translateY(-50%);
      right: 16px;
      font-weight: bold;
      text-shadow: 0 0.1px 0, 0.1px 0 0, 0 -0.1px 0, -0.1px 0;
    }
    :root .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:after {
      -webkit-filter: none;
              filter: none;
    }
    :root .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:after {
      font-size: 12px;
    }
    .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover:after {
      color: #ddd;
    }
    .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-disabled:after {
      display: none;
    }
    .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:after,
    .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover:after {
      color: #108ee9;
      display: inline-block;
    }
    .ant-select-dropdown-container-open .ant-select-dropdown,
    .ant-select-dropdown-open .ant-select-dropdown {
      display: block;
    }
        
    
    `;
  };

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });
    console.log("nextTargetKeys: ", nextTargetKeys);
    console.log("direction: ", direction);
    console.log("moveKeys: ", moveKeys);
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({
      selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys]
    });

    console.log("sourceSelectedKeys: ", sourceSelectedKeys);
    console.log("targetSelectedKeys: ", targetSelectedKeys);
  };

  handleScroll = (direction, e) => {
    console.log("direction:", direction);
    console.log("target:", e.target);
  };

  render() {
    const state = this.state;
    const element = (
      <Arrow
        direction="right"
        shaftWidth={10}
        shaftLength={20}
        headWidth={30}
        headLength={20}
        fill=""
        stroke=""
        strokeWidth={2}
        onClick={() => console.log("点击箭头")}
      />
    );
    return (
      <div className="filter--condition__box">
        <style dangerouslySetInnerHTML={{ __html: this.getStyle() }} />
        <div className="left--box">
          <h3 className="notice">行为组件设置</h3>
          {/* 筛选条件 */}
          <div className="signal--filter-box" style={{ width: "495px" }}>
            <div className="filter-text" style={{marginBottom:'10px'}}>筛选:</div>
            <Transfer
              className="filter-transfer"
              dataSource={this.props.mockData}
              targetKeys={state.targetKeys}
              selectedKeys={state.selectedKeys}
              onChange={this.handleChange}
              onSelectChange={this.handleSelectChange}
              onScroll={this.handleScroll}
              render={item => item.description}
            />
          </div>
          {/* 事件类型 */}
          <div className="signal--filter-box">
            <div className="filter-text">事件类型:</div>
            <Select
              className="event-type-select"
              onSelect={this.eventTypeChange}
              value={this.state.eventType}
            >
              {EVENT_TYPES.map(el => {
                return <Option value={el.type}>{el.des}</Option>;
              })}
            </Select>
          </div>
          {/* 指定url */}
          <div className="url--filter-box">
            <div className="filter-text">接口地址:</div>
            <Input className="event-type-select" />
          </div>
          {/* 选择弹窗 */}
          <div className="model--filter-box">
            <div className="filter-text">弹窗选择:</div>
            <Select className="event-type-select">
              {this.state.modals.map(el => {
                return (
                  <Option key={el.name} value={el.name}>
                    {el.name}
                  </Option>
                );
              })}
            </Select>
          </div>
        </div>
        <div className="arrow">{element}</div>
        <div className="right--box">
          <h3>受用组件设置</h3>
          <div className="effect__on--component">
            <div className="filter-text">组件名称:</div>
            <Select className="effect__on--select" />
          </div>
          {/* 受用组件属性 */}
          <div className="attribute__on--component">
            <div className="filter-text">作用属性:</div>
            <Select className="effect__on--select" />
          </div>
        </div>
      </div>
    );
  }
}
