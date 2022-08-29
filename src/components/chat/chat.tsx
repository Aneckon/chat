import React, { FC, useRef, useState } from 'react';
import {
  addDoc,
  collection,
  orderBy,
  where,
  query,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Input, Message } from '..';

interface ChatProps {
  userActive: any;
}

export const Chat: FC<ChatProps> = ({ userActive }) => {
  const [messages] = useCollectionData(
    query(collection(getFirestore(), 'messages'), orderBy('createAt')),
  );

  const messagesRef = useRef<any>();
  const [messagesInput, setMessagesInput] = useState('');

  const messageUserData = async (message: string, name: string) => {
    await addDoc(collection(getFirestore(), 'messages'), {
      messages: message,
      name: name,
      createAt: serverTimestamp(),
    });
    setMessagesInput('');
  };

  const onKeyEnter = (e: any) => {
    if (messagesInput.length && messagesInput.indexOf(' ') && e.key === 'Enter') {
      messageUserData(messagesInput, userActive.name);

      setTimeout(() => {
        messagesRef.current.scrollIntoView();
        setMessagesInput('');
      }, 100);
    }
  };

  return (
    <div className="chat">
      <div className="user__content-name">
        <p>{userActive.name}</p>
        <div className={userActive.active ? '' : 'user__active'}></div>
      </div>
      <div className="user__content-messages">
        {messages &&
          messages.map((message: any, index: number) => (
            <Message
              messagesRef={messagesRef}
              key={index}
              messagesName={message.name}
              text={message.messages}
              userActive={userActive}
            />
          ))}
      </div>
      <Input
        onKeyEnter={onKeyEnter}
        valueMessage={messagesInput}
        onChangeMessage={setMessagesInput}
      />
    </div>
  );
};
