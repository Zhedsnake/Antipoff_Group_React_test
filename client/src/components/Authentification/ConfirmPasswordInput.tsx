import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setConfirmPassword } from '../../sclices/authForm/authFormSlice';

const ConfirmPasswordInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const confirmPassword = useAppSelector((state) => state.authForm.confirmPassword);
  const confirmPasswordError = useAppSelector((state) => state.authForm.confirmPasswordError);

  return (
    <div className="auth-form-group">
      <label htmlFor="confirmPassword">Подтвердить пароль</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
      />
      {confirmPasswordError && <p className="auth-form-error">{confirmPasswordError}</p>}
    </div>
  );
};

export default ConfirmPasswordInput;
