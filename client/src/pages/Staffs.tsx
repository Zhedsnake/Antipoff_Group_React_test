import React, {useEffect, useState} from 'react';
import PurpleBackContainer from "../components/UI/purpleBackConteiner/PurpleBackContainer";
import StaffListHeader from "../components/Staff/StaffListHeader";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";
import StaffsLIst from "../components/Staff/StaffsLIst";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {StuffData} from "../types/stuffsData/stuffData";


const Staffs: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    // const [limit, setLimit] = useState(8);

    const [staffs, setStaffs] = useState<StuffData[]>([]);

    // const dispatch = useDispatch();
    // const staffsTotalPages = useSelector(state => state.stuffsReducer.total_pages);
    // const staffsData = useSelector(state => state.stuffsReducer.stuffsData);


    const {data, error: staffsError, loading: isStaffsLoading} = useTypedSelector(state => state.stuffs)
    const {getStuffsAction} = useActions()


    // const { fetching: fetchStaffs, isLoading: isStaffsLoading, error: staffsError } = useFetching(async (page) => {
    //     dispatch(getStuffsAction(page))
    //     await setTotalPages(useGetPagination(totalCount, limit));
    // })

    useEffect((): void => {
        if (data.total_pages){
            setTotalPages(data.total_pages);
        }
    }, [data.total_pages]);

    useEffect((): void => {
        if (data.stuffs) {
            setStaffs(data.stuffs);
        }
    }, [data.stuffs]);

    useEffect((): void => {
        getStuffsAction(page)
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
