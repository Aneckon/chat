import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '..';

interface ChatUserProps {
  userActive: any;
  setUserActive: (name: any) => void;
}

const chatMok = [
  {
    id: 1,
    img: '/assets/user.png',
    userName: 'Марина',
    message: 'Привет! Как дела?',
    active: false,
  },
  {
    id: 2,
    img: '/assets/user.png',
    userName: 'Алёна',
    message: 'Чем занимаешься?',
    messageCount: 1,
    active: true,
  },
];

export const ChatUser: FC<ChatUserProps> = ({ userActive, setUserActive }) => {
  const navigate = useNavigate();

  const onUserClick = (name: string, active: boolean, img: string, id: number) => {
    setUserActive({ name, active, img, id });
    navigate(`/${name}`);
  };

  return (
    <div className="chat__user">
      {chatMok.map((user) => (
        <div
          key={user.id}
          onClick={() => onUserClick(user.userName, user.active, user.img, user.id)}
          className={
            userActive.name === user.userName ? 'chat__user-item active' : 'chat__user-item'
          }>
          <User
            name={user.userName}
            message={user.message}
            active={user.active}
            img={user.img}
            messageCount={user.messageCount}
          />
        </div>
      ))}
    </div>
  );
};
