"use strict";

import React from "react";
import PropTypes from "prop-types";
import generateRandomKey from "./util";
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getVergineProps();
  }

  /**
   * 获取原始state
   */
  getVergineProps = () => {
    const { props } = this.props.supportProps;
    const vergineState = {};
    props.forEach(el => {
      const { name, defaultValue } = el;
      vergineState[name] = defaultValue;
    });
    return vergineState;
  };

  /**
   * state的值改变
   */
  stateChange = (key, e) => {
    const stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy[key] = e.target.value;
    console.log("newState===", stateCopy);
    this.setState(stateCopy);
  };

  /**
   * 获取配置
   */
  getPropsDef = name => {
    return this.props.supportProps.props.filter(el => {
      return el.name == name;
    })[0];
  };
  /**
   * 产生trs
   */
  generateTrs = props => {
    const tbodydoms = [];
    for (let t = 0, len = Object.keys(props).length; t < len; t++) {
      const filterName = Object.keys(props)[t];
      // 得到name
      const { label, type, name, index, defaultValue } = this.getPropsDef(
        filterName
      );
      tbodydoms.push(
        <tr key={index}>
          <span
            style={{
              fontWeight: "bold",
              marginRight: "20px",
              marginTop: "20px"
            }}
          >
            {name}:
          </span>
          <td>
            <input
              onChange={value => {
                this.stateChange(name, value);
              }}
              value={this.state[`${name}`]}
            />
            <span style={{ fontSize: "12px", marginLeft: "10px" }}>
              ({label})
            </span>
          </td>
        </tr>
      );
    }
    return tbodydoms;
  };

  render() {
    const { name, desc, props } = this.props.supportProps;
    // 支持的props
    const tdbuckets = this.generateTrs(this.state);
    // 产生表头
    return (
      <div
        className="uniform-cpnt-Table"
        style={{
          border: "1px solid pink",
          paddingLeft: "20px",
          paddingBottom: "20px",
          padding: 0
        }}
      >
        <h3>{desc}</h3>
        <table>
          <tbody>{tdbuckets}</tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {};

Table.displayName = "Table";

export default Table;
