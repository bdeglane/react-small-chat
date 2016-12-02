import React, { Component } from 'react';

import ChatComplete from '../containers/ChatComplete/ChatComplete.jsx';

import './chat.scss';

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }

  /**
   *
   * @param message
   */
  addMessage(message) {
    this.setState(
      {messages: [...this.state.messages, message]},
      // log in console new message and new state
      ()=> {
        console.group('new message');
        console.info('from', message.user, 'on', message.date);
        console.info('new state ', this.state);
        console.groupEnd('new message');
      }
    );
  }

  render() {
    return (
      <div>
        <header>
          <h1>Small Chat</h1>
        </header>
        <div className="chat-app">
          <ChatComplete messages={this.state.messages}
                        addMessage={(message)=>this.addMessage(message)}
                        user={'Roger'}
          />
          <ChatComplete messages={this.state.messages}
                        addMessage={(message)=>this.addMessage(message)}
                        user={'Julie'}
          />
        </div>
      </div>
    );
  }
}