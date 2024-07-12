import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setEmail } from '../../sclices/authForm/authFormSlice';

const EmailInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.authForm.email);
  const emailError = useAppSelector((state) => state.authForm.emailError);

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
        placeholder="Email"
      />
      {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
    </div>
  );
};

export default EmailInput;
