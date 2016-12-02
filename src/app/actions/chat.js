import {ADD_MESSAGE} from '../constants/chat';

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    text: 'new message',
    message
  };
};