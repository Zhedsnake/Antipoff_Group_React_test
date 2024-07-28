import React, { useContext, useEffect, useState } from 'react';
import FormButton from "../components/UI/formButton/FormButton";
import LogInForm from "../components/Authentification/LogInForm";
import RegForm from "../components/Authentification/RegForm";
import Loader from "../components/UI/Loader/Loader";
import {AuthContext, AuthContextType} from "../context";
import useToken from "../hooks/useTocken";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


const Auth: React.FC = () => {
    const [loggedEarlier, setLoggedEarlier] = useState<boolean>(false);
    const {
        setIsAuth,
        setToggleShow,
        defToggleShow
    } = useContext<AuthContextType>(AuthContext);

    // const dispatch = useDispatch();
    // const token = useSelector(state => state.logInRegReducer.token);
    // const email = useSelector(state => state.authFormReducer.email);
    // const password = useSelector(state => state.authFormReducer.password);


    const { email, password } = useTypedSelector(state => state.authForm);
    const {logInToken, logInError, logInLoading} = useTypedSelector(state => state.logIn);
    const {regToken, regError, regLoading} = useTypedSelector(state => state.registration);
    const {logInAction, registrationAction, defLogIn, defReg, setDefInputs } = useActions();


    // const { fetching: fetchLogin, isLoading: isLoginLoading, error: loginError } = useFetching(async () => {
    //     dispatch(logInAction(email, password))
    // });
    // const { fetching: fetchReg, isLoading: isRegLoading, error: regError } = useFetching(async () => {
    //     dispatch(registrationAction(email, password))
    // });

    const handleLogIn = async (e: React.FormEvent) => {
        e.preventDefault();
        await logInAction(email, password);
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        await registrationAction(email, password);
    };

    const handleToggleForm = (prop: boolean) => {
        setDefInputs()
        setToggleShow({...defToggleShow});
        setLoggedEarlier(prop);
    };

    useEffect(() => {
        const logInUser = async () => {
            if (logInToken) {
                const tokenResponse = await useToken('token', logInToken);
                setIsAuth(tokenResponse);
            }
        };
        logInUser().then();
    }, [logInToken]);

    useEffect(() => {
        const authenticateUser = async () => {
            if (regToken) {
                const tokenResponse = await useToken('token', regToken);
                setIsAuth(tokenResponse);
            }
        };
        authenticateUser().then();
    }, [regToken]);

    useEffect(() => {
        return () => {
            setToggleShow({...defToggleShow});
            defLogIn()
            defReg()
            setDefInputs()
        };
    }, []);


    return (
        <div className="auth">
            <main className="auth__form-container">


                {loggedEarlier ? (

                    //! Тут можно передвинуть это в компонент
                    // ! Тут можно ошибку запихнуть в форму, стилизовать както, если понадобится
                    logInLoading ? (
                        <Loader />
                    ) : (
                        <>
                            {logInError && <h1>{logInError}</h1>}
                            <LogInForm
                                handleLogIn={handleLogIn}
                            />
                            <FormButton onClick={() => handleToggleForm(false)}>Переключитесь на регистрацию</FormButton>
                        </>
                    )

                ) : (

                    //! Тут можно передвинуть это в компонент
                    //! Тут можно ошибку запихнуть в форму, стилизовать както, если понадобится
                    regLoading ? (
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
