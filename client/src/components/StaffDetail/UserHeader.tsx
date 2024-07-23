import React from 'react';

import BackButton from '../UI/backButton/BackButton';
import UserDescription from './UserDescription';
import LogoutButton from '../UI/LogoutButton/LogoutButton';


const UserHeader: React.FC<{ user: any }> = ({ user }) => {

    return (
          <header className="user-detail__header">
            <BackButton />
            <UserDescription user={user} />
            <LogoutButton />
          </header>
    );
};

export default UserHeader;