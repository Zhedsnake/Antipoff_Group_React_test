import React from 'react';

// hooks
// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

// import { logIn, register } from '../../sclices/auth/authSlice';

// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import { toggleMode } from '../../sclices/authForm/authFormSlice';


import FormAuth from "../components/UI/formAuth/FormAuth";
import AuthHeader from "../components/UI/authHeader/AuthHeader";
import NameInput from "../components/Authentification/NameInput";
import EmailInput from "../components/Authentification/EmailInput";
import PasswordInput from "../components/Authentification/PasswordInput";
import FormButton from "../components/UI/formButton/FormButton";
import ConfirmPasswordInput from "../components/Authentification/ConfirmPasswordInput";


const Auth: React.FC = () => {
    // Используем dispatch для отправки действий
    // const dispatch = useAppDispatch();

    const loggedEarlier:boolean = true;
    console.log(`logged in earlier ${loggedEarlier}`)

    // Получаем текущие значения полей email и password из состояния
    // const { mode, email, password, emailError, passwordError, confirmPasswordError } = useAppSelector((state) => state.authForm);
    // const dispatch = useAppDispatch();
    // const mode = useAppSelector((state) => state.authForm.mode);


    // Обработчик для входа
    const handleLogIn = () => {
        // e.preventDefault()
        // if (!emailError && !passwordError) {
        //   dispatch(logIn({ email, password }));
        // }
    };

    // Обработчик для регистрации
    const handleRegister = () => {
        // e.preventDefault()
        // if (!emailError && !passwordError && !confirmPasswordError) {
        //   dispatch(register({ email, password }));
        // }
    };

    const handleToggleForm = () => {

    };

    return (
        <div className="auth">
            <main className="auth__form-container">

                loggedEarlier
                    ?
                            <FormAuth onSubmit={handleLogIn}>
                                <AuthHeader>Вход</AuthHeader>
                                <NameInput />
                                <EmailInput />
                                <PasswordInput />
                                <FormButton>Войти</FormButton>
                            </FormAuth>
                            <FormButton onClick={handleToggleForm}>Переключитесь на регистрацию</FormButton>
                    :
                            <FormAuth onSubmit={handleRegister}>
                                <AuthHeader>Регистрация</AuthHeader>
                                <NameInput />
                                <EmailInput />
                                <PasswordInput />
                                <ConfirmPasswordInput />
                                <FormButton>Зарегистрироваться</FormButton>
                            </FormAuth>
                            <FormButton onClick={handleToggleForm}>Переключитесь на вход в систему</FormButton>
            </main>
        </div>
    );
};

export default Auth;
