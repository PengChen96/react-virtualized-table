import React from 'react';
import { mount, render } from 'enzyme';
import Grid from '../Grid';


describe('Grid render', () => {

  test('渲染正常', () => {
    const wrapper = render(
      <Grid/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('渲染Grid正常', () => {
    //
    let columns = (num = 1) => {
      let columns = [{
        key: 'id',
        title: '复选框',
        width: 150,
        align: 'center'
      }];
      for (let i = 0; i < num; i++) {
        columns.push({
          key: 'title' + i,
          title: '标题列' + i,
          width: 150,
          render(value){
            return <span>{value}</span>;
          }
        });
      }
      return columns;
    };
    //
    let dataSource = (num = 1, colNum = 250) => {

      let list = [];
      for (let i = 0; i < num; i++) {
        let rowObj = {id: i};
        for (let j = 0; j < colNum; j++) {
          rowObj[`title${j}`] = `内容${j}`;
          if (i < 5) {
            rowObj.selectionDisable = true;
          }
        }
        list.push(rowObj);
      }
      return list;

    };
    const wrapper = mount(
      <Grid
        columns={columns()}
        dataSource={dataSource()}
      />,
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

});

// 函数
describe('Grid Func', () => {

  test('点击单元格cell', () => {
    let cellTap = jest.fn();
    let wrapper = mount(
      <Grid
        columns={[{
          key: 'id',
          title: '编号',
          width: 150
        }]}
        dataSource={[{id: 1}]}
        onCellTap={cellTap}
      />
    );
    wrapper.find('.vt-grid-cell').simulate('click');
    expect(cellTap).toBeCalled();
  });

});