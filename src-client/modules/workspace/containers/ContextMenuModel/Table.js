import React from "react";
import ReactDOM from "react-dom";
import HotTable from "react-handsontable";

// https://handsontable.com/examples.html?merge-cells&context-menu
// https://docs.handsontable.com/3.0.0/ContextMenu.html
// https://handsontable.com/features
export default class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.rowHeaders = this.generateRowHeaders(this.props.supportProps.props || []);
    this.rowData = this.generateRowData(this.props.supportProps.props || []);
    console.log("this.rowData===", this.rowData);
    this.state = {
      handsontableData: [
        // 默认的表格列，需要一个字段映射行，表示从服务端那个字段上获取
        ["ID"],
        // 默认有一个ID列
        [],
        // 默认的映射值为空，要求使用者自己填写
        ...this.rowData
      ]
    };
  }
  // 字段映射+宽度设置
  /**
   * 产生表格行默认数据
   */
  generateRowData = props => {
    const rows = [];
    for (let t = 0, len = props.length; t < len; t++) {
      const { defaultValue } = props[t];
      rows.push([defaultValue]);
    }
    return rows;
  };

  /**
   * 
   * @param {*} props
   * 表格行头 
   */
  generateRowHeaders(props) {
    const headers = props.reduce((prev, cur) => {
      return prev.concat(cur.name);
    }, []);
    headers.unshift("", "字段映射");
    return headers;
  }

  /**
   * 每一列
   */
  cells = (row, column) => {
    var cellMeta = {};
    // if (row == 0) {
    //   // 表头不允许编辑
    //   cellMeta.readOnly = true;
    //   cellMeta.type = "text";
    // }
    if (column == 1) {
      cellMeta.type = "dropdown";
      cellMeta.source = [
        "Ben",
        "Chris",
        "Jessica",
        "Kate",
        "Michael",
        "Monica",
        "Omar",
        "Paul",
        "Samuel"
      ];
    }
    return cellMeta;
  };

  /**
   * 表格变化了
   */
  afterChange = data => {
    if (data) {
      const [rowNum, colNum, prevValue, curValue] = data && data[0];
      const handsontableData = JSON.parse(
        JSON.stringify(this.state.handsontableData)
      );
      handsontableData[rowNum][colNum] = curValue;
      console.log("创建的时候handsontableData==", handsontableData);
      this.setState(
        {
          handsontableData
        },
        () => {
          console.log("afterChange被调用~~~", handsontableData);
          this.props.getProps(this.getData());
        }
      );
    }
  };

  /**
   * 创建了一个列
   * Left:1,1,"ContextMenu.columnLeft"
   * Right:2,1,"ContextMenu.columnRight"
   */
  afterCreateCol = (column, value1, position) => {
    const handsontableData = JSON.parse(
      JSON.stringify(this.state.handsontableData)
    );
    handsontableData[0][column] = "New Column";
    handsontableData[1][column] = "";
    this.rowHeaders.push("New Column");
    this.setState({
      handsontableData
    });
  };

  /**
   * 组件挂载
   */
  componentDidMount() {
    this.props.getProps(this.getData());
  }
  /**
   * 转化为columns数据
   */
  getData = () => {
    const rowHeader = this.rowHeaders;
    const handsontableData = JSON.parse(
      JSON.stringify(this.state.handsontableData)
    );
    console.log("参与getData的值为===", handsontableData);
    console.log("参与rowHeader的值为===", rowHeader);
    const reflectedData = [];
    for (let t = 0, len = handsontableData[0].length; t < len; t++) {
      const el = {};
      for (let k = 0, length = handsontableData.length; k < length; k++) {
        // 赋值class等
        if (k >= 2) {
          console.log('el[rowHeader[k]]===',el[rowHeader[k]]);
          console.log('handsontableData[k][t]===',handsontableData[k][t]);
          el[rowHeader[k]] = handsontableData[k][t];
        }
      }
      reflectedData.push(el);
    }
    console.log("reflectedData====", reflectedData);
    return reflectedData;
  };
  /**
  * 创建一个行，弹窗提示选择要创建的字段
  */
  afterCreateRow = row => {
    debugger;
  };

  render() {
    console.log("this.state.handsontableData", this.state.handsontableData);
    console.log("this.rowHeaders===", this.rowHeaders);
    return (
      <div id="example-component">
        <HotTable
          root="complext__hot--container"
          data={this.state.handsontableData}
          colHeaders={false}
          //可以设置表头的值
          rowHeaders={false}
          //每一行前面都有1...N的数字
          mergeCells={true}
          //允许合并单元格
          contextMenu={true}
          colWidths={300}
          contextMenu={[
            "col_left",
            "col_right",
            "remove_col",
            "row_above",
            "row_below",
            "remove_row"
          ]}
          //显示context menu
          width="1000"
          rowHeaders={this.rowHeaders}
          afterChange={this.afterChange}
          afterCreateCol={this.afterCreateCol}
          afterCreateRow={this.afterCreateRow}
          cells={this.cells}
          height="500"
          stretchH="all"
        />
        <button onClick={this.getData}>得到columns数据</button>
      </div>
    );
  }
}
