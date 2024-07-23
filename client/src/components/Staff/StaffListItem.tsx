import React from 'react';
import { Link } from "react-router-dom";

const StaffListItem: React.FC = ({ s }) => {
  return (
    <li className="app__user-list-item user-list-item">
        <Link to={`user-detail/${s.id}`}>
          <div className="user-list-item__container">
            <div className="user-list-item__image-container">
              <img className="user-list-item__image" src={s.avatar} alt={`${s.first_name} ${s.last_name}`} />
            </div>
            <h3 className="user-list-item__name">
              {s.first_name} {s.last_name}
            </h3>
          </div>
      </Link>
    </li>
  );
};

export default StaffListItem;
