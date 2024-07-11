import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

import { logIn, register } from '../sclices/auth/authSlice';
import { setEmail, setPassword } from '../sclices/authForm/authFormSlice';


const AuthForm: React.FC = () => {
  // Используем dispatch для отправки действий
  const dispatch = useAppDispatch();

  // Получаем текущие значения полей email и password из состояния
  const { email, password, emailError, passwordError } = useAppSelector((state) => state.authForm);

  // Обработчик для входа
  const handleLogIn = () => {
    if (!emailError && !passwordError) {
      dispatch(logIn({ email, password }));
    }
  };

  // Обработчик для регистрации
  const handleRegister = () => {
    if (!emailError && !passwordError) {
      dispatch(register({ email, password }));
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
        placeholder="Email"
      />
      {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      <input
        type="password"
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
        placeholder="Password"
      />
      {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      <button onClick={handleLogIn} disabled={!!emailError || !!passwordError}>Log In</button>
      <button onClick={handleRegister} disabled={!!emailError || !!passwordError}>Register</button>
    </div>
  );
};

export default AuthForm;