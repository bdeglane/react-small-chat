import React, {Component, PropTypes} from 'react';

import ChatWindow from '../chatWindow/ChatWindow.jsx';
import ChatInput from '../chatInput/ChatInput.jsx';

import './chatComplete.scss';

export default class ChatComplete extends Component {
  /**
   *
   * @param message
   */
  addMessage(message) {
    this.props.addMessage(message);
  }

  render() {
    return (
      <section className="chat">
        <ChatWindow messages={this.props.messages}
                    user={this.props.user}/>
        <p className="user-name">{this.props.user}</p>
        <ChatInput addMessage={message => this.addMessage(message)}
                   user={this.props.user}/>
      </section>
    )
  }
}

ChatComplete.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
  addMessage: PropTypes.func.isRequired
};