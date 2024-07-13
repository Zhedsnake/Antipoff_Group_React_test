import React from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { logOut } from '../../sclices/auth/authSlice';


const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header className="app__header">
        <div className="app__hudden-block"></div>
        <div className="app__description">
            <div>
                <h1>Наша команда</h1>
                <h2>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </h2>
            </div>
        </div>
        <div className="app__logout-button">
            <button onClick={handleLogOut}>Выход</button>
        </div>
    </header>
  );
};

export default Header;
