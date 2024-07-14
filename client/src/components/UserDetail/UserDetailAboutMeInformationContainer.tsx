import React from 'react';

import UserDetailAboutMe from './UserDetailAboutMe';
import UserDetailContacts from './UserDetailContacts';

const UserDetailAboutMeInformationContainer: React.FC<{ user: any }> = ({ user }) => (
  <div className="user-detail__about-me-information-container">
    <UserDetailAboutMe />
    <UserDetailContacts user={user} />
  </div>
);

export default UserDetailAboutMeInformationContainer;