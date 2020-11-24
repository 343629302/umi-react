import React from 'react';
import './style.scss';
import { Input, Button } from 'antd';
import { connect } from 'dva';
import { ListModelState } from '@/models/list';

const App = (props: any) => {
  function handldClick() {
    props.next();
  }

  return (
    <>
      <h1 className="title">Page index21321</h1>
      <Input placeholder="Basic usage" />
      <Button onClick={() => handldClick()}>测试</Button>
      <span>{props.page}</span>
    </>
  );
};

const mapStatetoprops = (state: { list: ListModelState }) => ({
  page: state.list.page,
});

const actionCreater = {
  next: () => ({ type: 'list/next' }),
};

export default connect(mapStatetoprops, actionCreater)(App);
