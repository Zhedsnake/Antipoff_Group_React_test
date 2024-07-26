import React, {useEffect, useState} from 'react';
import PurpleBackContainer from "../components/UI/purpleBackConteiner/PurpleBackContainer";
import StaffListHeader from "../components/Staff/StaffListHeader";
import Pagination from "../components/UI/pagination/Pagination";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import StaffsLIst from "../components/Staff/StaffsLIst";
import StaffDataService from "../api/StaffsDataService";
import {IStaff} from "../types/stuffs";
import {logInAction} from "../store/logInRegReducer";
import {useDispatch, useSelector} from "react-redux";
import {getStuffsAction, getStuffsReducer} from "../store/stuffsReducer";


const Staffs: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    // const [limit, setLimit] = useState(8);
    const [staffs, setStaffs] = useState<IStaff[]>([]);

    const dispatch = useDispatch();
    const staffsTotalPages = useSelector(state => state.getStuffsReducer.total_pages);
    const staffsData = useSelector(state => state.getStuffsReducer.stuffsData);


    const { fetching: fetchStaffs, isLoading: isStaffsLoading, error: staffsError } = useFetching(async (page) => {
        dispatch(getStuffsAction(page))
        // await setTotalPages(useGetPagination(totalCount, limit));
    })

    useEffect((): void => {
        if (staffsTotalPages){
            setTotalPages(staffsTotalPages);
        }
    }, [staffsTotalPages]);

    useEffect((): void => {
        if (staffsData) {
            setStaffs(staffsData);
        }
    }, [staffsData]);

    useEffect((): void => {
        fetchStaffs(page)
    }, [page]);

    const handlePageChange = (page: number): void => {
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
                        <StaffsLIst staffs={staffs}/>
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
