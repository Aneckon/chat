import React, { FC } from 'react';

interface InputProps {
  onKeyEnter: any;
  valueMessage: string;
  onChangeMessage: (e: any) => void;
}

export const Input: FC<InputProps> = ({ onKeyEnter, valueMessage, onChangeMessage }) => {
  return (
    <div className="input">
      <input
        onKeyDown={onKeyEnter}
        value={valueMessage}
        onChange={(e) => onChangeMessage(e.target.value)}
        placeholder={'Написать сообщение...'}
      />
    </div>
  );
};
