import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/root';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import Reducer from './reducer';

// test
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(
    Reducer
  )}>
    <Root />
  </Provider>,
  document.getElementById("root")
);