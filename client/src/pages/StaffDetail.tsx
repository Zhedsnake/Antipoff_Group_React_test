import React from 'react';
import {useParams} from "react-router-dom";

// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import { getUser } from '../../sclices/users/usersSlice';

import UserHeader from "../components/StaffDetail/UserHeader";
import UserAboutMe from "../components/StaffDetail/UserAboutMe";
import PurpleBackContainer from "../components/UI/purpleBackConteiner/PurpleBackContainer";


const App: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  // const dispatch = useAppDispatch();
  // const user = useAppSelector((state) => state.users.user);

  // useEffect(() => {
  //   if (userId) {
  //     dispatch(getUser(userId));
  //   }
  // }, []);
  
  return (
    // <UserContainer/>
    <div className="user-detail">
      {user && (
          <main className="user-detail__main">
            <PurpleBackContainer>
                <UserHeader user={user} />
            </PurpleBackContainer>
            <UserAboutMe user={user} />
          </main>
      )}
    </div>
  );
};

export default App;
