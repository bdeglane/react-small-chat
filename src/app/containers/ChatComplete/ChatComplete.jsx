import React, { Component } from 'react';

import ChatWindow from '../chatWindow/ChatWindow.jsx';
import ChatInput from '../chatInput/ChatInput.jsx';

import './chatComplete.scss';

export default class ChatComplete extends Component {
  render() {
    return (
      <section className="chat">
        <ChatWindow messages={this.props.messages}
                    user={this.props.user}/>
        <p className="user-name">{this.props.user}</p>
        <ChatInput addMessage={(message)=>this.props.addMessage(message)}
                   user={this.props.user}/>
      </section>
    )
  }
}