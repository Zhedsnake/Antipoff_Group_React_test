import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { toggleMode } from '../../sclices/authForm/authFormSlice';

const ModeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.authForm.mode);

  return (
    <button className="auth__form-button" onClick={() => dispatch(toggleMode())}>
      {mode === 'login' ? 'Переключитесь на регистрацию' : 'Переключитесь на вход в систему'}
    </button>
  );
};

export default ModeToggle;
