import 'antd-mobile/dist/antd-mobile.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import MembershipHome from './containers/MembershipHome';
import membershipLevelReducer from './reducers/membershipLevelReducer';

const store = createStore(
  combineReducers({
    membershipLevel: membershipLevelReducer
  }),
  compose(
    applyMiddleware(thunk),
    __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <MembershipHome />
  </Provider>
  ,
  document.getElementById('app')
);
// MembershipHome.js 를 만들어라
// 회원의 상태는 3가지이다.
// 1. guest
// 2. trial
// 3. member
