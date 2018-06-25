import { Transfer, Select, Input } from "antd";
import Arrow from "react-arrow";
import React from "react";
import css from "./css";
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
    selectedKeys: [],
    targetKeys: this.props.targetKeys,
    // 已经选中的key
    interfaceAddress: "",
    // 接口地址
    eventType: EVENT_TYPES[0].type,
    // 事件类型
    modals: [],
    // 弹窗选择
    attribute: "",
    modal: ""
    // 弹窗
  };

  /**
   * 选择弹窗
   */
  modalSelect = modal => {
    this.setState(
      {
        modal
      },
      () => {
        this.notifyParent();
      }
    );
  };

  /**
   * 数据组件相应的值
   */
  dataCptChange = attribute => {
    this.setState(
      {
        attribute
      },
      () => {
        this.notifyParent();
      }
    );
  };

  componentDidMount() {
    this.notifyParent();
  }
  componentWillReceiveProps(nextProps) {
    this.notifyParent(nextProps);
  }
  /**
   * 下面的值发生变化后需要通知上层的组件
   */
  notifyParent = (nextProps) => {
    this.props.receiveNew({
      // 行为组件
      behavior: {
        eventType: this.state.eventType,
        modal: this.state.modal,
        key: nextProps ? nextProps.dataKey : this.props.dataKey || "",
        interfaceAddress: this.state.interfaceAddress,
        targetKeys: this.state.targetKeys
      },
      // 数据组件
      data: {
        key: nextProps ? nextProps.behaviorKey : this.props.behaviorKey || "",
        attribute: this.state.attribute
      }
    });
  };
  /**
   * 事件类型
   */
  eventTypeChange = value => {
    this.setState(
      {
        eventType: value
      },
      () => {
        this.notifyParent();
      }
    );
  };

  /**
   * 接口地址
   */
  interfaceAddressChange = e => {
    this.setState(
      {
        interfaceAddress: e.target.value
      },
      () => {
        this.notifyParent();
      }
    );
  };
  /**
   * 组件css
   */
  getStyle = () => {
    return css;
  };

  /**
   * 通知上层组件已经发生变化
   */
  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys }, () => {
      this.notifyParent();
    });
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({
      selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys]
    });
  };

  handleScroll = (direction, e) => {
    console.log("direction:", direction);
    console.log("target:", e.target);
  };

  render() {
    const state = this.state;
    console.log("state.selectedKeys===", this.state, this.props.mockData);
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
            <div className="filter-text" style={{ marginBottom: "10px" }}>
              筛选:
            </div>
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
            <Input
              className="event-type-select"
              onChange={this.interfaceAddressChange}
            />
          </div>
          {/* 选择弹窗 */}
          <div className="model--filter-box">
            <div className="filter-text">弹窗选择:</div>
            <Select
              className="event-type-select"
              value={this.state.modal}
              onSelect={this.modalSelect}
            >
              <Option value="23">23</Option>
            </Select>
          </div>
        </div>
        <div className="arrow">{element}</div>
        <div className="right--box">
          <h3>受用组件设置</h3>
          {/* 受用组件名称去掉，因为点击的时候就知道为那个组件添加值了 */}
          {/* <div className="effect__on--component">
            <div className="filter-text">组件名称:</div>
            <Select className="effect__on--select"></Select>
          </div> */}
          {/* 受用组件属性 */}
          <div className="attribute__on--component">
            <div className="filter-text">作用属性:</div>
            <Select
              value={this.state.attribute}
              className="effect__on--select"
              onSelect={this.dataCptChange}
            >
              <Option value="dataSource">dataSource</Option>
            </Select>
          </div>
        </div>
      </div>
    );
  }
}
