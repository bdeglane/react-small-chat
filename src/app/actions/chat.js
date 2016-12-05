import {ADD_MESSAGE} from '../constants/chat';

export const addMessage = message => ({
  type: ADD_MESSAGE,
  text: 'new message',
  message
});