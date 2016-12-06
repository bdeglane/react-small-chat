import React from 'react';
import {expect} from 'chai';
import {assert} from 'chai';
import {mount, shallow} from 'enzyme';

import ChatWindow from '../../../src/app/containers/chatWindow/ChatWindow.jsx';
import ChatWindowItem from '../../../src/app/containers/chatWindow/ChatWindowItem.jsx';

describe('<ChatWindow/>', () => {
  const wrapper = shallow(<ChatWindow messages={[{user: 'test', message: 'message test'}]} user="test"/>);
  it('calls componentDidMount', () => {
    assert.equal(wrapper.is('.chat-window'), true);
  });

  it('should render 1 ChatWindowItem', () => {
    assert.equal(wrapper.find(ChatWindowItem).length, 1);
  });
});