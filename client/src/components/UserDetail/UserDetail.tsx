import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getUser } from '../../sclices/users/usersSlice';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.user);
  const status = useAppSelector((state) => state.users.status);

  useEffect(() => {
    if (id) {
      dispatch(getUser(id));
    }
  }, [id, dispatch]);

  return (
    <div>
      {user && (
        <div>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <h1>{user.first_name} {user.last_name}</h1>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
