import React, {useEffect, useState} from 'react';

// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import { getUsers } from '../../sclices/users/usersSlice';

import PurpleBackContainer from "../components/UI/purpleBackConteiner/PurpleBackContainer";
import StaffListHeader from "../components/Staff/StaffListHeader";
import Pagination from "../components/UI/pagination/Pagination";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import StaffLIst from "../components/Staff/StaffLIst";
import StaffDataService from "../api/UsersDataService";



const Staff: React.FC = () => {
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
    const [limit, setLimit] = useState(8);
    const [staff, setStaff] = useState([]);

    const [fetchStaff, isStaffLoading, staffError] = useFetching(async (page) => {
        const response = await StaffDataService.getStaffByPagination(page);
        await setStaff(response.data.data)
        const totalCount = response.data['total_pages'];
        await setTotalPages(totalCount);
        // await setTotalPages(useGetPagination(totalCount, limit));
    })


    useEffect(() => {
        fetchStaff(page)
    }, [page]);

    const handlePageChange = (page: number) => {
        setPage(page)
    };


    return (
        <div className="app">
            <main className="app__main">
                <PurpleBackContainer>
                    <StaffListHeader />
                </PurpleBackContainer>

                {isStaffLoading
                ?
                    <Loader/>
                :
                    <>
                        {staffError && <h1>{staffError}</h1>}
                        <StaffLIst staff={staff}/>
                        <Pagination
                            page={page}
                            handlePageChange={handlePageChange}
                            totalPages={totalPages}
                        />
                    </>
                }
            </main>
        </div>
    );
};

export default Staff;
