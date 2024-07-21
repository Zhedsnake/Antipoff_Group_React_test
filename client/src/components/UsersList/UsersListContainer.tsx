import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

// import { getUsers } from '../../sclices/users/usersSlice';

import Pagination from '../UI/pagination/Pagination';
import UserListItem from './UserListItem';
import UsersListHeader from "./UsersListHeader";
import PurpleBackContainer from "../UI/purpleBackConteiner/PurpleBackContainer";


const UsersListContainer: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const users = useAppSelector((state) => state.users.users);
  // const status = useAppSelector((state) => state.users.status);
  // const currentPage = useAppSelector((state) => state.users.currentPage);

    //! Патом переделать в
  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(getUsers(currentPage));
  //   }
  // }, [status, dispatch, currentPage]);

  // const handlePageChange = (page: number) => {
  //   dispatch(getUsers(page));
  // };

    return (
        <div className="app">
            <main className="app__main">
                <PurpleBackContainer>
                    <UsersListHeader />
                </PurpleBackContainer>
                {/*<section className="app__users">*/}
                {/*    <div className="app__users-container">*/}
                {/*        <ul className="app__users-list">*/}
                {/*            {users.map((user) => (*/}
                {/*                <UserListItem key={user.id} user={user} />*/}
                {/*            ))}*/}
                {/*        </ul>*/}
                {/*    </div>*/}

                {/*    //! Патом интегрировать пагинацию*/}
                {/*  <Pagination*/}
                {/*      page={page}*/}
                {/*      totalPages={totalPages}*/}
                {/*      handlePageChange={handlePageChange}*/}
                {/*  />*/}
                {/*</section>*/}
            </main>
        </div>
    );
};

export default UsersListContainer;
