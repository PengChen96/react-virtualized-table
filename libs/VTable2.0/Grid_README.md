

#### Grid2.0
参数 | 说明 | 类型 | 默认值
---|---|---|---
bordered | 是否显示边框 | boolean | false
className | 表格样式类名 | string | -
onCellTap | 点击每个子项 | func | Function(value, row, rowIndex, realRowIndex, column, columnIndex, realColumnIndex)


#### columns
参数 | 说明 | 类型 | 默认值
---|---|---|---
align | 设置单元格对齐方式 | string | 'left'，'right'，'center'
ellipsis | 是否显示省略号 | boolean | false
colSpan | 列合并 | func | Function(rowIndex)