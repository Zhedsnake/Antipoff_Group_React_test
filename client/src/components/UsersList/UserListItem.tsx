import React from 'react';
import { Link } from "react-router-dom";

const UserListItem: React.FC<{ user: any }> = ({ user }) => {
  return (
    <li className="app__user-list-item user-list-item">
        <Link to={`user-detail/${user.id}`}>
          <div className="user-list-item__container">
            <div className="user-list-item__image-container">
              <img className="user-list-item__image" src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            </div>
            <h3 className="user-list-item__name">
              {user.first_name} {user.last_name}
            </h3>
          </div>
      </Link>
    </li>
  );
};

export default UserListItem;
