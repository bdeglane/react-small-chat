import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

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
      // new component
      return (
        <li key={id}
            className={classes}>
          <p className="user">{item.user}</p>
          <p className="text">{item.message}</p>
        </li>
      );
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