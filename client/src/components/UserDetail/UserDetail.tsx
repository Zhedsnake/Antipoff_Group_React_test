import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getUser } from '../../sclices/users/usersSlice';


import UserDetailHeader from './UserDetailHeader';
import UserDetailAboutMeInformation from './UserDetailAboutMeInformation';

const UserDetail: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.user);

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, [userId, dispatch]);

  return (
    <div className="user-detail">
      {user && (
        <main className="user-detail__main">  
          <UserDetailHeader user={user} />
          <UserDetailAboutMeInformation user={user} />
        </main>
      )}
    </div>
  );
};

export default UserDetail;


