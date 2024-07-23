import React from 'react';

const UserDescription: React.FC<{ user: any }> = ({ user }) => (
  <div className="user-detail__description">
    <div className="user-detail__description-container">
      <div className="user-detail__img-container">
        <img className="user-detail__img" src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      </div>
      <div className="user-detail__text-container">
        <h1>{user.first_name} {user.last_name}</h1>
        <h2>Партнер</h2>
      </div>
    </div>
  </div>
);

export default UserDescription;