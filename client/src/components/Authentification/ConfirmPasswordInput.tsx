import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setConfirmPassword, toggleShowConfirmPassword } from '../../sclices/authForm/authFormSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ConfirmPasswordInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const confirmPassword = useAppSelector((state) => state.authForm.confirmPassword);
  const confirmPasswordError = useAppSelector((state) => state.authForm.confirmPasswordError);
  const showConfirmPassword = useAppSelector((state) => state.authForm.showConfirmPassword);

  return (
    <div className="auth__form-group">
      <label htmlFor="confirmPassword">Подтвердить пароль</label>
      <div className="auth__confirm-password-container">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          id="confirmPassword"
          value={confirmPassword}
          maxLength={30}
          onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
        />
        <button
          type="button"
          className="auth__password-toggle-button"
          onClick={() => dispatch(toggleShowConfirmPassword())}
        >
          <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
        </button>
      </div>
      {confirmPasswordError && <div className="auth__form-error">{confirmPasswordError}</div>}
    </div>
  );
};

export default ConfirmPasswordInput;
