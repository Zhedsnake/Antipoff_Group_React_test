import React, { useEffect } from 'react';

// hooks
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import useAuthEffect from '../../hooks/useAuthEffect';

import { logIn, register } from '../../sclices/auth/authSlice';
import EmailInput from '../../components/Authentification/EmailInput';
import PasswordInput from '../../components/Authentification/PasswordInput';
import ConfirmPasswordInput from '../../components/Authentification/ConfirmPasswordInput';
import ModeToggle from '../../components/Authentification/ModeToggle';

const AuthForm: React.FC = () => {
  // Используем dispatch для отправки действий
  const dispatch = useAppDispatch();

  // Получаем текущие значения полей email и password из состояния
  const { mode, email, password, emailError, passwordError, confirmPasswordError } = useAppSelector((state) => state.authForm);

  // Восстанавливаем состояние аутентификации из localStorage при монтировании компонента
  useAuthEffect();

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
    <main className="auth__form-container">
      <header className="auth__inputs-header">
        <h1>
          {mode === 'login' ? 'Вход' : 'Регистрация'}
        </h1>
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
    </main>
  );
};

export default AuthForm;
