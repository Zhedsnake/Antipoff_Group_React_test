import React, { useContext, useEffect, useState } from 'react';
import FormButton from "../components/UI/formButton/FormButton";
import LogInForm from "../components/Authentification/LogInForm";
import RegForm from "../components/Authentification/RegForm";
import { useFetching } from "../hooks/useFetching";
import AuthService from "../api/AuthService";
import Loader from "../components/UI/Loader/Loader";
import { AuthContext } from "../context";

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
    const { isAuth, setIsAuth } = useContext(AuthContext);

    // Используем dispatch для отправки действий
    // const dispatch = useAppDispatch();
    // Получаем текущие значения полей email и password из состояния
    // const { mode, email, password, emailError, passwordError, confirmPasswordError } = useAppSelector((state) => state.authForm);
    // const confirmPassword = useAppSelector((state) => state.authForm.confirmPassword);
    // const dispatch = useAppDispatch();
    // const mode = useAppSelector((state) => state.authForm.mode);
    // const showPassword = useAppSelector((state) => state.authForm.showPassword);
    // const showConfirmPassword = useAppSelector((state) => state.authForm.showConfirmPassword);


    const [logReg, setLogReg] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({
        nameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
    });
    const [toggleShow, setToggleShow] = useState({
        toggleShowPassword: false,
        toggleShowConfirmPassword: false,
    });

    const [fetchLogin, isLoginLoading, loginError] = useFetching(async () => {
        const response = await AuthService.logInRequest(logReg.email, logReg.password);
        await tokenInBrowser(response.data.token);
    });

    const [fetchReg, isRegLoading, regError] = useFetching(async () => {
        const response = await AuthService.registerRequest(logReg.email, logReg.password);
        await tokenInBrowser(response.data.token);
    });

    const tokenInBrowser = async (prop: string) => {
        await localStorage.setItem('token', prop);

        if (localStorage.getItem('token')) {
            setIsAuth(true);
        }
    };

    const defaultInputs = () => {
        setLogReg({
            name: '',
            email: '',
            password: '',
        });

        setToggleShow({
            toggleShowPassword: false,
            toggleShowConfirmPassword: false,
        });

        setConfirmPassword('');
    };

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
                    isLoginLoading ? (
                        <Loader />
                    ) : (
                        <>
                            {loginError && <h1>{loginError}</h1>}
                            <LogInForm
                                handleLogIn={handleLogIn}
                                defaultInputs={defaultInputs}
                                logReg={logReg}
                                setLogReg={setLogReg}
                                errors={errors}
                                toggleShow={toggleShow}
                                setToggleShow={setToggleShow}
                            />
                            <FormButton onClick={() => handleTogleForm(false)}>Переключитесь на регистрацию</FormButton>
                        </>
                    )
                ) : (
                    isRegLoading ? (
                        <Loader />
                    ) : (
                        <>
                            {regError && <h1>{regError}</h1>}
                            <RegForm
                                handleRegister={handleRegister}
                                defaultInputs={defaultInputs}
                                logReg={logReg}
                                setLogReg={setLogReg}
                                confirmPassword={confirmPassword}
                                setConfirmPassword={setConfirmPassword}
                                errors={errors}
                                toggleShow={toggleShow}
                                setToggleShow={setToggleShow}
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
