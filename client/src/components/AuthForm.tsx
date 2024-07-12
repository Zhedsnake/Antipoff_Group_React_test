import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

import { logIn, register } from '../sclices/auth/authSlice';
import { setEmail, setPassword, setConfirmPassword, resetForm, toggleMode } from '../sclices/authForm/authFormSlice';


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
    <div>
      <button onClick={() => dispatch(toggleMode())}>
        {mode === 'login' ? 'Switch to Register' : 'Switch to Log In'}
      </button>
      <input
        type="text"
        value=""
        placeholder="Username (just a dummy input)"
        readOnly
      />
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
      {mode === 'register' && (
        <>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
            placeholder="Confirm Password"
          />
          {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
        </>
      )}
      {mode === 'register' ? (
        <button onClick={handleRegister} disabled={!!emailError || !!passwordError || !!confirmPasswordError}>Register</button>
      ) : (
        <button onClick={handleLogIn} disabled={!!emailError || !!passwordError}>Log In</button>
      )}
    </div>
  );
};

export default AuthForm;
