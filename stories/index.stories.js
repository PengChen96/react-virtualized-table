import React from 'react';
import { storiesOf } from '@storybook/react';
import VTable from '../src/example/VTable/index';
import VTableMD from '../README.md';
import VTable2 from '../src/example/VTable2.0/index';
import markdown from '../libs/VTable2.0/README.md';

storiesOf('VTable1.0|VTable', module)
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('default', () => (
    <span>😀 😎 👍 💯<VTable/></span>
  ),{
    notes: {VTableMD}   // 将会渲染 markdown 内容
  });

storiesOf('VTable2.0|VTable', module)
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('default', () => (
    <span>😀 😎 👍 💯<VTable2/></span>
  ),{
    notes: {markdown}   // 将会渲染 markdown 内容
  });

storiesOf('VTable2.0|MultiGrid', module)
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('default', () => (
    <span>😀 😎 👍 💯</span>
  ),{
    notes: {markdown}   // 将会渲染 markdown 内容
  });

storiesOf('VTable2.0|Grid', module)
  .add('default', () => (  // 一个 add 表示添加一个 story
    <span>Hello Button</span>
  ))
  .add('emoji', () => (  // 这里是另一个 story
    <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
  ), {
    notes: {
      Introduction: markdown,
      DesignNotes: markdown
    }
  });

