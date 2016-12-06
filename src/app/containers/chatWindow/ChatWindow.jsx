import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import {ChatWindowItem} from './ChatWindowItem.jsx';

import './chatWindow.scss';

export default class ChatWindow extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
  }

  updateScroll() {
    this.node.scrollTop = this.node.scrollHeight;
  }

  componentDidUpdate() {
    this.updateScroll();
  }

  render() {
    // item
    let messages = this.props.messages.map((item, id) => {

      // user messages justify to right
      let classes = classnames(
        'message',
        {
          mine: item.user === this.props.user
        });

      return <ChatWindowItem key={id}
                             user={item.user}
                             message={item.message}
                             classes={classes}/>;
    });

    return (
      <section className="chat-window">
        <ol>
          {messages}
        </ol>
      </section>
    )
  }
}