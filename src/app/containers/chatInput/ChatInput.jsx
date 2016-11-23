import React, { Component } from 'react';

import './chatInput.scss';

export default class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      user: props.user,
      date: ''
    }
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  addMessage() {
    this.setState(
      {date: new Date()},
      ()=> {
        this.props.addMessage(this.state);
        this.setState({message: ''});
      });
  }

  render() {
    return (
      <section className="chat-input">
        <input type="text"
               value={this.state.message}
               onChange={(event)=> this.handleChange(event)}/>
        <input type="submit"
               value="ok"
               onClick={()=> this.addMessage()}/>
      </section>
    )
  }
}