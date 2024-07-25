import React from 'react';

import BackButton from '../UI/backButton/BackButton';
import UserDescription from './UserDescription';
import LogoutButton from '../UI/LogoutButton/LogoutButton';
import {IStaffProps} from "../../types/stuffs";


const UserHeader: React.FC<IStaffProps> = ({ staff }) => {

    return (
          <header className="user-detail__header">
            <BackButton />
            <UserDescription staff={staff} />
            <LogoutButton />
          </header>
    );
};

export default UserHeader;