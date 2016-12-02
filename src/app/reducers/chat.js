import {ADD_MESSAGE} from '../constants/chat';

const getDefaultState = () => {
  return {
    messages: []
  }
};

export const chat = (state = getDefaultState(), action) => {
  switch (action.type) {

    case ADD_MESSAGE:
      state = Object.assign({}, state, {
        messages: [...state.messages, action.message]
      });
      break;

    default:
      break;
  }
  return state;
};