import React from 'react';

import UserEmployee from './UserEmployee';

import phoneIcon from "../../img/phone.svg";
import gmailIcon from "../../img/gmail.svg";
import {StuffData} from "../../types/stuffsData/stuffData";

interface staffProp {
    staff: StuffData
}

const UserAboutMe: React.FC<staffProp> = ({ staff }) => (
  <div className="user-detail__about-me-information">
      <div className="user-detail__about-me-information-container">
          <UserEmployee />
          <div className="user-detail__contacts-container">
              <div className="user-detail__contacts-item">
                  <img src={phoneIcon} alt="" />
                  <p>+7 (954) 333-44-55</p>
              </div>
              <div className="user-detail__contacts-item">
                  <img src={gmailIcon} alt="" />
                  <p>{staff.email}</p>
              </div>
          </div>
      </div>
  </div>
);

export default UserAboutMe;