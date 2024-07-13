import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getUsers } from '../../sclices/users/usersSlice';


const UserList: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const status = useAppSelector((state) => state.users.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getUsers());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'succeeded') {
    content = (
      <div className="app__users-container">
        <ul className="app__users-list">
          {users.map((user) => (
            <li key={user.id} className="app__user-list-item user-list-item">
              <div className="user-list-item__container">
                <div className="user-list-item__image-container">
                  <img className="user-list-item__image" src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                </div>
                <h3 className="user-list-item__name">
                  {user.first_name} {user.last_name}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <section className="app__users">{content}</section>;
};

export default UserList;
