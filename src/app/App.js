import React from 'react';
import ReactDOM from 'react-dom';

import Chat from './Chat.jsx';

export default class App {
  start() {
    ReactDOM.render(
      <Chat/>,
      document.getElementById('app')
    );
  }
}