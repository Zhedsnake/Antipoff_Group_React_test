
//! Это пока херня, потом заменить

import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { fetchUsers } from '../sclices/users/usersSlice';

const UserList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
