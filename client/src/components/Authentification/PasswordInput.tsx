import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setPassword } from '../../sclices/authForm/authFormSlice';

const PasswordInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const password = useAppSelector((state) => state.authForm.password);
  const passwordError = useAppSelector((state) => state.authForm.passwordError);

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
        placeholder="Password"
      />
      {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
    </div>
  );
};

export default PasswordInput;
