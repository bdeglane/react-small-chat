import React from 'react';

export const ChatWindowItem = ({classes, user, message}) => {
  return (
    <li className={classes}>
      <p className="user">{user}</p>
      <p className="text">{message}</p>
    </li>
  )
};
