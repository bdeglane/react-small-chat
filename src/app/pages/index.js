import {connect} from 'react-redux';

import Chat from './Chat.jsx';
import {addMessage} from '../actions/chat';

const mapStateToProps = (state) => {
  return {
    messages: state.chat.messages
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addMessage(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
