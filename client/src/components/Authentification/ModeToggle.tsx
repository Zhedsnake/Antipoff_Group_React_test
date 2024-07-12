import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { toggleMode } from '../../sclices/authForm/authFormSlice';

const ModeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.authForm.mode);

  return (
    <button onClick={() => dispatch(toggleMode())}>
      {mode === 'login' ? 'Switch to Register' : 'Switch to Log In'}
    </button>
  );
};

export default ModeToggle;
