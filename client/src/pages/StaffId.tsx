import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import UserHeader from "../components/StaffDetail/UserHeader";
import UserAboutMe from "../components/StaffDetail/UserAboutMe";
import PurpleBackContainer from "../components/UI/purpleBackConteiner/PurpleBackContainer";
import Loader from "../components/UI/Loader/Loader";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {StuffData} from "../types/stuffsData/stuffData";
import {setDefInputs} from "../store/authFormReducer";


const StuffId: React.FC = () => {
  //! Там в header почемуто кнопки не меняются на брейкпоинтах. Потом исправить, если нужно будет.


  const [Staff, setStaff] = useState<StuffData>();

  const { stuffId } = useParams<{ stuffId: string }>();

  // const dispatch = useDispatch();
  // const staffData = useSelector(state => state.getStuffsReducer.staffData);

  const {oneStaff, error: staffError, loading: isStaffLoading} = useTypedSelector(state => state.oneStuff)
  const {getOneStuffAction, defOneStuff} = useActions()


  // const { fetching: fetchStaff, isLoading: isStaffLoading, error: staffError } = useFetching(async (page) => {
  //   dispatch(getStuffAction(stuffId))
  // })

  useEffect((): void => {
    if (oneStaff){
      setStaff(oneStaff);
    }
  }, [oneStaff]);

  useEffect(() => {
    if (stuffId) {
      getOneStuffAction(stuffId);
    }
  }, []);

  useEffect(() => {
    return () => {
      defOneStuff()
    };
  }, []);
  
  return (<div className="user-detail">
        {isStaffLoading ? (
            <Loader />
        ) : staffError ? (
            <h1>{staffError}</h1>
        ) : (
            Staff && (
                <main className="user-detail__main">
                  <PurpleBackContainer>
                    <UserHeader staff={Staff} />
                  </PurpleBackContainer>
                  <UserAboutMe staff={Staff} />
                </main>
            )
        )}
      </div>
  );
};

export default StuffId;
