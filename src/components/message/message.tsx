import React, { FC } from 'react';

interface MessageProps {
  userActive: any;
  text: string;
  messagesRef: any;
  messagesName: string;
}

export const Message: FC<MessageProps> = ({ messagesRef, text, userActive, messagesName }) => {
  return (
    <div className="message">
      {messagesName === userActive.name ? (
        <div className="message__item left">
          <img src={userActive.img} alt="" />
          <div className="message__item-content">
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div ref={messagesRef} className="message__item right">
          <img src={userActive.img} alt="" />
          <div className="message__item-content">
            <p>{text}</p>
          </div>
        </div>
      )}
    </div>
  );
};
