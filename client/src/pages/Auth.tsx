import React, { useContext, useEffect, useState } from 'react';
import FormButton from "../components/UI/formButton/FormButton";
import LogInForm from "../components/Authentification/LogInForm";
import RegForm from "../components/Authentification/RegForm";
import { useFetching } from "../hooks/useFetching";
import AuthService from "../api/AuthService";
import Loader from "../components/UI/Loader/Loader";
import { AuthContext } from "../context";
import useToken from "../hooks/useTocken";

// hooks
// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import { setEmail } from '../../sclices/authForm/authFormSlice';
// import { setConfirmPassword, toggleShowConfirmPassword } from '../../sclices/authForm/authFormSlice';
// import { setPassword, toggleShowPassword } from '../../sclices/authForm/authFormSlice';
// import { logIn, register } from '../../sclices/auth/authSlice';
// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import { toggleMode } from '../../sclices/authForm/authFormSlice';

const Auth: React.FC = () => {
    const [loggedEarlier, setLoggedEarlier] = useState(false);
    const {
        setIsAuth,
        defaultInputs,
        logReg,
    } = useContext(AuthContext);


    // Используем dispatch для отправки действий
    // const dispatch = useAppDispatch();
    // Получаем текущие значения полей email и password из состояния
    // const { mode, email, password, emailError, passwordError, confirmPasswordError } = useAppSelector((state) => state.authForm);
    // const confirmPassword = useAppSelector((state) => state.authForm.confirmPassword);
    // const dispatch = useAppDispatch();
    // const mode = useAppSelector((state) => state.authForm.mode);
    // const showPassword = useAppSelector((state) => state.authForm.showPassword);
    // const showConfirmPassword = useAppSelector((state) => state.authForm.showConfirmPassword);


    const [fetchLogin, isLoginLoading, loginError] = useFetching(async () => {
        const response = await AuthService.logInRequest(logReg.email, logReg.password);
        const tokenRepose = useToken('token', response.data.token);
        setIsAuth(tokenRepose);
    });

    const [fetchReg, isRegLoading, regError] = useFetching(async () => {
        const response = await AuthService.registerRequest(logReg.email, logReg.password);
        const tokenRepose = useToken('token', response.data.token);
        setIsAuth(tokenRepose);
    });


    const handleLogIn = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetchLogin();
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetchReg();
    };

    const handleTogleForm = (prop: boolean) => {
        defaultInputs();
        setLoggedEarlier(prop);
    };


    useEffect(() => {
        return () => {
            defaultInputs();
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
                            <FormButton onClick={() => handleTogleForm(false)}>Переключитесь на регистрацию</FormButton>
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
                            <FormButton onClick={() => handleTogleForm(true)}>Переключитесь на вход в систему</FormButton>
                        </>
                    )
                )}
            </main>
        </div>
    );
};

export default Auth;
