import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

import { logIn, register } from '../sclices/auth/authSlice';
import EmailInput from '../components/Authentification/EmailInput';
import PasswordInput from '../components/Authentification/PasswordInput';
import ConfirmPasswordInput from '../components/Authentification/ConfirmPasswordInput';
import ModeToggle from '../components/Authentification/ModeToggle';

const AuthForm: React.FC = () => {
  // Используем dispatch для отправки действий
  const dispatch = useAppDispatch();

  // Получаем текущие значения полей email и password из состояния
  const { mode, email, password, confirmPassword, emailError, passwordError, confirmPasswordError } = useAppSelector((state) => state.authForm);

  useEffect(() => {
    // Восстанавливаем состояние из localStorage при монтировании компонента
    const token = localStorage.getItem('token');
    if (token) {
      dispatch({ type: 'auth/logIn/fulfilled', payload: { token } });
    }
  }, [dispatch]);

  // Обработчик для входа
  const handleLogIn = () => {
    if (!emailError && !passwordError) {
      dispatch(logIn({ email, password }));
    }
  };

  // Обработчик для регистрации
  const handleRegister = () => {
    if (!emailError && !passwordError && !confirmPasswordError) {
      dispatch(register({ email, password }));
    }
  };

  return (
    <section className="auth__form-container">
      <header className="auth__inuts-header">
        {mode === 'login' ? 'Вход' : 'Регистрация'}
      </header>
      <div className="auth__form-group">
        <label htmlFor="login">Имя</label>
        <input
          type="text"
          id="login"
          value=""
          maxLength={30}
          readOnly
        />
      </div>
      <EmailInput />
      <PasswordInput />
      {mode === 'register' && <ConfirmPasswordInput />}
      {mode === 'register' ? (
        <button className="auth__form-button" onClick={handleRegister} disabled={!!emailError || !!passwordError || !!confirmPasswordError}>Зарегистрироваться</button>
      ) : (
        <button className="auth__form-button" onClick={handleLogIn} disabled={!!emailError || !!passwordError}>Войти</button>
      )}
      <ModeToggle />
    </section>
  );
};

export default AuthForm;
