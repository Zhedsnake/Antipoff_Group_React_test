import React from 'react';

import UserDetailAboutMeInformationContainer from './UserDetailAboutMeInformationContainer';

const UserDetailAboutMeInformation: React.FC<{ user: any }> = ({ user }) => (
  <div className="user-detail__about-me-information">
    <UserDetailAboutMeInformationContainer user={user} />
  </div>
);

export default UserDetailAboutMeInformation;