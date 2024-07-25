import React from 'react';
import {IStaffProps} from "../../types/stuffs";


const UserDescription: React.FC<IStaffProps> = ({ staff }) => (
  <div className="user-detail__description">
    <div className="user-detail__description-container">
      <div className="user-detail__img-container">
        <img className="user-detail__img" src={staff.avatar} alt={`${staff.first_name} ${staff.last_name}`} />
      </div>
      <div className="user-detail__text-container">
        <h1>{staff.first_name} {staff.last_name}</h1>
        <h2>Партнер</h2>
      </div>
    </div>
  </div>
);

export default UserDescription;