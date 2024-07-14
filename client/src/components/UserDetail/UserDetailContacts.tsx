import React from "react";

import phoneIcon from '../../img/phone.svg';
import gmailIcon from '../../img/gmail.svg';

const UserDetailContacts: React.FC<{ user: any }> = ({ user }) => (
  <div className="user-detail__contacts-container">
    <div className="user-detail__contacts-item">
      <img src={phoneIcon} alt="" />
      <p>+7 (954) 333-44-55</p>
    </div>
    <div className="user-detail__contacts-item">
      <img src={gmailIcon} alt="" />
      <p>{user.email}</p>
    </div>
  </div>
);

export default UserDetailContacts;