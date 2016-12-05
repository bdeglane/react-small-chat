let chai = require('chai');
let assert = require('chai').assert;

import {chat, getDefaultState} from '../../src/app/reducers/chat';
import {addMessage} from '../../src/app/actions/chat';


describe('chat reducer', () => {
  describe('dummy action', () => {
    it('should return default state', () => {
      let dummyAction = {
        type: 'DRINK_TEA'
      };
      let state = chat(getDefaultState(), dummyAction);
      assert.deepEqual(state, getDefaultState());
    });
  });
  describe('correct action ADD_MESSAGE', () => {
    it('should return correct state', () => {
      let message = {
        user: 'Test',
        message: 'Test message'
      };
      let correctState = {
        "messages": [
          {
            "date": new Date(),
            "message": "Test message",
            "user": "Test"
          }
        ]
      };
      let correctAction = addMessage(message);
      let state = chat(getDefaultState(), correctAction);
      assert.deepEqual(state, correctState);
    });
  });
});