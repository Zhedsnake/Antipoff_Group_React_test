import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

import { logIn, register } from '../sclices/auth/authSlice';
import { setEmail, setPassword } from '../sclices/authForm/authFormSlice';


const AuthForm: React.FC = () => {
  // Используем dispatch для отправки действий
  const dispatch = useAppDispatch();
  
  // Получаем текущие значения полей email и password из состояния
  const { email, password } = useAppSelector((state) => state.authForm);

  // Обработчик для входа
  const handleLogIn = () => {
    dispatch(logIn({ email, password }));
  };

  // Обработчик для регистрации
  const handleRegister = () => {
    dispatch(register({ email, password }));
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
        placeholder="Password"
      />
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default AuthForm;