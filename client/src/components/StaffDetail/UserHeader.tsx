import React from 'react';

import BackButton from '../UI/backButton/BackButton';
import UserDescription from './UserDescription';
import LogoutButton from '../UI/Logout/LogoutButton';
import PurpleBackContainer from "../UI/purpleBackConteiner/PurpleBackContainer";


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