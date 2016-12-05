let chai = require('chai');
let assert = require('chai').assert;

import {addMessage} from '../../src/app/actions/chat';


describe('chat actions', () => {
  describe('addMessage(message)', () => {

    const message = {
      user: 'roger',
      message: 'Hello'
    };

    it('should return correct message object', () => {
      let res = addMessage(message);
      assert.equal(res.message, message);
    });
  });
});