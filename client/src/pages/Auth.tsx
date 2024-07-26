import React, { useContext, useEffect, useState } from 'react';
import FormButton from "../components/UI/formButton/FormButton";
import LogInForm from "../components/Authentification/LogInForm";
import RegForm from "../components/Authentification/RegForm";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import { AuthContext } from "../context";
import useToken from "../hooks/useTocken";
import {AuthContextType} from "../types/AuthContext";
import {useDispatch, useSelector} from "react-redux";
import {logInAction, logInRegReducer, registrationAction} from "../store/logInRegReducer";
import {setDefInputs} from "../store/authForm";


const Auth: React.FC = () => {
    const [loggedEarlier, setLoggedEarlier] = useState<boolean>(false);
    const {
        setIsAuth,
        setToggleShow,
        defToggleShow
    } = useContext<AuthContextType>(AuthContext);

    const dispatch = useDispatch();
    const token = useSelector(state => state.logInRegReducer.token);
    const email = useSelector(state => state.authFormReducer.email);
    const password = useSelector(state => state.authFormReducer.password);


    const { fetching: fetchLogin, isLoading: isLoginLoading, error: loginError } = useFetching(async () => {
        dispatch(logInAction(email, password))
    });

    const { fetching: fetchReg, isLoading: isRegLoading, error: regError } = useFetching(async () => {
        dispatch(registrationAction(email, password))
    });

    useEffect(() => {
        const authenticateUser = async () => {
            if (token) {
                const tokenResponse = await useToken('token', token);
                setIsAuth(tokenResponse);
            }
        };
        authenticateUser().then();
    }, [token]);


    const handleLogIn = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetchLogin();
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetchReg();
    };

    const handleToggleForm = (prop: boolean) => {
        dispatch(setDefInputs())
        setToggleShow({...defToggleShow});
        setLoggedEarlier(prop);
    };


    useEffect(() => {
        return () => {
            dispatch(setDefInputs())
            setToggleShow({...defToggleShow});
        };
    }, []);


    return (
        <div className="auth">
            <main className="auth__form-container">


                {loggedEarlier ? (

                    //! Тут можно передвинуть это в компонент
                    // ! Тут можно ошибку запихнуть в форму, стилизовать както, если понадобится
                    isLoginLoading ? (
                        <Loader />
                    ) : (
                        <>
                            {loginError && <h1>{loginError}</h1>}
                            <LogInForm
                                handleLogIn={handleLogIn}
                            />
                            <FormButton onClick={() => handleToggleForm(false)}>Переключитесь на регистрацию</FormButton>
                        </>
                    )

                ) : (

                    //! Тут можно передвинуть это в компонент
                    //! Тут можно ошибку запихнуть в форму, стилизовать както, если понадобится
                    isRegLoading ? (
                        <Loader />
                    ) : (
                        <>
                            {regError && <h1>{regError}</h1>}
                            <RegForm
                                handleRegister={handleRegister}
                            />
                            <FormButton onClick={() => handleToggleForm(true)}>Переключитесь на вход в систему</FormButton>
                        </>
                    )
                )}
            </main>
        </div>
    );
};
export default Auth;
