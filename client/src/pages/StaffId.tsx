import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import UserHeader from "../components/StaffDetail/UserHeader";
import UserAboutMe from "../components/StaffDetail/UserAboutMe";
import PurpleBackContainer from "../components/UI/purpleBackConteiner/PurpleBackContainer";
import {useFetching} from "../hooks/useFetching";
import StaffsDataService from "../api/StaffsDataService";
import Loader from "../components/UI/Loader/Loader";
import {IStaff} from "../types/stuffs";
import {getStuffAction, getStuffsAction} from "../store/stuffsReducer";
import {useDispatch, useSelector} from "react-redux";


const StuffId: React.FC = () => {
  //! Там в header почемуто кнопки не меняются на брейкпоинтах. Потом исправить, если нужно будет.

  const dispatch = useDispatch();
  const { stuffId } = useParams<{ stuffId: string }>();

  const staffData = useSelector(state => state.getStuffsReducer.staffData);

  const [staff, setStaff] = useState<IStaff>();

  const { fetching: fetchStaff, isLoading: isStaffLoading, error: staffError } = useFetching(async (page) => {
    dispatch(getStuffAction(stuffId))
  })

  useEffect((): void => {
    if (staffData){
      setStaff(staffData);
    }
  }, [staffData]);

  useEffect(() => {
    if (stuffId) {
      fetchStaff(stuffId);
    }
  }, []);
  
  return (<div className="user-detail">
        {isStaffLoading ? (
            <Loader />
        ) : staffError ? (
            <h1>{staffError}</h1>
        ) : (
            staff && (
                <main className="user-detail__main">
                  <PurpleBackContainer>
                    <UserHeader staff={staff} />
                  </PurpleBackContainer>
                  <UserAboutMe staff={staff} />
                </main>
            )
        )}
      </div>
  );
};

export default StuffId;
