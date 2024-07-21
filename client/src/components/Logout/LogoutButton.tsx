import React from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { logOut } from '../../sclices/auth/authSlice';

import logoutIcon from '../../img/logout-icon.svg';

import '../../styles/LogoutButton.css';

const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="logout-button">
      <button onClick={handleLogout} className="logout-button__text">Выход</button>
      <button onClick={handleLogout} className="logout-button__icon">
        <img src={logoutIcon} alt="Logout" />
      </button>
    </div>
  );
};

export { LogoutButton} ;
