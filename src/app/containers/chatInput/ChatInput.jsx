import React, {Component} from 'react';

import './chatInput.scss';

export default class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      user: props.user
    }
  }

  /**
   *
   * @param event
   */
  onKeyDown(event) {
    if (event.keyCode == 13)
      this.addMessage();
  }

  /**
   *
   * @param event
   */
  handleChange(event) {
    this.setState({message: event.target.value});
  }

  addMessage() {
    this.props.addMessage(this.state);
    this.setState({message: ''});
  }

  render() {
    return (
      <section className="chat-input">
        <input type="text"
               value={this.state.message}
               onChange={event => this.handleChange(event)}
               onKeyDown={event => this.onKeyDown(event)}/>
        <input type="submit"
               value="ok"
               onClick={() => this.addMessage()}/>
      </section>
    )
  }
}