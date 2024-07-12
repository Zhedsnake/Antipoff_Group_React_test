import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setConfirmPassword } from '../../sclices/authForm/authFormSlice';

const ConfirmPasswordInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const confirmPassword = useAppSelector((state) => state.authForm.confirmPassword);
  const confirmPasswordError = useAppSelector((state) => state.authForm.confirmPasswordError);

  return (
    <div>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
        placeholder="Confirm Password"
      />
      {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
    </div>
  );
};

export default ConfirmPasswordInput;
