import React from 'react';

import BackButton from './BackButton';
import UserDetailDescription from './UserDetailDescription';
import { LogoutButton } from '../UI/Logout/LogoutButton';


const UserDetailHeader: React.FC<{ user: any }> = ({ user }) => (
  <header className="user-detail__header">
    <BackButton />
    <UserDetailDescription user={user} />
    <LogoutButton />
  </header>
);

export default UserDetailHeader;