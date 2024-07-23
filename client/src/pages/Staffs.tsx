import React, {useEffect, useState} from 'react';
import PurpleBackContainer from "../components/UI/purpleBackConteiner/PurpleBackContainer";
import StaffListHeader from "../components/Staff/StaffListHeader";
import Pagination from "../components/UI/pagination/Pagination";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import StaffsLIst from "../components/Staff/StaffsLIst";
import StaffDataService from "../api/StaffsDataService";


const Staffs: React.FC = () => {

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
    // const [limit, setLimit] = useState(8);
    const [staffs, setStaffs] = useState([]);

    const [fetchStaffs, isStaffsLoading, staffsError] = useFetching(async (page) => {
        const response = await StaffDataService.getStaffsByPagination(page);
        await setStaffs(response.data.data)
        const totalCount = response.data['total_pages'];
        await setTotalPages(totalCount);
        // await setTotalPages(useGetPagination(totalCount, limit));
    })


    useEffect(() => {
        fetchStaffs(page)
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

                {isStaffsLoading
                ?
                    <Loader/>
                :
                    <>
                        {staffsError && <h1>{staffsError}</h1>}
                        <StaffsLIst staff={staffs}/>
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

export default Staffs;
