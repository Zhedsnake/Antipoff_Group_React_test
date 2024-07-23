import React, {useEffect, useState} from 'react';
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

// Styles
import './styles/nule_styles.css';
import './styles/Imgs_limiter.css';
import './styles/Auth.css';
import './styles/Stuffs.css';
import './styles/StaffDetail.css';

// Redux
// import { Provider } from 'react-redux';
// import store from './store';


const App: React.FC = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const defLogReg = {
        name: '',
        email: '',
        password: '',
    };
    const defConfirmPassword = { defConf: ''};
    const defLogRegErrors = {
        nameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
    };
    const defToggleShow = {
        toggleShowPassword: false,
        toggleShowConfirmPassword: false,
    };

    const [logReg, setLogReg] = useState({...defLogReg});
    const [confirmPassword, setConfirmPassword] = useState({...defConfirmPassword});
    const [errorsLogReg, setErrorsLogReg] = useState({...defLogRegErrors});
    const [toggleShow, setToggleShow] = useState({...defToggleShow});

    const defaultInputs = () => {
        setLogReg({...defLogReg});
        setConfirmPassword({...defConfirmPassword});
        setToggleShow({...defToggleShow});
        setErrorsLogReg({...defLogRegErrors});
    };


    useEffect(() => {
        setLoading(true)

        const token: boolean = !!localStorage.getItem('token');

        setIsAuth(token);

        setLoading(false);
    }, [])

    return (
        // <Provider store={store}>
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
            defaultInputs,
            logReg,
            setLogReg,
            confirmPassword,
            setConfirmPassword,
            errorsLogReg,
            setErrorsLogReg,
            toggleShow,
            setToggleShow
        }}>
            <AppRouter/>
        </AuthContext.Provider>
        // </Provider>
    );
};

export default App;
