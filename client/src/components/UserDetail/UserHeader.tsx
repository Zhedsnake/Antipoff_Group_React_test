import React from 'react';

import BackButton from '../UI/backButton/BackButton';
import UserDescription from './UserDescription';
import LogoutButton from '../UI/Logout/LogoutButton';
import PurpleBackContainer from "../UI/purpleBackConteiner/PurpleBackContainer";


const UserHeader: React.FC<{ user: any }> = ({ user }) => (
    <PurpleBackContainer>
      <header className="user-detail__header">
        <BackButton />
        <UserDescription user={user} />
        <LogoutButton />
      </header>
    </PurpleBackContainer>
);

export default UserHeader;