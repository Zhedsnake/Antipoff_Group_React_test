import React, { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { logIn, register } from '../features/auth/authSlice';

const AuthForm: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleLogIn = () => {
    dispatch(logIn({ login, password }));
  };

  const handleRegister = () => {
    dispatch(register({ login, password }));
  };

  return (
    <div>
      <input value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default AuthForm;
