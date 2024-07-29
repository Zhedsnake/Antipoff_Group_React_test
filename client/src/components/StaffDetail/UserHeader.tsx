import React from 'react';

import BackButton from '../UI/backButton/BackButton';
import UserDescription from './UserDescription';
import LogoutButton from '../UI/LogoutButton/LogoutButton';
import {StuffData} from "../../types/stuffsData/stuffData";

// Патом поменять принемаемые типы данных на более подробные
interface staffProps {
    staff: StuffData
}

// const UserHeader: React.FC<IStaffProps> = ({ staff }) => {
const UserHeader: React.FC<staffProps> = ({ staff }) => {

    return (
          <header className="user-detail__header">
            <BackButton />
            <UserDescription staff={staff} />
            <LogoutButton />
          </header>
    );
};

export default UserHeader;