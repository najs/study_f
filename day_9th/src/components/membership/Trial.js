import React from 'react';
import ContentBox from './ContentBox';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { unRegister } from '../../actions/membershipAction';

function Trial(props) {
  return (
    <div>
      <h1>30일 무료체험중입니다</h1>
      <ContentBox />
      <Button
        type="warning"
        onClick={props.unRegister}
      >
        해지하기
      </Button>
    </div>
  );
}
const mapSTP = (state) => {
  return {}
};
const mapDTP = {
  unRegister
};
export default connect(mapSTP, mapDTP)(Trial);