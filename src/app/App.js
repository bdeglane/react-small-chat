import React from 'react';
import ReactDOM from 'react-dom';

import ChatRedux from './ChatRedux.jsx';

export default class App {
  start() {
    ReactDOM.render(
      <ChatRedux/>,
      document.getElementById('app')
    );
  }
}