import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import UserHeader from "../components/StaffDetail/UserHeader";
import UserAboutMe from "../components/StaffDetail/UserAboutMe";
import PurpleBackContainer from "../components/UI/purpleBackConteiner/PurpleBackContainer";
import {useFetching} from "../hooks/useFetching";
import StaffsDataService from "../api/StaffsDataService";
import Loader from "../components/UI/Loader/Loader";


const StuffId: React.FC = () => {


  //! Там в header почемуто кнопки не меняются на брейкпоинтах. Потом исправить, если нужно будет.


  const { stuffId } = useParams<{ stuffId: string }>();

  const [staff, setStaff] = useState({});

  const [fetchStaff, isStaffLoading, staffError] = useFetching(async (page) => {
    const response = await StaffsDataService.getStaffById(stuffId);
    await setStaff(response.data.data)
  })

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
                    <UserHeader user={staff} />
                  </PurpleBackContainer>
                  <UserAboutMe user={staff} />
                </main>
            )
        )}
      </div>
  );
};

export default StuffId;
