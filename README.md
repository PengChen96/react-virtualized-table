
<p align="center">
  <a href="#">
    <img width="300" src="./logo.png">
  </a>
  <h1 align="center" style="margin-top: 0px">virtualized-table</h1>
</p>

[![npm version](https://badge.fury.io/js/virtualized-table.svg)](http://badge.fury.io/js/virtualized-table)  
大数据量虚拟化表格组件

## Usage

### Install
```
$ npm install virtualized-table
```

### Example
```javascript
    import {VTable} from "virtualized-table";

    <VTable
      columns={columns}
      dataSource={dataSource}
      fixedLeftColumnCount={2}
    />
```
[完整示例](https://github.com/PengChen96/virtualized-table/blob/develop/src/example/VTableCustomExample.js)

### API
#### VTable
参数 | 说明 | 类型 | 默认值 
---|---|---|---
columns | 表格列 | array | []
dataSource | 数据数字 | array | []
fixedLeftColumnCount | 左边固定列 列数 | number | 0
visibleWidth | 可视区域宽度 | number | 1200
visibleHeight | 可视区域高度 | number | 400
columnOffsetCount | 左右列偏移量 | number | 4
emptyText | 空数据渲染 | element | -
rowSelection | 勾选 | object | -
onCellTap | 点击每个子项 | func | Function(value, row, rowIndex, realRowIndex, column, columnIndex, realColumnIndex)
onSelectAll | 勾选全部 | func | Function(selected, selectedRows)
onSelect | 勾选行 | func | Function(record, selected, selectedRows)

#### columns
参数 | 说明 | 类型 | 默认值 
---|---|---|---
key | 键 | string | -
title | 列头显示文字 | string | -
width | 列宽度 | number | 150
style | 样式 | object | -
render | 数据渲染函数 | func | Function(value, row, rowIndex, realRowIndex, column, columnIndex, realColumnIndex)
headRender | 渲染表头函数 | func | Function(value, row, rowIndex, realRowIndex, column, columnIndex, realColumnIndex)

## License
virtualized-table is available under the MIT License.
