import React from 'react';


import LogoutButton from '../UI/Logout/LogoutButton';


const UsersListHeader: React.FC = () => {

    return (
        <header className="app__user-list-header">
            <div className="app__user-list-description">
                <div>
                    <h1>Наша команда</h1>
                    <h2>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</h2>
                </div>
            </div>
            <LogoutButton />
        </header>
    );
};

export default UsersListHeader;