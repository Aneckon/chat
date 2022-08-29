import React, { FC } from 'react';

interface UserProps {
  img: string;
  name: string;
  message: string;
  active: boolean;
  messageCount: number | undefined;
}

export const User: FC<UserProps> = ({
  img,
  name,
  message,
  active,
  messageCount,
}) => {
  return (
    <div className="user">
      <img src={img} alt="" />
      <div className="user__content">
        <div className="user__content-name">
          <p>{name}</p>
          <div className={active ? '' : 'user__active'}></div>
        </div>
        <div className="user__content-message">
          <span>{message}</span>
          <div className={messageCount ? 'user__message-active' : ''}>{messageCount}</div>
        </div>
      </div>
    </div>
  );
};
