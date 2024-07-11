import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

import { logIn, register } from '../Sclices/auth/authSlice';
import { setEmail, setPassword } from '../Sclices/authForm/authFormSlice';

const AuthForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state) => state.authForm);

  const handleLogIn = () => {
    dispatch(logIn({ email, password }));
  };

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