import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

// import { getUsers } from '../../sclices/users/usersSlice';

import PurpleBackContainer from "../components/UI/purpleBackConteiner/PurpleBackContainer";
import UsersListHeader from "../components/UsersList/UsersListHeader";
import Pagination from "../components/UI/pagination/Pagination";
import UserListItem from "../components/UsersList/UserListItem";

import {useFetching} from "../hooks/useFetching";
import UsersData from "../api/UsersDataService";
import Loader from "../components/UI/Loader/Loader";



const UsersLists: React.FC = () => {
    // const dispatch = useAppDispatch();
    // const users = useAppSelector((state) => state.users.users);
    // const status = useAppSelector((state) => state.users.status);
    // const currentPage = useAppSelector((state) => state.users.currentPage);


    //! Использовать для отправки формы и отслеживания загрузки с ошибкой
    // const [fetchUsers, isUsersLoading, usersError] = useFetching(async (page) => {
    //     const response = await UsersData.getUsersByPagination(page);
    //
    //     //! Посмотреть что пришло и переделать обработку массива
    //     console.log(response);
    //
    //     setUsers(...response.data.data)
    //     const totalCount = response.headers['total_pages']
    //     setTotalPages(totalCount);
    // })

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [users, setUsers] = useState([])

    const [fetchUsers, isUsersLoading, usersError] = useFetching(async (page) => {
        const response = await UsersData.getUsersByPagination(page);

        //! Посмотреть что пришло и переделать обработку массива
        console.log(response);

        setUsers(...response.data.data)
        const totalCount = response.headers['total_pages']
        setTotalPages(totalCount);
    })

    const handlePageChange = (page) => {
        setPage(page)
    }



    useEffect(() => {
        fetchUsers(page)
    }, [page])


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

                isUsersLoading
                ?
                    <Loader/>
                :
                {/*<section className="app__users">*/}
                {/*    <div className="app__users-container">*/}
                {/*        <ul className="app__users-list">*/}
                {/*            {users.map((user) => (*/}
                {/*                <UserListItem key={user.id} user={user} />*/}
                {/*            ))}*/}
                {/*        </ul>*/}
                {/*    </div>*/}

                {/*    //! Патом интегрировать пагинацию*/}
                {/*</section>*/}
                  <Pagination
                      page={page}
                      totalPages={totalPages}
                      handlePageChange={handlePageChange}
                  />
            </main>
        </div>
    );
};

export default UsersLists;
