import React, { useEffect, useState } from 'react';
import FormButton from "../components/UI/formButton/FormButton";
import LogInForm from "../components/Authentification/LogInForm";
import RegForm from "../components/Authentification/RegForm";
import { useFetching } from "../hooks/useFetching";
import AuthService from "../api/AuthService";
import Loader from "../components/UI/Loader/Loader";

const AuthEam: React.FC = () => {
    const [loggedEarlier, setLoggedEarlier] = useState(false);

    // Reg/Login
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

    const [fetchLogin, isLoginLoading, loginError] = useFetching(async (logReg) => {
        const response = await AuthService.logInRequest(logReg.email, logReg.password);
        console.log(response);
    });

    const [fetchReg, isRegLoading, regError] = useFetching(async (logReg) => {
        const response = await AuthService.registerRequest(logReg.email, logReg.password);
        console.log(response);
    });

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
            await fetchLogin(logReg);
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
            await fetchReg(logReg);
    };

    useEffect(() => {
        return () => {
            defaultInputs();
        };
    }, []);

    const loginErrorText = "Неверная почта или пароль";
    const regErrorText = "Чтото пошло не так при регистрации";

    return (
        <div className="auth">
            <main className="auth__form-container">
                {loggedEarlier ? (
                    isLoginLoading ? (
                        <Loader />
                    ) : (
                        <>
                            {loginError && <h1>{loginErrorText}</h1>}
                            <LogInForm
                                handleLogIn={handleLogIn}
                                defaultInputs={defaultInputs}
                                logReg={logReg}
                                setLogReg={setLogReg}
                                errors={errors}
                                toggleShow={toggleShow}
                                setToggleShow={setToggleShow}
                            />
                            <FormButton onClick={() => setLoggedEarlier(false)}>Переключитесь на регистрацию</FormButton>
                        </>
                    )
                ) : (
                    isRegLoading ? (
                        <Loader />
                    ) : (
                        <>
                            {regError && <h1>{regErrorText}</h1>}
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
                            <FormButton onClick={() => setLoggedEarlier(true)}>Переключитесь на вход в систему</FormButton>
                        </>
                    )
                )}
            </main>
        </div>
    );
};

export default AuthEam;
