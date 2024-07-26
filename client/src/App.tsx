import React, {useEffect, useState} from 'react';
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import Loader from "./components/UI/Loader/Loader";
import {ConfirmPasswordType, LogRegErrorsType, LogRegType, ToggleShowType} from "./types/AuthForm";


// Styles
import './styles/nule_styles.css';
import './styles/Imgs_limiter.css';
import './styles/Auth.css';
import './styles/Stuffs.css';
import './styles/StaffDetail.css';

// Redux
import { Provider } from 'react-redux';
import store from "./store";



const App: React.FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const defToggleShow: ToggleShowType = {
        toggleShowPassword: false,
        toggleShowConfirmPassword: false
    };
    const [toggleShow, setToggleShow] = useState<ToggleShowType>({...defToggleShow});


    useEffect(():void => {
        setLoading(true);

        const token: boolean = !!localStorage.getItem('token');

        setIsAuth(token);

        setLoading(false);
    }, [])


    if (isLoading) {
        return <Loader/>
    }

    return (
        <Provider store={store}>
            <AuthContext.Provider value ={{
                isAuth,
                setIsAuth,
                isLoading,
                toggleShow,
                setToggleShow,
                defToggleShow
            }}>
                <AppRouter/>
            </AuthContext.Provider>
        </Provider>
    );
};

export default App;
