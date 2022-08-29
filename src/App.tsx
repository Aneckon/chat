import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { Chat, ChatUser } from './components';

export const App = () => {
  const [userActive, setUserActive] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (userActive) {
      navigate('');
    }
  }, []);

  return (
    <div className={location.pathname === '/' ? 'app' : 'app full'}>
      <ChatUser userActive={userActive} setUserActive={setUserActive} />
      <Routes>
        <Route path="/:user" element={<Chat userActive={userActive} />} />
      </Routes>
    </div>
  );
};
