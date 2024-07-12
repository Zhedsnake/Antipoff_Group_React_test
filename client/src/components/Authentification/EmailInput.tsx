import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setEmail } from '../../sclices/authForm/authFormSlice';

const EmailInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.authForm.email);
  const emailError = useAppSelector((state) => state.authForm.emailError);

  return (
    <div className="auth__form-group">
      <label htmlFor="email">Электронная почта</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />
      {emailError && <div className="auth__form-error">{emailError}</div>}
    </div>
  );
};

export default EmailInput;
