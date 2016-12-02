import React from 'react';
import ReactDOM from 'react-dom';

import Chat from './pages/Chat.jsx';

export default class App {
  start() {
    ReactDOM.render(
      <Chat/>,
      document.getElementById('app')
    );
  }
}