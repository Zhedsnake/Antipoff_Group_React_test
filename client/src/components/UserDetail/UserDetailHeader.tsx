import React from 'react';

import BackButton from './BackButton';
import UserDetailDescription from './UserDetailDescription';
import { LogoutButton } from '../../components/Logout/LogoutButton';


const UserDetailHeader: React.FC<{ user: any }> = ({ user }) => (
  <header className="user-detail__header">
    <BackButton />
    <UserDetailDescription user={user} />
    <LogoutButton />
  </header>
);

export default UserDetailHeader;