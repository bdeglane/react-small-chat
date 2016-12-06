import React, {Component, PropTypes} from 'react';

import ChatComplete from '../containers/ChatComplete/ChatComplete.jsx';

import './chat.scss';

export default class Chat extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Small Chat</h1>
        </header>
        <div className="chat-app">
          <ChatComplete messages={this.props.messages}
                        addMessage={(message) => this.props.addMessage(message)}
                        user={'Roger'}
          />
          <ChatComplete messages={this.props.messages}
                        addMessage={(message) => this.props.addMessage(message)}
                        user={'Julie'}
          />
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.array.isRequired,
  addMessage: PropTypes.func.isRequired
};