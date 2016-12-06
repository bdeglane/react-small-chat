import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import reducers from './reducers/index';

import Chat from './pages/index';

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.group(action.type);
      console.info('dispatching', action);
      // store dispatch
      let result = next(action);
      console.log('next state', store.getState());
      console.groupEnd(action.type);
      return result
    };
  };
};

export default class ChatRedux extends Component {
  constructor() {
    super();
    this.store = createStore(
      reducers,
      {},
      compose(
        applyMiddleware(
          logger
        ),
      )
    );
  }

  render() {
    return (
      <Provider store={this.store}>
        <Chat/>
      </Provider>
    )
  }
}