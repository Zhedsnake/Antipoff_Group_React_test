import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { getUsers } from '../../sclices/users/usersSlice';

import Pagination from './Pagination';
import UserListItem from './UserListItem';


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

  return (
    <section className="app__users">
      <div className="app__users-container">
        <ul className="app__users-list">
          {users.map((user) => (
            <UserListItem key={user.id} user={user} />
          ))}
        </ul>
      </div>
      <Pagination handlePageChange={handlePageChange} />
    </section>
  );
};

export default UserList;
