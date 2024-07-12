import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setPassword, toggleShowPassword } from '../../sclices/authForm/authFormSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const password = useAppSelector((state) => state.authForm.password);
  const passwordError = useAppSelector((state) => state.authForm.passwordError);
  const showPassword = useAppSelector((state) => state.authForm.showPassword);

  return (
    <div className="auth__form-group">
      <label htmlFor="password">Пароль</label>
      <div className="auth__password-container">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          maxLength={30}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        <button
          type="button"
          className="auth__password-toggle-button"
          onClick={() => dispatch(toggleShowPassword())}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      </div>
      {passwordError && <div className="auth__form-error">{passwordError}</div>}
    </div>
  );
};

export default PasswordInput;
