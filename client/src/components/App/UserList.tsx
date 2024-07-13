import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { getUsers } from '../../sclices/users/usersSlice';

import { API_URL } from '../../api/config';


const UserList: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const status = useAppSelector((state) => state.users.status);
  const currentPage = useAppSelector((state) => state.users.currentPage);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getUsers(currentPage));
    }
  }, [status, dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    dispatch(getUsers(page));
  };

  let content;

  if (status === 'succeeded') {
    content = (
      <div className="app__users-container">
        <ul className="app__users-list">
          {users.map((user) => (
            <li key={user.id} className="app__user-list-item user-list-item">
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
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section className="app__users">
      {content}
      <div className="app__pagination pagination">
          <button className="pagination__button" onClick={() => handlePageChange(1)}>1</button>
          <button className="pagination__button" onClick={() => handlePageChange(2)}>2</button>
      </div>
    </section>
  );
};

export default UserList;
